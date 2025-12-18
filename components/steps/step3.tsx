"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { step3Strings } from "@/lib/constants";
import { step3Texts } from "@/lib/strings";
import VisitorCounter from "../VisitorCounter";
import ProgressIndicator from "../ProgressIndicator";

interface Step3Props {
  formData: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    receiveMessages: boolean;
  };
  updateFormData: (
    data: Partial<{
      email: string;
      firstName: string;
      lastName: string;
      phone: string;
      receiveMessages: boolean;
    }>,
  ) => void;
  onSubmit: (e?: React.FormEvent) => void;
  isSubmitting?: boolean;
  submissionStatus?: "idle" | "success" | "duplicate" | "error";
  submissionMessage?: string | null;
}

export default function Step3({
  formData,
  updateFormData,
  onSubmit,
  isSubmitting = false,
  submissionStatus = "idle",
  submissionMessage,
}: Step3Props) {
  const [email, setEmail] = useState(formData.email);
  const [firstName, setFirstName] = useState(formData.firstName);
  const [lastName, setLastName] = useState(formData.lastName || "");
  const [phone, setPhone] = useState(formData.phone || "");
  const [receiveMessages, setReceiveMessages] = useState(
    formData.receiveMessages,
  );
  const [errors, setErrors] = useState<{
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    general: string | null;
  }>({
    email: null,
    firstName: null,
    lastName: null,
    phone: null,
    general: null,
  });

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: step3Texts.validationErrors.emailRequired,
      }));
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: step3Texts.validationErrors.emailInvalid,
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, email: null }));
    return true;
  };

  const validateFirstName = (name: string): boolean => {
    if (!name.trim()) {
      setErrors((prev) => ({
        ...prev,
        firstName: step3Texts.validationErrors.nameRequired,
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, firstName: null }));
    return true;
  };

  const validateLastName = (name: string): boolean => {
    if (!name.trim()) {
      setErrors((prev) => ({
        ...prev,
        lastName: step3Texts.validationErrors.lastNameRequired,
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, lastName: null }));
    return true;
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone.trim()) {
      setErrors((prev) => ({
        ...prev,
        phone: step3Texts.validationErrors.phoneRequired,
      }));
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ""))) {
      setErrors((prev) => ({
        ...prev,
        phone: step3Texts.validationErrors.phoneFormat,
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, phone: null }));
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    updateFormData({ email: value });
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
    updateFormData({ firstName: value });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
    updateFormData({ lastName: value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    updateFormData({ phone: value });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setReceiveMessages(checked);
    updateFormData({ receiveMessages: checked });
  };

  const validateForm = (): boolean => {
    const isEmailValid = validateEmail(email);
    const isFirstNameValid = validateFirstName(firstName);
    const isLastNameValid = validateLastName(lastName);
    const isPhoneValid = validatePhone(phone);

    if (!receiveMessages) {
      setErrors((prev) => ({
        ...prev,
        general: step3Texts.validationErrors.acceptTerms,
      }));
      return false;
    }

    return (
      isEmailValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isPhoneValid &&
      receiveMessages
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <div className="space-y-3 sm:space-y-6">
      <ProgressIndicator step={2} />

      <div className="text-center space-y-1 sm:space-y-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#2E74B5] leading-tight">
          {step3Strings.title}
        </h1>
        <p className="text-gray-800 font-bold text-sm sm:text-xl leading-tight px-4">
          {step3Texts.subtitle.firstPart}{" "}
          <span className="text-[#2E74B5]">
            {step3Texts.subtitle.highlight}
          </span>
        </p>
      </div>

      <motion.div
        className="space-y-2 sm:space-y-4 max-w-sm mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="space-y-0.5">
          <Label
            htmlFor="firstName"
            className="text-xs font-bold text-gray-700 ml-1"
          >
            {step3Strings.fields.name}
          </Label>
          <Input
            id="firstName"
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            onBlur={() => validateFirstName(firstName)}
            required
            className={`h-11 sm:h-12 text-base sm:text-lg border-2 ${
              errors.firstName
                ? "border-red-500"
                : "border-gray-300 focus:border-[#2E74B5]"
            }`}
            placeholder={step3Strings.placeholders.name}
            aria-label={step3Strings.fields.name}
          />
        </div>

        <div className="space-y-0.5">
          <Label
            htmlFor="lastName"
            className="text-xs font-bold text-gray-700 ml-1"
          >
            {step3Strings.fields.lastName}
          </Label>
          <Input
            id="lastName"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            onBlur={() => validateLastName(lastName)}
            required
            className={`h-11 sm:h-12 text-base sm:text-lg border-2 ${
              errors.lastName
                ? "border-red-500"
                : "border-gray-300 focus:border-[#2E74B5]"
            }`}
            placeholder={step3Strings.placeholders.lastName}
            aria-label={step3Strings.fields.lastName}
          />
        </div>

        <div className="space-y-0.5">
          <Label
            htmlFor="email"
            className="text-xs font-bold text-gray-700 ml-1"
          >
            {step3Strings.fields.email}
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
            placeholder={step3Strings.placeholders.email}
            aria-label={step3Strings.fields.email}
          />
        </div>

        <div className="space-y-0.5">
          <Label
            htmlFor="phone"
            className="text-xs font-bold text-gray-700 ml-1"
          >
            {step3Strings.fields.phone}
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={() => validatePhone(phone)}
            required
            className={`h-11 sm:h-12 text-base sm:text-lg border-2 ${
              errors.phone
                ? "border-red-500"
                : "border-gray-300 focus:border-[#2E74B5]"
            }`}
            placeholder={step3Strings.placeholders.phone}
            aria-label={step3Strings.fields.phone}
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
            {step3Strings.checkbox.split(" acá")[0]}{" "}
            <a href="/politica-de-privacidad" className="font-bold">
              acá
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
                : "bg-[#457cb3] hover:bg-[#2E74B5] text-white active:scale-95"
            }`}
          >
            {isSubmitting ? "ENVIANDO..." : step3Strings.button}
          </button>
        </div>

        {submissionMessage && (
          <p
            className={`text-center text-xs sm:text-sm font-bold ${
              submissionStatus === "error" ? "text-red-500" : "text-[#2E74B5]"
            }`}
          >
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
