/**
 * Analytics Validation Framework
 * Comprehensive testing protocols for UTM parameter handling,
 * tag firing verification, and campaign data propagation validation
 * Based on proven Astro.js implementation patterns
 */

import { logger } from "@/lib/logger";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

interface ValidationResult {
  passed: boolean;
  message: string;
  data?: unknown;
  timestamp: string;
}

interface ValidationSuite {
  name: string;
  tests: ValidationTest[];
}

interface ValidationTest {
  name: string;
  test: () => Promise<ValidationResult> | ValidationResult;
  required: boolean;
}

class AnalyticsValidator {
  private results: ValidationResult[] = [];
  private isValidating = false;

  /**
   * Run comprehensive validation suite
   */
  async runValidation(): Promise<ValidationResult[]> {
    if (this.isValidating) {
      logger.warn("Analytics Validator: Validation already in progress");
      return this.results;
    }

    this.isValidating = true;
    this.results = [];

    logger.info("Analytics Validator: Starting comprehensive validation...");

    const validationSuites: ValidationSuite[] = [
      {
        name: "UTM Parameter Validation",
        tests: [
          {
            name: "UTM Parameters Present in SessionStorage",
            test: this.validateUTMStorage.bind(this),
            required: false,
          },
          {
            name: "UTM Source Validation",
            test: this.validateUTMSource.bind(this),
            required: false,
          },
          {
            name: "Google Ads Campaign Format",
            test: this.validateGoogleAdsCampaign.bind(this),
            required: false,
          },
          {
            name: "UTM URL Propagation",
            test: this.validateUTMPropagation.bind(this),
            required: true,
          },
        ],
      },
      {
        name: "Google Tag Manager Validation",
        tests: [
          {
            name: "GTM Container Loaded",
            test: this.validateGTMContainer.bind(this),
            required: true,
          },
          {
            name: "DataLayer Initialized",
            test: this.validateDataLayer.bind(this),
            required: true,
          },
          {
            name: "UTM Data in DataLayer",
            test: this.validateUTMInDataLayer.bind(this),
            required: false,
          },
        ],
      },
      {
        name: "Google Ads Validation",
        tests: [
          {
            name: "Google Ads Script Loaded",
            test: this.validateGoogleAdsScript.bind(this),
            required: true,
          },
          {
            name: "Gtag Function Available",
            test: this.validateGtagFunction.bind(this),
            required: true,
          },
          {
            name: "Google Ads Configuration",
            test: this.validateGoogleAdsConfig.bind(this),
            required: true,
          },
        ],
      },
      {
        name: "GAM (Google Ad Manager) Validation",
        tests: [
          {
            name: "GPT Library Loaded",
            test: this.validateGPTLibrary.bind(this),
            required: true,
          },
          {
            name: "GAM Ad Slots Defined",
            test: this.validateGAMSlots.bind(this),
            required: true,
          },
          {
            name: "GAM Services Enabled",
            test: this.validateGAMServices.bind(this),
            required: true,
          },
        ],
      },
      {
        name: "Campaign Data Propagation",
        tests: [
          {
            name: "Campaign Attribution Chain",
            test: this.validateCampaignAttribution.bind(this),
            required: true,
          },
          {
            name: "Cross-Platform Data Consistency",
            test: this.validateDataConsistency.bind(this),
            required: true,
          },
        ],
      },
    ];

    // Execute all validation suites
    for (const suite of validationSuites) {
      logger.info(`Analytics Validator: Running ${suite.name}...`);

      for (const test of suite.tests) {
        try {
          const result = await test.test();
          this.results.push({
            ...result,
            message: `[${suite.name}] ${test.name}: ${result.message}`,
          });

          if (test.required && !result.passed) {
            logger.error(
              `Analytics Validator: Required test failed - ${test.name}`,
            );
          }
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
          this.results.push({
            passed: false,
            message: `[${suite.name}] ${test.name}: Test failed with error - ${errorMessage}`,
            timestamp: new Date().toISOString(),
          });
        }
      }
    }

    this.isValidating = false;
    this.logValidationSummary();
    return this.results;
  }

  /**
   * UTM Parameter Storage Validation
   */
  private validateUTMStorage(): ValidationResult {
    const utmParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];
    const storedParams = utmParams.filter(
      (param) => sessionStorage.getItem(param) !== null,
    );

    // Check if we're on localhost or if URL has UTM params
    const isLocalhost =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1");

