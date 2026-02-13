"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    acceptPolicy: false,
  });

  const [errors, setErrors] = useState<{
    name: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    message: string | null;
    general: string | null;
  }>({
    name: null,
    lastName: null,
    email: null,
    phone: null,
    message: null,
    general: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: "Email address is required",
      }));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
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
        name: "First name is required",
      }));
      return false;
    }

    if (name.trim().length < 2) {
      setErrors((prev) => ({
        ...prev,
        name: "First name must be at least 2 characters",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, name: null }));
    return true;
  };

  const validateLastName = (lastName: string): boolean => {
    if (!lastName.trim()) {
      setErrors((prev) => ({
        ...prev,
        lastName: "Last name is required",
      }));
      return false;
    }

    if (lastName.trim().length < 2) {
      setErrors((prev) => ({
        ...prev,
        lastName: "Last name must be at least 2 characters",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, lastName: null }));
    return true;
  };

  const validatePhone = (phoneNumber: string): boolean => {
    if (!phoneNumber) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number is required",
      }));
      return false;
    }

    // US phone numbers validation (10 digits)
    const usPhoneRegex = /^(\+1)?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const cleanPhone = phoneNumber.replace(/[\s.-]/g, "");

    if (!usPhoneRegex.test(phoneNumber) && cleanPhone.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid US phone number (10 digits)",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, phone: null }));
    return true;
  };

  const validateMessage = (message: string): boolean => {
    if (!message.trim()) {
      setErrors((prev) => ({
        ...prev,
        message: "Message is required",
      }));
      return false;
    }

    if (message.trim().length < 10) {
      setErrors((prev) => ({
        ...prev,
        message: "Message must be at least 10 characters",
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, message: null }));
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = validateName(formData.name);
    const isLastNameValid = validateLastName(formData.lastName);
    const isEmailValid = validateEmail(formData.email);
    const isPhoneValid = validatePhone(formData.phone);
    const isMessageValid = validateMessage(formData.message);

    if (
      !isNameValid ||
      !isLastNameValid ||
      !isEmailValid ||
      !isPhoneValid ||
      !isMessageValid
    ) {
      return;
    }

    if (!formData.acceptPolicy) {
      setErrors((prev) => ({
        ...prev,
        general: "Please accept the data processing policies",
      }));
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Submit to the API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitSuccess(true);
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        acceptPolicy: false,
      });
    } catch {
      setSubmitError(
        "There was an error submitting your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-[#2E74B5] mb-8 text-center">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side - Text and Image */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            Are you wondering how you can make a significant change in your
            personal finances?
          </p>
          <p className="text-gray-600">
            If you&apos;re ready to embark on a transformative journey toward
            financial stability and prosperity, we&apos;re here to support you.
            Contact us at{" "}
            <a
              href="mailto:info@topfinanzas.com"
              className="text-blue-600 hover:underline"
            >
              info@topfinanzas.com
            </a>{" "}
            or fill out the form below to share your concerns, ideas, or plans.
            We are committed to responding promptly and being your allies at
            every stage of this exciting journey that will transform your life.
          </p>
          <p className="text-gray-700 font-medium">
            We look forward to hearing from you soon!
          </p>

          {/* Contact Image */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://media.topfinanzas.com/images/contacto360x738.png"
              alt="Contact Top Finanzas"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Social Media Links */}
          <div className="pt-6">
            <p className="text-gray-700 font-medium mb-4">
              Follow us on our social media and take control of your finances
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/TopFinanzasParaTi"
                className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://youtube.com/@top_finanzas_latam"
                className="w-10 h-10 bg-[#FF0000] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@topfinanzas1"
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://www.instagram.com/top_finanzas23/"
                className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border">
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for contacting us. We&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  onBlur={() => validateName(formData.name)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2E74B5] focus:border-transparent ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  onBlur={() => validateLastName(formData.lastName)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2E74B5] focus:border-transparent ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  onBlur={() => validateEmail(formData.email)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2E74B5] focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  onBlur={() => validatePhone(formData.phone)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2E74B5] focus:border-transparent ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="(555) 555-5555"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  onBlur={() => validateMessage(formData.message)}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2E74B5] focus:border-transparent ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptPolicy"
                  checked={formData.acceptPolicy}
                  onChange={(e) =>
                    setFormData({ ...formData, acceptPolicy: e.target.checked })
                  }
                  className="mt-1 mr-2"
                />
                <label htmlFor="acceptPolicy" className="text-sm text-gray-600">
                  I accept{" "}
                  <Link
                    href="/privacy-policy/"
                    className="text-blue-600 hover:underline"
                  >
                    the data processing policies
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-conditions/"
                    className="text-blue-600 hover:underline"
                  >
                    terms and conditions
                  </Link>
                </label>
              </div>

              {errors.general && (
                <p className="text-red-500 text-sm">{errors.general}</p>
              )}

              {submitError && (
                <p className="text-red-500 text-sm">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2E74B5] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1e5a8a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
