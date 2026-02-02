// Constant strings used throughout the application

export const metadata = {
  title: "Find Your Perfect Credit Card - TopFinanzas US",
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
  Pais: "United States",
  Marca: "TopFinanzas",
} as const;

export const BRAND_STATIC_FIELDS_LOWER = {
  pais: BRAND_STATIC_FIELDS.Pais,
  marca: BRAND_STATIC_FIELDS.Marca,
} as const;

export const commonStrings = {
  copyright: "© Top Networks Inc. 2024",
  important: {
    prefix: "Important:",
    emailVerification:
      "please verify your email is correct to receive the information you need",
  },
};

export const formStrings = {
  progressBar: {
    complete: "% completed",
    keepItUp: ", keep it up!",
    completed: "!",
  },
  footer: {
    termsText:
      "By signing up, I agree to receive text messages to the provided phone number and email and agree that I can unsubscribe from the SMS and email list at any time. SMS charges may apply. I also confirm that I am over 18 years old and accept the terms set forth in the",
    termsLink: "Terms of Use",
    and: "and",
    privacyLink: "Privacy Policy",
    disclaimer:
      ". Important: please verify your email is correct to receive the information you need",
  },
  submission: {
    success: "Form submitted successfully!",
  },
};

export const step3Strings = {
  title: "You're almost there!",
  fields: {
    email: "Email",
    name: "First Name",
    lastName: "Last Name",
    phone: "Phone Number",
  },
  checkbox: "I accept data policies and terms and conditions here",
  button: "FIND RESULTS",
  placeholders: {
    email: "Enter your email",
    name: "Enter your name",
    lastName: "Last Name",
    phone: "Phone Number",
  },
};

// DEPRECATED: This URL was used for the external recommender flow.
// Kept for backup purposes during the migration to the internal Next.js recommender.
export const DEPRECATED_LINKLY_REDIRECT = "https://linkly.link/2ERav";