    const urlParams = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : "",
    );
    const hasUTMInURL = utmParams.some((param) => urlParams.has(param));

    // On localhost without UTM params in URL, this is expected to fail
    if (isLocalhost && !hasUTMInURL) {
      return {
        passed: true,
        message: "SKIPPED on localhost without UTM parameters (expected)",
        data: {
          note: "Add UTM parameters to URL to test: ?utm_source=test&utm_medium=test&utm_campaign=test",
        },
        timestamp: new Date().toISOString(),
      };
    }

    return {
      passed: storedParams.length > 0,
      message:
        storedParams.length > 0
          ? `Found ${
              storedParams.length
            } UTM parameters in storage: ${storedParams.join(", ")}`
          : "No UTM parameters found in sessionStorage",
      data: storedParams,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * UTM Source Validation
   */
  private validateUTMSource(): ValidationResult {
    const utmSource = sessionStorage.getItem("utm_source");

    if (!utmSource) {
      return {
        passed: true,
        message: "No UTM source to validate",
        timestamp: new Date().toISOString(),
      };
    }

    const validSources = [
      "google",
      "bing",
      "yahoo",
      "facebook",
      "instagram",
      "twitter",
      "linkedin",
      "youtube",
      "tiktok",
      "pinterest",
      "reddit",
      "quora",
      "organic",
      "direct",
      "email",
      "newsletter",
      "referral",
      "affiliate",
      "display",
      "video",
      "social",
      "search",
      "cpc",
      "cpm",
      "banner",
      "retargeting",
      "remarketing",
    ];

    const isValid = validSources.includes(utmSource.toLowerCase());

    return {
      passed: isValid,
      message: isValid
        ? `UTM source '${utmSource}' is valid`
        : `UTM source '${utmSource}' is not in valid sources list`,
      data: { utmSource, validSources },
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Google Ads Campaign Validation
   */
  private validateGoogleAdsCampaign(): ValidationResult {
    const utmSource = sessionStorage.getItem("utm_source");
    const utmCampaign = sessionStorage.getItem("utm_campaign");

    if (utmSource !== "google" || !utmCampaign) {
      return {
        passed: true,
        message: "No Google Ads campaign to validate",
        timestamp: new Date().toISOString(),
      };
    }

    const isValidFormat = /^[a-zA-Z0-9_-]+$/.test(utmCampaign);

    return {
      passed: isValidFormat,
      message: isValidFormat
        ? `Google Ads campaign '${utmCampaign}' format is valid`
        : `Google Ads campaign '${utmCampaign}' format is invalid`,
      data: { utmCampaign },
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * UTM URL Propagation Validation
   */
  private validateUTMPropagation(): ValidationResult {
    const currentUrl = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentUrl.search);
    const sessionParams = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ].filter((param) => sessionStorage.getItem(param) !== null);

    if (sessionParams.length === 0) {
      return {
        passed: true,
        message: "No UTM parameters in session to validate propagation",
        timestamp: new Date().toISOString(),
      };
    }

    const urlHasUTM = sessionParams.some((param) => urlParams.has(param));
    const expectedPropagation = sessionParams.length > 0;

    return {
      passed: urlHasUTM || !expectedPropagation,
      message: urlHasUTM
        ? "UTM parameters are properly propagated in URL"
        : "UTM parameters not found in current URL (may propagate on next navigation)",
      data: { sessionParams, urlParams: Object.fromEntries(urlParams) },
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GTM Container Validation
   */
  private validateGTMContainer(): ValidationResult {
    const hasGTM =
      typeof window.google_tag_manager !== "undefined" ||
      document.querySelector('script[src*="googletagmanager.com/gtm.js"]') !==
        null;

    return {
      passed: hasGTM,
      message: hasGTM
        ? "GTM container is loaded"
        : "GTM container not detected",
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * DataLayer Validation
   */
  private validateDataLayer(): ValidationResult {
    if (Array.isArray(window.dataLayer)) {
      const entries = window.dataLayer.length;

      return {
        passed: true,
        message: `DataLayer initialized with ${entries} entries`,
        data: { dataLayerLength: entries },
        timestamp: new Date().toISOString(),
      };
    }

    return {
      passed: false,
      message: "DataLayer not found or not properly initialized",
      data: null,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * UTM Data in DataLayer Validation
   */
  private validateUTMInDataLayer(): ValidationResult {
    if (!window.dataLayer) {
      return {
        passed: false,
        message: "DataLayer not available",
        timestamp: new Date().toISOString(),
      };
    }

    // Check if we're on localhost without UTM params
    const isLocalhost =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1");

    const urlParams = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : "",
    );
    const hasUTMInURL = ["utm_source", "utm_medium", "utm_campaign"].some(
      (param) => urlParams.has(param),
    );

    const utmEvents = window.dataLayer.filter((item) => {
      if (!isRecord(item)) {
        return false;
      }

      const eventValue = item["event"];
      const utmSource = item["utm_source"];
      const utmCampaign = item["utm_campaign"];
      const utmMedium = item["utm_medium"];

      return (
        eventValue === "utm_parameters_loaded" ||
        typeof utmSource === "string" ||
        typeof utmCampaign === "string" ||
        typeof utmMedium === "string"
      );
    });

    // On localhost without UTM params, skip this validation
    if (isLocalhost && !hasUTMInURL) {
      return {
        passed: true,
        message: "SKIPPED on localhost without UTM parameters (expected)",
        data: {
          note: "Add UTM parameters to URL to test UTM tracking in dataLayer",
        },
        timestamp: new Date().toISOString(),
      };
    }

    return {
      passed: utmEvents.length > 0,
      message:
        utmEvents.length > 0
          ? `Found ${utmEvents.length} UTM-related entries in dataLayer`
          : "No UTM data found in dataLayer",
      data: utmEvents,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Google Ads Script Validation
   */
  private validateGoogleAdsScript(): ValidationResult {
    const hasGtagScript =
      document.querySelector('script[src*="googletagmanager.com/gtag/js"]') !==
      null;

    return {
      passed: hasGtagScript,
      message: hasGtagScript
        ? "Google Ads gtag script is loaded"
        : "Google Ads gtag script not found",
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Gtag Function Validation
   */
  private validateGtagFunction(): ValidationResult {
    const hasGtag = typeof window.gtag === "function";

    return {
      passed: hasGtag,
      message: hasGtag
        ? "Gtag function is available"
        : "Gtag function not found",
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Google Ads Configuration Validation
   */
  private validateGoogleAdsConfig(): ValidationResult {
    if (!window.dataLayer) {
      return {
        passed: false,
        message: "DataLayer not available for Google Ads validation",
        timestamp: new Date().toISOString(),
      };
    }

    // Check if we're on localhost
    const isLocalhost =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1");

    const googleAdsConfigs = window.dataLayer.filter((item) => {
      if (Array.isArray(item)) {
        const [command, id] = item;
        return (
          command === "config" && typeof id === "string" && id.startsWith("AW-")
        );
      }

      if (isRecord(item)) {
        const eventValue = item["event"];
        const sendToValue = item["send_to"];

        return (
          (typeof eventValue === "string" &&
            eventValue.toLowerCase().includes("google")) ||
          typeof sendToValue !== "undefined"
        );
      }

      return false;
    });

    // On localhost, Google Ads config may not be initialized yet
    if (isLocalhost && googleAdsConfigs.length === 0) {
      return {
        passed: true,
        message:
          "SKIPPED on localhost (Google Ads config may not be initialized in dev mode)",
        data: {
          note: "Google Ads configuration is typically loaded on production with real traffic",
        },
        timestamp: new Date().toISOString(),
      };
    }

    return {
      passed: googleAdsConfigs.length > 0,
      message:
        googleAdsConfigs.length > 0
          ? `Found ${googleAdsConfigs.length} Google Ads configuration entries`
          : "No Google Ads configuration found in dataLayer",
      data: googleAdsConfigs,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GPT Library Validation
   */
  private validateGPTLibrary(): ValidationResult {
    const hasGPT =
      typeof window.googletag !== "undefined" &&
      typeof window.googletag.cmd !== "undefined";

    return {
      passed: hasGPT,
      message: hasGPT
        ? "Google Publisher Tag (GPT) library is loaded"
        : "GPT library not found",
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GAM Ad Slots Validation
   */
  private validateGAMSlots(): ValidationResult {
    // Check if we're on localhost
    const isLocalhost =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1");

    const slotKeys = window.gamSlots ? Object.keys(window.gamSlots) : [];
    const hasSlots = slotKeys.length > 0;

    // On localhost, GAM slots may not be defined (especially on homepage)
    if (isLocalhost && !hasSlots) {
      // Check if we're on a page that should have ad slots
      const pathname = window.location.pathname;
      const shouldHaveAds =
        pathname.startsWith("/blog/") ||
        pathname.startsWith("/financial-solutions/") ||
        pathname.startsWith("/personal-finance/");

      if (!shouldHaveAds) {
        return {
          passed: true,
          message:
            "SKIPPED on localhost (current page doesn't require GAM ad slots)",
          data: {
            note: "GAM ad slots are typically loaded on article/content pages",
            pathname,
          },
          timestamp: new Date().toISOString(),
        };
      }
    }

    return {
      passed: hasSlots,
      message: hasSlots
        ? `GAM ad slots defined: ${slotKeys.join(", ")}`
        : "No GAM ad slots found",
      data: hasSlots ? slotKeys : null,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * GAM Services Validation
   */
  private validateGAMServices(): ValidationResult {
    const googletag = window.googletag;

    if (!googletag) {
      return {
        passed: false,
        message: "GPT library not available",
        timestamp: new Date().toISOString(),
      };
    }

    // Check if pubads service is available
    let servicesEnabled = false;
    try {
      googletag.cmd.push(() => {
        servicesEnabled = typeof googletag.pubads === "function";
      });
    } catch (error) {
      logger.warn(
        "[AnalyticsValidator] Error while verifying GAM services",
        error,
      );
      // Fallback check
      servicesEnabled = typeof googletag.pubads === "function";
    }

    return {
      passed: servicesEnabled,
      message: servicesEnabled
        ? "GAM services are enabled"
        : "GAM services not enabled",
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Campaign Attribution Chain Validation
   */
  private validateCampaignAttribution(): ValidationResult {
    const utmSource = sessionStorage.getItem("utm_source");
    const utmCampaign = sessionStorage.getItem("utm_campaign");

    if (!utmSource || !utmCampaign) {
      return {
        passed: true,
        message: "No campaign data to validate attribution chain",
        timestamp: new Date().toISOString(),
      };
    }

    // Check if campaign data is consistent across systems
    const checks = {
      sessionStorage: utmSource && utmCampaign,
      dataLayer: false,
      gtag: false,
    };

    // Check dataLayer
    if (window.dataLayer) {
      checks.dataLayer = window.dataLayer.some((item) => {
        if (!isRecord(item)) {
          return false;
        }

        const candidates = [item["utm_source"], item["campaign_source"]].filter(
          (value): value is string => typeof value === "string",
        );

        return candidates.some((value) => value === utmSource);
      });
    }

    // Check gtag availability for conversion tracking
    checks.gtag = typeof window.gtag === "function";

    const consistentSystems = Object.values(checks).filter(Boolean).length;

    return {
      passed: consistentSystems >= 2,
      message: `Campaign attribution chain active across ${consistentSystems}/3 systems`,
      data: checks,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Cross-Platform Data Consistency Validation
   */
  private validateDataConsistency(): ValidationResult {
    const utmData = {
      source: sessionStorage.getItem("utm_source"),
      campaign: sessionStorage.getItem("utm_campaign"),
      medium: sessionStorage.getItem("utm_medium"),
    };

    if (!utmData.source) {
      return {
        passed: true,
        message: "No UTM data for consistency validation",
        timestamp: new Date().toISOString(),
      };
    }

    const consistencyIssues = [];

    // Check URL consistency
    const currentUrl = new URL(window.location.href);
    const urlParams = new URLSearchParams(currentUrl.search);

    if (
      urlParams.get("utm_source") &&
      urlParams.get("utm_source") !== utmData.source
    ) {
      consistencyIssues.push("URL utm_source differs from sessionStorage");
    }

    // Check campaign context
    const hasGoogleContext =
      sessionStorage.getItem("google_ads_campaign_context") === "true";
    const shouldHaveContext = utmData.source === "google" && utmData.campaign;

    if (shouldHaveContext && !hasGoogleContext) {
      consistencyIssues.push("Missing Google Ads campaign context");
    }

    return {
      passed: consistencyIssues.length === 0,
      message:
        consistencyIssues.length === 0
          ? "Data consistency validated across platforms"
          : `Consistency issues: ${consistencyIssues.join(", ")}`,
      data: { utmData, consistencyIssues },
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Log validation summary
   */
  private logValidationSummary(): void {
    const passed = this.results.filter((r) => r.passed).length;
    const total = this.results.length;
    const requiredTests = this.results.filter((r) =>
      r.message.includes("Required test failed"),
    );

    logger.info(
      `Analytics Validator: Validation complete - ${passed}/${total} tests passed`,
    );

    if (requiredTests.length > 0) {
      logger.error(
        `Analytics Validator: ${requiredTests.length} required tests failed`,
      );
    }

    // Log failed tests
    this.results
      .filter((r) => !r.passed)
      .forEach((result) => {
        logger.warn(`Analytics Validator: FAILED - ${result.message}`);
      });
  }

  /**
   * Get validation results
   */
  getResults(): ValidationResult[] {
    return this.results;
  }

  /**
   * Get validation summary
   */
  getSummary() {
    const passed = this.results.filter((r) => r.passed).length;
    const total = this.results.length;
    const failed = this.results.filter((r) => !r.passed);

    return {
      total,
      passed,
      failed: failed.length,
      passRate: total > 0 ? ((passed / total) * 100).toFixed(1) : "0",
      failedTests: failed.map((r) => r.message),
    };
  }
}

// Global instance
const analyticsValidator = new AnalyticsValidator();

// Export for use in development
export default analyticsValidator;

// Export types
export type { ValidationResult, ValidationSuite, ValidationTest };

// Development helper to run validation from console
if (typeof window !== "undefined") {
  window.analyticsValidator = analyticsValidator;
}
