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
    acceptTerms: false,
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

  const departmentDirectory = [
    {
      title: "Editorial Team",
      description: "Feedback on our articles, corrections, or media pitches.",
    },
    {
      title: "Partnerships",
      description:
        "Requests from financial institutions interested in featuring products.",
    },
    {
      title: "Technical Support",
      description:
        "Report broken links, calculator issues, or other site problems.",
    },
  ];

  const faqs = [
    {
      question: "Can you give me personal financial advice?",
      answer:
        "Top Finanzas US provides educational resources and product comparisons to help you make informed decisions. We are not registered financial advisors and cannot provide personalized investment, tax, or legal advice.",
    },
    {
      question: "How long will it take to get a response?",
      answer:
        "Our support team reviews messages Monday through Friday during regular business hours (EST). We aim to respond to standard inquiries within 24 to 48 hours.",
    },
    {
      question: "How do I unsubscribe from your newsletter?",
      answer:
        'Every newsletter includes an "Unsubscribe" link at the bottom. You can also use the form above to request removal and include the email tied to your subscription.',
    },
    {
      question: "How do you choose which financial products to feature?",
      answer:
        "Our editorial team evaluates products based on fees, rewards, accessibility, and overall consumer value. Compensation from partners does not dictate our ratings or educational content.",
    },
  ];

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
    const cleanPhone = phoneNumber.replace(/\D/g, "");

    if (
      !usPhoneRegex.test(phoneNumber) ||
      ![10, 11].includes(cleanPhone.length)
    ) {
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

    if (!formData.acceptTerms) {
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
        acceptTerms: false,
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
    <main className="bg-white">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="space-y-12">
          <section className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-[21/9]">
            <Image
              src="https://media.topfinanzas.com/images/contacto360x738.png"
              alt="Contact Top Finanzas US"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/85">
                  TopFinanzas US
                </p>
                <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-6xl">
                  Contact our team with questions, feedback, or partnership
                  inquiries
                </h1>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="text-xl font-medium text-[#2E74B5]">
              We help readers compare credit cards, loans, and everyday money
              decisions. If you need to reach our team, this is the right place.
            </p>
            <p>
              Whether you want to report an issue, ask a question about our
              content, or discuss a potential collaboration, send us a message
              and we&apos;ll route it to the right team member.
            </p>
            <p>
              You can also write to{" "}
              <a
                href="mailto:info@topfinanzas.com"
                className="font-medium text-blue-600 hover:underline"
              >
                info@topfinanzas.com
              </a>{" "}
              if email is the best channel for your request.
            </p>
          </section>

          <section className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <div className="rounded-2xl bg-[#f0f7ff] p-8 shadow-sm">
                <h2 className="mb-4 text-3xl font-bold text-[#2E74B5]">
                  How we can help
                </h2>
                <p className="text-gray-700">
                  We review every inquiry carefully. Share enough context in
                  your message so we can point you to the right answer faster.
                </p>
                <p className="mt-4 font-medium text-gray-800">
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="py-2">
                <h2 className="mb-6 text-center text-3xl font-bold text-[#2E74B5] lg:text-left">
                  Department Directory
                </h2>
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
                  {departmentDirectory.map((department) => (
                    <div
                      key={department.title}
                      className="rounded-xl border-t-4 border-[#2E74B5] bg-gray-50 p-6 shadow-sm"
                    >
                      <h3 className="mb-3 text-xl font-bold text-[#2E74B5]">
                        {department.title}
                      </h3>
                      <p className="text-gray-600">{department.description}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm italic text-gray-500">
                  Please mention the department you intended to reach in the
                  message field so we can route your inquiry efficiently.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h2 className="mb-4 text-3xl font-bold text-[#2E74B5]">
                  Follow TopFinanzas
                </h2>
                <p className="mb-5 text-gray-600">
                  Stay connected for new financial guides, updates, and tips for
                  navigating the US market.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.facebook.com/TopFinanzasParaTi"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow TopFinanzas on Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white transition-opacity hover:opacity-80"
                  >
                    <FaFacebook size={20} />
                  </a>
                  <a
                    href="https://youtube.com/@top_finanzas_latam"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow TopFinanzas on YouTube"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF0000] text-white transition-opacity hover:opacity-80"
                  >
                    <FaYoutube size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@top.finanzas.latam"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow TopFinanzas on TikTok"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-80"
                  >
                    <FaTiktok size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/top_finanzas23/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Follow TopFinanzas on Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white transition-opacity hover:opacity-80"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#d8e6f4] bg-white p-8 shadow-lg lg:sticky lg:top-28">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-[#2E74B5]">
                  Send us a message
                </h2>
                <p className="mt-2 text-gray-600">
                  Tell us what you need and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We&apos;ll get back to you
                    soon.
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
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
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
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
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
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
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
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          acceptTerms: e.target.checked,
                        })
                      }
                      aria-invalid={!!errors.general}
                      aria-describedby={
                        errors.general ? "policy-error" : undefined
                      }
                      className="mt-1 mr-2 h-4 w-4"
                    />
                    <label
                      htmlFor="acceptTerms"
                      className="text-sm text-gray-600"
                    >
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
                    <p id="policy-error" className="text-red-500 text-sm">
                      {errors.general}
                    </p>
                  )}

                  {submitError && (
                    <p className="text-red-500 text-sm">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2E74B5] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#1e5a8a] transition-all shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </form>
              )}
            </div>
          </section>

          <section className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#2E74B5]">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
