"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { formLogger } from "@/lib/logger";
import Cookies from "js-cookie";
import Step1 from "@/components/steps/step1";
import Step2 from "@/components/steps/step2";
import Step3Short from "@/components/steps/step3-short";
import Logo from "@/components/ui/logo";
import { BRAND_STATIC_FIELDS, UTM_PARAM_KEYS } from "@/lib/constants";
import { step1Strings, step2Strings } from "@/lib/strings";
import { pushGTMConversion } from "@/components/analytics/gtm";
import { trackGoogleAdsConversion } from "@/components/analytics/google-ads";
import { redirectWithUtmParams } from "@/lib/utils/url-builder";
import { formatTimestampForSheets } from "@/lib/utils";

type SubmissionStatus = "idle" | "success" | "duplicate" | "error";

const GOOGLE_ADS_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "";
const GTM_CONVERSION_EVENT_NAME = "quiz_lead_submitted";

// Cookie names for user tracking
const COOKIE_NAMES = {
  QUIZ_COMPLETED: "quizCompleted",
  USER_REGISTERED: "userRegistered",
  USER_DATA: "userData",
};

interface FormData {
  preference: string;
  preferenceText: string;
  income: string;
  incomeText: string;
  email: string;
  name: string;
  receiveMessages: boolean;
}

