import { NextResponse } from "next/server";

import {
  subscribeToConvertKit,
  type ConvertKitSubscriberPayload,
} from "@/lib/kit/convertkit-client";
import { apiLogger } from "@/lib/logger";

type KitFields = Record<string, string | null | undefined>;

interface BrevoPayload {
  email: string;
  attributes: Record<string, string | number>;
  ext_id: string;
  updateEnabled: boolean;
  listIds: number[];
}

interface BrevoResult {
  success: boolean;
  status: number;
  data?: unknown;
  error?: {
    message: string;
    details?: unknown;
  };
  durationMs: number;
  duplicate?: boolean;
}

const BREVO_API_URL = "https://api.brevo.com/v3/contacts";

const assignIfString = (
  target: Record<string, string | number>,
  key: string,
  value?: string | null,
) => {
  if (typeof value === "string" && value.trim() !== "") {
    target[key] = value.trim();
  }
};

const buildBrevoAttributes = (
  firstName: string,
  lastName: string,
  fields: KitFields,
) => {
  const attributes: Record<string, string | number> = {
    FIRSTNAME: firstName,
    COUNTRIES: "United States",
  };

  assignIfString(attributes, "LASTNAME", lastName);
  assignIfString(
    attributes,
    "INCOME",
    fields.cual_es_tu_ingreso_mensual ?? undefined,
  );
  assignIfString(
    attributes,
    "CARD_PREFERENCE",
    fields.que_es_lo_que_mas_importante_en_una_tarjeta_de_credito ?? undefined,
  );
  assignIfString(attributes, "PAIS", fields.pais ?? fields.Pais ?? undefined);
  assignIfString(
    attributes,
    "MARCA",
    fields.marca ?? fields.Marca ?? undefined,
  );
  assignIfString(
    attributes,
    "QUIZ_TARJETAS",
    fields.quiz_tarjetas ?? undefined,
  );
  assignIfString(
    attributes,
    "UTM_SOURCE",
    fields.utm_source ?? fields.source ?? undefined,
  );
  assignIfString(
    attributes,
    "UTM_MEDIUM",
    fields.utm_medium ?? fields.medium ?? undefined,
  );
  assignIfString(
    attributes,
    "UTM_CAMPAIGN",
    fields.utm_campaign ?? fields.campaign ?? undefined,
  );
  assignIfString(
    attributes,
    "UTM_TERM",
    fields.utm_term ?? fields.term ?? undefined,
  );
  assignIfString(
    attributes,
    "UTM_CONTENT",
    fields.utm_content ?? fields.content ?? undefined,
  );
  assignIfString(attributes, "SOURCE", fields.source ?? undefined);
  assignIfString(attributes, "MEDIUM", fields.medium ?? undefined);
  assignIfString(attributes, "CAMPAIGN", fields.campaign ?? undefined);
  assignIfString(attributes, "TERM", fields.term ?? undefined);
  assignIfString(attributes, "CONTENT", fields.content ?? undefined);
  assignIfString(
    attributes,
    "CONSENT",
    fields.acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones ??
      undefined,
  );
  assignIfString(attributes, "DATE_CREATED", fields.date_created ?? undefined);

  return attributes;
};

const parseJson = async (response: Response) => {
  const text = await response.text();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    apiLogger.warn("Brevo API: Failed to parse JSON response", { error });
    return text;
  }
};

const sendToBrevo = async (
  payload: BrevoPayload,
  apiKey: string,
  metadata: { email: string; extId: string },
): Promise<BrevoResult> => {
  const startedAt = performance.now();

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const responseBody = await parseJson(response);
    const durationMs = performance.now() - startedAt;

    if (!response.ok) {
      const errorCode = (responseBody as { code?: string })?.code;
      const duplicateContact = errorCode === "duplicate_parameter";

      if (duplicateContact) {
        apiLogger.info("Brevo API: Contact already exists", {
          email: metadata.email,
          ext_id: metadata.extId,
          status: response.status,
        });

        return {
          success: true,
          status: response.status,
          data: responseBody,
          durationMs,
          duplicate: true,
        };
      }

      apiLogger.error("Brevo API: Error response", undefined, {
        status: response.status,
        body: responseBody,
      });

      return {
        success: false,
        status: response.status,
        durationMs,
        error: {
          message:
            (responseBody as { message?: string })?.message ??
            "Failed to create contact in Brevo",
          details: responseBody,
        },
      };
    }

    apiLogger.info("Brevo API: Contact processed", {
      email: metadata.email,
      ext_id: metadata.extId,
      status: response.status,
    });

    return {
      success: true,
      status: response.status,
      data: responseBody,
      durationMs,
    };
  } catch (error) {
    const durationMs = performance.now() - startedAt;
    apiLogger.error("Brevo API: Network or unexpected error", error);

    return {
      success: false,
      status: 0,
      durationMs,
      error: {
        message:
          error instanceof Error ? error.message : "Unexpected Brevo error",
        details: error,
      },
    };
  }
};

export async function POST(request: Request) {
  const kitPayload = (await request.json()) as ConvertKitSubscriberPayload;
  const { email_address, first_name } = kitPayload;
  const kitFields = (kitPayload.fields ?? {}) as KitFields;

  if (!email_address || !first_name) {
    return NextResponse.json(
      { error: "Email and first name are required" },
      { status: 400 },
    );
  }

  const brevoApiKey = process.env.BREVO_API_KEY;

  if (!brevoApiKey) {
    return NextResponse.json(
      { error: "Brevo API key is not configured" },
      { status: 500 },
    );
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const extId = `topfinanzas-us-${timestamp}`;
  const lastName = kitFields.last_name ?? "";

  const brevoAttributes = buildBrevoAttributes(
    first_name,
    typeof lastName === "string" ? lastName : "",
    kitFields,
  );

  const brevoPayload: BrevoPayload = {
    email: email_address,
    attributes: brevoAttributes,
    ext_id: extId,
    updateEnabled: false,
    listIds: [9, 5],
  };

  const [brevoResult, convertKitResult] = await Promise.all([
    sendToBrevo(brevoPayload, brevoApiKey, {
      email: email_address,
      extId,
    }),
    subscribeToConvertKit({
      ...kitPayload,
      state: kitPayload.state ?? "active",
    }),
  ]);

  if (!brevoResult.success) {
    return NextResponse.json(
      {
        error:
          brevoResult.error?.message ?? "Failed to create contact in Brevo",
        details: {
          brevo: brevoResult,
          convertkit: convertKitResult,
        },
      },
      { status: brevoResult.status || 500 },
    );
  }

  if (!convertKitResult.success) {
    apiLogger.error(
      "ConvertKit API: Subscription failed but Brevo succeeded",
      undefined,
      { convertKitResult },
    );
  }

  return NextResponse.json(
    {
      message: brevoResult.duplicate
        ? "Subscription processed (existing Brevo contact)"
        : "Subscription processed",
      brevo: brevoResult,
      convertkit: convertKitResult,
    },
    { status: 200 },
  );
}
