"use client";

import { useEffect, useState } from "react";
import { analyticsLogger } from "@/lib/logger";
import analyticsValidator, {
  type ValidationResult,
} from "@/lib/analytics-validator";

interface ValidationSummary {
  total: number;
  passed: number;
  failed: number;
  passRate: string;
  failedTests: string[];
}

export default function AnalyticsValidationPanel() {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<ValidationResult[]>([]);
  const [summary, setSummary] = useState<ValidationSummary | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const runValidation = async () => {
    setIsRunning(true);
    try {
      const validationResults = await analyticsValidator.runValidation();
      setResults(validationResults);
      setSummary(analyticsValidator.getSummary());
    } catch (error) {
      analyticsLogger.error("Validation failed:", error);
    } finally {
      setIsRunning(false);
    }
  };

  useEffect(() => {
    // Auto-run validation after a delay to let all scripts load
    const timer = setTimeout(() => {
      runValidation();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border-2 border-gray-300 rounded-lg shadow-lg max-w-md">
      <div className="p-3 bg-blue-50 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-semibold text-sm text-blue-900">
          Analytics Validation
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 hover:text-blue-800"
        >
          {isExpanded ? "−" : "+"}
        </button>
      </div>

      {isExpanded && (
        <div className="p-3 max-h-96 overflow-y-auto">
          <div className="mb-3">
            <button
              onClick={runValidation}
              disabled={isRunning}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 disabled:opacity-50"
            >
              {isRunning ? "Running..." : "Run Validation"}
            </button>
          </div>

          {summary && (
            <div className="mb-3 p-2 bg-gray-50 rounded text-xs">
              <div className="font-semibold mb-1">
                Summary: {summary.passed}/{summary.total} tests passed (
                {summary.passRate}%)
              </div>
              {summary.failed > 0 && (
                <div className="text-red-600">
                  {summary.failed} tests failed
                </div>
              )}
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-1">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`p-2 rounded text-xs ${
                    result.passed
                      ? "bg-green-50 border-l-2 border-green-400"
                      : "bg-red-50 border-l-2 border-red-400"
                  }`}
                >
                  <div
                    className={`font-medium ${
                      result.passed ? "text-green-800" : "text-red-800"
                    }`}
                  >
                    {result.passed ? "✓" : "✗"}{" "}
                    {result.message.split(": ")[1] || result.message}
                  </div>
                  {!!result.data && (
                    <div className="mt-1 text-gray-600 font-mono">
                      {JSON.stringify(result.data, null, 2)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
