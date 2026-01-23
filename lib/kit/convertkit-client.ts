import { logger } from "@/lib/logger";
export interface ConvertKitSubscriberPayload {
  email_address: string;
  first_name: string;
  state?: string;
  fields?: Record<string, string | number | boolean | null>;
  [key: string]: unknown;
}

export interface ConvertKitResult {
  success: boolean;
  status: number;
  data?: unknown;
  error?: {
    message: string;
    code?: string;
    details?: unknown;
  };
  durationMs: number;
}

export interface SubscribeToConvertKitOptions {
  timeoutMs?: number;
  apiKey?: string;
  apiUrl?: string;
}

const DEFAULT_TIMEOUT_MS = 10000;
const SUCCESS_STATUS_CODES = new Set([200, 201, 202, 204, 409, 422]);

const getApiCredentials = (overrideKey?: string) => {
  const apiKey =
    overrideKey ?? process.env.KIT_API_KEY ?? process.env.KIT_API_KEY ?? "";

  const apiUrl =
    process.env.KIT_API_URL ?? "https://api.kit.com/v4/subscribers";

  return { apiKey: apiKey.trim(), apiUrl };
};

const parseJsonSafe = (raw: string) => {
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    logger.warn("[ConvertKit API] Failed to parse JSON response", { error });
    return raw;
  }
};

export async function subscribeToConvertKit(
  payload: ConvertKitSubscriberPayload,
  options: SubscribeToConvertKitOptions = {},
): Promise<ConvertKitResult> {
  const startedAt = performance.now();
  const { apiKey, apiUrl } = getApiCredentials(options.apiKey);

  if (!apiKey) {
    return {
      success: false,
      status: 0,
      durationMs: performance.now() - startedAt,
      error: {
        message: "ConvertKit API key is not configured",
        code: "missing_api_key",
      },
    };
  }

  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    options.timeoutMs ?? DEFAULT_TIMEOUT_MS,
  );

  try {
    const response = await fetch(options.apiUrl ?? apiUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const rawBody = await response.text();
    const parsedBody = parseJsonSafe(rawBody);

    const durationMs = performance.now() - startedAt;
    const isSuccessful =
      SUCCESS_STATUS_CODES.has(response.status) || response.ok;

    if (!isSuccessful) {
      logger.error("[ConvertKit API] Error response", {
        status: response.status,
        body: parsedBody,
      });

      return {
        success: false,
        status: response.status,
        durationMs,
        error: {
          message:
            (parsedBody as { message?: string })?.message ??
            "Failed to create subscriber in ConvertKit",
          code: (parsedBody as { code?: string })?.code,
          details: parsedBody,
        },
      };
    }

    logger.info("[ConvertKit API] Subscriber processed", {
      status: response.status,
      email: payload.email_address,
    });

    return {
      success: true,
      status: response.status,
      data: parsedBody,
      durationMs,
    };
  } catch (error) {
    const durationMs = performance.now() - startedAt;

    if ((error as Error).name === "AbortError") {
      logger.error("[ConvertKit API] Request aborted due to timeout", {
        timeoutMs: options.timeoutMs ?? DEFAULT_TIMEOUT_MS,
      });

      return {
        success: false,
        status: 0,
        durationMs,
        error: {
          message: "ConvertKit request timed out",
          code: "timeout",
        },
      };
    }

    logger.error("[ConvertKit API] Network or unexpected error", error);

    return {
      success: false,
      status: 0,
      durationMs,
      error: {
        message: (error as Error)?.message ?? "Unexpected ConvertKit error",
        code: "unexpected_error",
        details: error,
      },
    };
  } finally {
    clearTimeout(timeout);
  }
}
