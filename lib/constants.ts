// Constant strings used throughout the application for UK market

export const metadata = {
  title: "Find Your Perfect Credit Card - TopFinance UK",
  description: "Find the perfect credit card tailored to your needs",
};

export const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export const BRAND_STATIC_FIELDS = {
  Pais: "México",
  Marca: "Top Finanzas",
} as const;

export const BRAND_STATIC_FIELDS_LOWER = {
  pais: BRAND_STATIC_FIELDS.Pais,
  marca: BRAND_STATIC_FIELDS.Marca,
} as const;

export const commonStrings = {
  copyright: "© Top Networks Inc. 2024",
  important: {
    prefix: "Importante:",
    emailVerification:
      "por favor verifica que tu correo sea el correcto para poder enviarte la información que necesitas",
  },
};

export const formStrings = {
  progressBar: {
    complete: "% completado",
    keepItUp: ", ¡sigue así!",
    completed: "!",
  },
  footer: {
    termsText:
      "Al registrarme, acepto recibir mensajes de texto al número de teléfono y correo electrónico proporcionados y acepto que puedo darme de baja de la lista de SMS y correo electrónico en cualquier momento. Pueden aplicarse cargos por mensajes SMS. También confirmo que tengo más de 18 años y acepto los términos establecidos en los",
    termsLink: "Términos de uso",
    and: "y",
    privacyLink: "Política de privacidad",
    disclaimer:
      ". Importante: por favor verifica que tu correo sea el correcto para poder enviarte la información que necesitas",
  },
  submission: {
    success: "¡Formulario enviado con éxito!",
  },
};

export const step3Strings = {
  title: "¡Excelente!",
  fields: {
    email: "Email",
    name: "Nombre",
    lastName: "Apellido",
    phone: "Número de teléfono",
  },
  checkbox: "Acepto políticas de datos y términos y condiciones acá",
  button: "VER OPCIONES DE TARJETA",
  placeholders: {
    email: "Email",
    name: "Nombre",
    lastName: "Apellido",
    phone: "Número de teléfono",
  },
};

// DEPRECATED: This URL was used for the external recommender flow.
// Kept for backup purposes during the migration to the internal Next.js recommender.
export const DEPRECATED_LINKLY_REDIRECT = "https://linkly.link/2ERav";
