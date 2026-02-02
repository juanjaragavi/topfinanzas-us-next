"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import VisitorCounter from "../VisitorCounter";
import ProgressIndicator from "../ProgressIndicator";

const step3StringsShort = {
  title: "You're almost there!",
  fields: {
    email: "Email",
    name: "Name",
  },
  checkbox: "I accept data policies and terms and conditions here",
  button: "FIND RESULTS",
  placeholders: {
    email: "Enter your email",
    name: "Enter your full name",
  },
};

const step3TextsShort = {
  subtitle: {
    firstPart: "Enter your details to find your",
    highlight: "results",
  },
  validationErrors: {
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email address",
    nameRequired: "Name is required",
    nameLength: "Name must be at least 2 characters",
    acceptTerms:
      "You must accept data policies and terms and conditions to continue",
  },
};

interface Step3ShortProps {
  formData: {
    email: string;
    name: string;
    receiveMessages: boolean;
  };
  updateFormData: (
    data: Partial<{
      email: string;
      name: string;
      receiveMessages: boolean;
    }>,
  ) => void;
  onSubmit: (e?: React.FormEvent) => void;
  isSubmitting?: boolean;
  submissionStatus?: "idle" | "success" | "duplicate" | "error";
  submissionMessage?: string | null;
}

export default function Step3Short({
  formData,
  updateFormData,
  onSubmit,
  isSubmitting = false,
  submissionStatus = "idle",
  submissionMessage,
}: Step3ShortProps) {
  const [email, setEmail] = useState(formData.email);
  const [name, setName] = useState(formData.name);
  const [receiveMessages, setReceiveMessages] = useState(
    formData.receiveMessages,
  );
  const [errors, setErrors] = useState<{
    email: string | null;
    name: string | null;
    general: string | null;
  }>({
    email: null,
    name: null,
    general: null,
  });

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: step3TextsShort.validationErrors.emailRequired,
      }));
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: step3TextsShort.validationErrors.emailInvalid,
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: null }));
    return true;
  };

  const validateName = (name: string): boolean => {
    if (!name.trim()) {
      setErrors((prev) => ({
        ...prev,
        name: step3TextsShort.validationErrors.nameRequired,
      }));
      return false;
    }
    if (name.trim().length < 2) {
      setErrors((prev) => ({
        ...prev,
        name: step3TextsShort.validationErrors.nameLength,
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, name: null }));
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    updateFormData({ email: value });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    updateFormData({ name: value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setReceiveMessages(checked);
    updateFormData({ receiveMessages: checked });
  };

  const validateForm = (): boolean => {
    const isEmailValid = validateEmail(email);
    const isNameValid = validateName(name);

    if (!receiveMessages) {
      setErrors((prev) => ({
        ...prev,
        general: step3TextsShort.validationErrors.acceptTerms,
      }));
      return false;
    }

    return isEmailValid && isNameValid && receiveMessages;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-3 sm:space-y-6">
      <ProgressIndicator step={3} />

      <div className="text-center space-y-1 sm:space-y-4">
        <div className="inline-block bg-pink-100 text-pink-600 px-6 py-2 rounded-full text-sm font-bold mb-2">
          {step3StringsShort.title}
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 leading-tight">
          {step3TextsShort.subtitle.firstPart}{" "}
          <span className="text-gray-800">
            {step3TextsShort.subtitle.highlight}
          </span>
        </h1>
      </div>

      <motion.div
        className="space-y-2 sm:space-y-4 max-w-sm mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="space-y-0.5">
          <Label
            htmlFor="name"
            className="text-xs font-bold text-gray-700 ml-1"
          >
            {step3StringsShort.fields.name}
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            onBlur={() => validateName(name)}
            required
            className={`h-11 sm:h-12 text-base sm:text-lg border-2 ${
              errors.name
                ? "border-red-500"
                : "border-gray-300 focus:border-[#2E74B5]"
            }`}
            placeholder={step3StringsShort.placeholders.name}
            aria-label={step3StringsShort.fields.name}
          />
        </div>

        <div className="space-y-0.5">
          <Label
            htmlFor="email"
            className="text-xs font-bold text-gray-700 ml-1"
          >
            {step3StringsShort.fields.email}
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => validateEmail(email)}
            required
            className={`h-11 sm:h-12 text-base sm:text-lg border-2 ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 focus:border-[#2E74B5]"
            }`}
            placeholder={step3StringsShort.placeholders.email}
            aria-label={step3StringsShort.fields.email}
          />
        </div>

        <div className="flex items-start space-x-2 py-1">
          <Checkbox
            id="receiveMessages"
            checked={receiveMessages}
            onCheckedChange={handleCheckboxChange}
            className="mt-0.5 border-[#2E74B5] data-[state=checked]:bg-[#2E74B5]"
          />
          <Label
            htmlFor="receiveMessages"
            className="text-[10px] sm:text-sm text-gray-700 leading-tight"
          >
            {step3StringsShort.checkbox.split(" here")[0]}{" "}
            <a
              href="/privacy-policy"
              className="text-[#2E74B5] font-bold underline"
            >
              here
            </a>
          </Label>
        </div>

        <div className="pt-2 sm:pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleFormSubmit}
            className={`w-full py-3 sm:py-4 text-lg sm:text-xl font-black rounded-full transition-all shadow-lg ${
              isSubmitting
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#1E3A8A] hover:bg-[#1E40AF] text-white active:scale-95"
            }`}
          >
            {isSubmitting ? "SENDING..." : step3StringsShort.button}
          </button>
        </div>

        <div className="text-center text-xs sm:text-sm px-4">
          <p className="text-gray-700">
            <span className="font-bold text-orange-500">Important:</span>{" "}
            <span className="font-normal">
              check that your email is written correctly so we can send you the
              information you want
            </span>
          </p>
        </div>

        {submissionStatus === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center text-sm">
            {submissionMessage}
          </div>
        )}

        {submissionStatus === "error" && submissionMessage && (
          <p className="text-center text-xs sm:text-sm font-bold text-red-500">
            {submissionMessage}
          </p>
        )}
      </motion.div>

      <div className="mt-2 sm:mt-8 flex justify-center opacity-0 pointer-events-none h-0">
        <VisitorCounter />
      </div>
    </div>
  );
}
