"use client";

import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BRAND_STATIC_FIELDS, UTM_PARAM_KEYS } from "@/lib/constants";
import { logger } from "@/lib/logger";

interface ContactFormState {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  acceptTerms: boolean;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
  Pais: string;
  Marca: string;
  pais: string;
  marca: string;
}

type ContactFormStringKeys = {
  [K in keyof ContactFormState]: ContactFormState[K] extends string ? K : never;
}[keyof ContactFormState];

const initialFormState: ContactFormState = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  acceptTerms: false,
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  source: "",
  medium: "",
  campaign: "",
  term: "",
  content: "",
  Pais: BRAND_STATIC_FIELDS.Pais,
  Marca: BRAND_STATIC_FIELDS.Marca,
  pais: BRAND_STATIC_FIELDS.Pais,
  marca: BRAND_STATIC_FIELDS.Marca,
};

const UTM_TO_PLAIN_FIELD: Record<
  (typeof UTM_PARAM_KEYS)[number],
  ContactFormStringKeys
> = {
  utm_source: "source",
  utm_medium: "medium",
  utm_campaign: "campaign",
  utm_term: "term",
  utm_content: "content",
};

export default function Contactanos() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);

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

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const utmUpdates: Partial<Record<keyof ContactFormState, string>> = {};

    UTM_PARAM_KEYS.forEach((param) => {
      const value = sessionStorage.getItem(param);
      if (typeof value === "string" && value.trim() !== "") {
        utmUpdates[param as keyof ContactFormState] = value;
        const mappedKey = UTM_TO_PLAIN_FIELD[param];
        if (mappedKey) {
          utmUpdates[mappedKey] = value;
        }
      }
    });

    if (Object.keys(utmUpdates).length > 0) {
      setFormData(
        (prev) =>
          ({
            ...prev,
            ...utmUpdates,
          }) as ContactFormState,
      );
    }
  }, []);

  const validateEmail = (email: string): boolean => {
    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: "El correo es requerido",
      }));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Por favor ingresa un correo válido",
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
        name: "El nombre es requerido",
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
        lastName: "El apellido es requerido",
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
        phone: "El teléfono es requerido",
      }));
      return false;
    }
    // Basic validation for MX/General phone
    if (phoneNumber.length < 10) {
      setErrors((prev) => ({
        ...prev,
        phone: "Ingresa un número válido (mínimo 10 dígitos) ",
      }));
      return false;
    }
    setErrors((prev) => ({ ...prev, phone: null }));
    return true;
  };

  const validateForm = (): boolean => {
    const isEmailValid = validateEmail(formData.email);
    const isNameValid = validateName(formData.name);
    const isLastNameValid = validateLastName(formData.lastName);
    const isPhoneValid = validatePhone(formData.phone);
    const isMessageValid = formData.message.trim().length > 0; // Simple check

    if (!isMessageValid) {
      setErrors((prev) => ({
        ...prev,
        message: "Por favor describe tu necesidad",
      }));
    } else {
      setErrors((prev) => ({ ...prev, message: null }));
    }

    if (!formData.acceptTerms) {
      setErrors((prev) => ({
        ...prev,
        general: "Debes aceptar las políticas de datos",
      }));
      return false;
    } else {
      setErrors((prev) => ({ ...prev, general: null }));
    }

    return (
      isEmailValid &&
      isNameValid &&
      isLastNameValid &&
      isPhoneValid &&
      isMessageValid &&
      formData.acceptTerms
    );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(
      (prev) =>
        ({
          ...prev,
          [name]: value,
        }) as ContactFormState,
    );

    // Clear errors on change if needed, or implement live validation as before
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, acceptTerms: checked }));
    if (checked) {
      setErrors((prev) => ({ ...prev, general: null }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Assuming same API endpoint, just customized frontend
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar el mensaje");
      }

      setSubmitSuccess(true);
      setFormData(initialFormState); // Reset form
    } catch (error) {
      logger.error("Error sending message:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado. Por favor intenta de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-6xl bg-white">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Contáctanos</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Left Column: Image & Text */}
          <div className="md:col-span-5 flex flex-col items-start space-y-8">
            {/* Image matches screenshot vertical aspect ratio */}
            <div
              className="w-full relative overflow-hidden shadow-lg"
              style={{ aspectRatio: "360/738" }}
            >
              {/* Using style for aspect ratio based on image dimensions provided in URL */}
              {/* 360x738 is approx 1:2 */}
              <Image
                src="https://media.topfinanzas.com/images/contacto360x738.png"
                alt="Contáctanos TopFinanzas"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content & Form */}
          <div className="md:col-span-7 flex flex-col space-y-6">
            <div className="space-y-4 text-lg text-gray-700">
              <p className="font-medium">
                ¿Te preguntas cómo puedes lograr un cambio significativo en tus
                finanzas personales?
              </p>
              <p>
                Si estás listo para embarcarte en una travesía transformadora
                hacia la estabilidad y la prosperidad financiera, estamos aquí
                para acompañarte. Contáctanos a través del correo electrónico
              </p>
              <p className="font-bold text-gray-900">
                <a
                  href="mailto:info@topfinanzas.com"
                  className="hover:text-blue-600 transition-colors"
                >
                  info@topfinanzas.com
                </a>
                <span className="font-normal">
                  {" "}
                  o completa el formulario a continuación para compartir tus
                  inquietudes, ideas o planes. Nos comprometemos a responder con
                  agilidad y a ser tus aliados en cada etapa de este emocionante
                  viaje que transformará tu vida.
                </span>
              </p>
              <p>¡Esperamos saber de ti pronto!</p>
            </div>

            {/* Form */}
            <div className="mt-8">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 p-8 rounded-xl border border-green-200 text-center"
                >
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-green-600 mb-6">
                    Gracias por contactarnos. Te responderemos a la brevedad.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nombre"
                      className={`rounded-full border-gray-300 py-6 px-6 text-gray-700 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm pl-4">{errors.name}</p>
                    )}

                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Apellido"
                      className={`rounded-full border-gray-300 py-6 px-6 text-gray-700 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 ${errors.lastName ? "border-red-500" : ""}`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm pl-4">
                        {errors.lastName}
                      </p>
                    )}

                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Correo"
                      className={`rounded-full border-gray-300 py-6 px-6 text-gray-700 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm pl-4">
                        {errors.email}
                      </p>
                    )}

                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="telefono" // Match lowercase from requirement/screenshot
                      className={`rounded-full border-gray-300 py-6 px-6 text-gray-700 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? "border-red-500" : ""}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm pl-4">
                        {errors.phone}
                      </p>
                    )}

                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="describe tu necesidad" // Match lowercase
                      className={`rounded-3xl border-gray-300 py-4 px-6 text-gray-700 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 min-h-[150px] resize-none ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm pl-4">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start gap-3 mt-4 px-2">
                    <Checkbox
                      id="terms"
                      checked={formData.acceptTerms}
                      onCheckedChange={handleCheckboxChange}
                      className="mt-1"
                    />
                    <div className="text-sm text-gray-600 leading-tight">
                      <Label htmlFor="terms" className="mr-1">
                        Acepto
                      </Label>
                      <Link
                        href="/privacy-policy"
                        className="text-blue-500 hover:underline"
                      >
                        políticas de tratamiento de datos
                      </Link>{" "}
                      y{" "}
                      <Link
                        href="/terms"
                        className="text-blue-500 hover:underline"
                      >
                        términos y condiciones
                      </Link>
                    </div>
                  </div>
                  {errors.general && (
                    <p className="text-red-500 text-sm pl-4">
                      {errors.general}
                    </p>
                  )}

                  {submitError && (
                    <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
                      {submitError}
                    </div>
                  )}

                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#2E74B5] text-white px-12 py-3 rounded-full font-bold tracking-wide hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase text-sm"
                    >
                      {isSubmitting ? "Enviando..." : "ENVIAR"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Social Media - Below Form */}
            <div className="mt-16 text-center">
              <h3 className="text-xl text-gray-800 mb-6 font-medium">
                Siguenos en nuestras redes sociales y toma el control de tus
                finanzas
              </h3>
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://www.facebook.com/topfinanzas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#3b5998] text-white rounded-lg hover:opacity-90 transition-opacity"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  href="https://www.youtube.com/@topfinanzas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#FF0000] text-white rounded-lg hover:opacity-90 transition-opacity"
                  aria-label="YouTube"
                >
                  <FaYoutube size={24} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@topfinanzas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#69C9D0] text-white rounded-lg hover:opacity-90 transition-opacity"
                  aria-label="TikTok"
                >
                  <FaTiktok size={24} />
                </Link>
                <Link
                  href="https://www.instagram.com/topfinanzas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-[#3f729b] text-white rounded-lg hover:opacity-90 transition-opacity"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