export default function CampaignQuizShortPage() {
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null,
  );

  const [formData, setFormData] = useState<FormData>({
    preference: "",
    preferenceText: "",
    income: "",
    incomeText: "",
    email: "",
    name: "",
    receiveMessages: true,
  });

  const updateFormData = useCallback((data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const getPreferenceText = useCallback((id: string): string => {
    const option = step1Strings.options.find((opt) => opt.id === id);
    return option ? option.label : "";
  }, []);

  const getIncomeText = useCallback((id: string): string => {
    const option = step2Strings.options.find((opt) => opt.id === id);
    return option ? option.label : "";
  }, []);

  const triggerConversionEvents = useCallback(() => {
    if (!GOOGLE_ADS_CONVERSION_LABEL) {
      formLogger.warn(
        "[QUIZ-SHORT] Google Ads conversion label not configured; skipping Ad conversion event.",
      );
    } else {
      trackGoogleAdsConversion(GOOGLE_ADS_CONVERSION_LABEL);
    }

    pushGTMConversion(GTM_CONVERSION_EVENT_NAME);
  }, []);

  const persistRegistrationCookies = useCallback(() => {
    const cookieExpiration = 30; // 30 days

    Cookies.set(COOKIE_NAMES.QUIZ_COMPLETED, "true", {
      expires: cookieExpiration,
    });

    if (formData.email) {
      const registrationData = {
        email: formData.email,
        name: formData.name,
      };

      Cookies.set(COOKIE_NAMES.USER_REGISTERED, "true", {
        expires: cookieExpiration,
      });
      Cookies.set(COOKIE_NAMES.USER_DATA, JSON.stringify(registrationData), {
        expires: cookieExpiration,
      });

      formLogger.info(
        `[QUIZ-SHORT] Cookie validation: enabled, expiration: ${cookieExpiration} days`,
      );
    }
  }, [formData.email, formData.name]);

  // Set mounted state
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if user is registered based on cookies on component mount
  useEffect(() => {
    if (!mounted) return;

    const userRegistered = Cookies.get(COOKIE_NAMES.USER_REGISTERED);
    const userData = Cookies.get(COOKIE_NAMES.USER_DATA);

    if (userRegistered === "true" && userData) {
      // Pre-fill data from cookies for registered users
      try {
        const savedData = JSON.parse(userData);
        if (savedData.email) {
          updateFormData({
            email: savedData.email,
            name: savedData.name || "",
            receiveMessages: true,
          });
        }
      } catch (error) {
        formLogger.error("Error parsing saved user data:", error);
      }
    }
  }, [mounted, updateFormData]);

  useEffect(() => {
    if (formData.preference) {
      updateFormData({
        preferenceText: getPreferenceText(formData.preference),
      });
    }
    if (formData.income) {
      updateFormData({ incomeText: getIncomeText(formData.income) });
    }
  }, [
    formData.preference,
    formData.income,
    getPreferenceText,
    getIncomeText,
    updateFormData,
  ]);

  const handleStepComplete = useCallback(() => {
    window.scrollTo(0, 0);

    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep]);

  const getUTMParams = (): Record<string, string> => {
    if (typeof window === "undefined") return {};

    const params: Record<string, string> = {};
    const searchParams = new URLSearchParams(window.location.search);

    UTM_PARAM_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        params[key] = value;
      }
    });

    return params;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setSubmissionMessage(null);

    try {
      formLogger.info("[QUIZ-SHORT] Starting form submission", {
        email: formData.email,
        hasName: !!formData.name,
      });

      const utmParams = getUTMParams();
      const timestamp = formatTimestampForSheets();

      // Split name into first and last name for ActiveCampaign
      const nameParts = formData.name.trim().split(/\s+/);
      const firstName = nameParts[0] || formData.name;
      const lastName = nameParts.slice(1).join(" ") || "";

      // Prepare data for both APIs
      const submissionData = {
        // User info
        email: formData.email,
        name: formData.name,
        firstName,
        lastName,

        // Quiz data
        preference: formData.preference,
        preferenceText: formData.preferenceText,
        income: formData.income,
        incomeText: formData.incomeText,

        // Metadata
        timestamp,
        country: BRAND_STATIC_FIELDS.Pais,
        brand: BRAND_STATIC_FIELDS.Marca,
        source: "quiz_campaign_short",

        // UTM parameters
        ...utmParams,
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_term: utmParams.utm_term,
        utm_content: utmParams.utm_content,
      };

      formLogger.debug("[QUIZ-SHORT] Submission data prepared", {
        hasUTMParams: Object.keys(utmParams).length > 0,
        utmParamKeys: Object.keys(utmParams),
      });

      // Call both APIs in parallel
      const [sheetsResponse, activeCampaignResponse] = await Promise.allSettled(
        [
          fetch("/api/sheets/short-version", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submissionData),
          }),
          fetch("/api/activecampaign", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submissionData),
          }),
        ],
      );

      // Log results
      if (sheetsResponse.status === "fulfilled") {
        const sheetsData = await sheetsResponse.value.json();
        formLogger.info("[QUIZ-SHORT] Google Sheets response", { sheetsData });
      } else {
        formLogger.error("[QUIZ-SHORT] Google Sheets error", {
          error: sheetsResponse.reason,
        });
      }

      if (activeCampaignResponse.status === "fulfilled") {
        const acData = await activeCampaignResponse.value.json();
        formLogger.info("[QUIZ-SHORT] ActiveCampaign response", { acData });
      } else {
        formLogger.error("[QUIZ-SHORT] ActiveCampaign error", {
          error: activeCampaignResponse.reason,
        });
      }

      // Consider success if at least one API succeeded
      const hasSuccess =
        sheetsResponse.status === "fulfilled" ||
        activeCampaignResponse.status === "fulfilled";

      if (hasSuccess) {
        setSubmissionStatus("success");
        setSubmissionMessage("Thank you for your message. It has been sent.");

        // Trigger conversion events
        triggerConversionEvents();

        // Persist cookies
        persistRegistrationCookies();

        formLogger.info("[QUIZ-SHORT] Form submitted successfully");

        // Redirect after showing success message
        setTimeout(() => {
          const redirectPath = "/weve-discovered-a-few-cards-for-you";
          redirectWithUtmParams(redirectPath);
        }, 2000);
      } else {
        throw new Error("Both API calls failed");
      }
    } catch (error) {
      formLogger.error("[QUIZ-SHORT] Submission error", {
        error: error instanceof Error ? error.message : String(error),
      });

      setSubmissionStatus("error");
      setSubmissionMessage(
        "There was an error submitting your information. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4A3AFF] to-[#6B5AFF] w-full py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Logo />
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="flex-1 w-full">
        <div className="container mx-auto px-4 py-6 sm:py-8 max-w-3xl">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Step1
                  formData={formData}
                  updateFormData={(data) => {
                    updateFormData(data);
                    setTimeout(handleStepComplete, 300);
                  }}
                />
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Step2
                  formData={formData}
                  updateFormData={(data) => {
                    updateFormData(data);
                    setTimeout(handleStepComplete, 300);
                  }}
                />
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Step3Short
                  formData={formData}
                  updateFormData={updateFormData}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  submissionStatus={submissionStatus}
                  submissionMessage={submissionMessage}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gradient-to-r from-[#4A3AFF] to-[#6B5AFF] py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs sm:text-sm text-white">
            © Top Networks Inc. 2024
          </p>
        </div>
      </div>
    </div>
  );
}
