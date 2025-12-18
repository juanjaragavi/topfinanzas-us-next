"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutUs() {
  const faqs = [
    {
      question: "¿Qué servicios ofrece Top Finanzas?",
      answer: (
        <p>
          Top Finanzas ofrece asesoramiento financiero, herramientas prácticas y
          recursos educativos. Para más detalles,{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            visita nuestra página principal
          </Link>
          .
        </p>
      ),
    },
    {
      question: "¿Top Finanzas tiene una aplicación móvil?",
      answer: (
        <p>
          Actualmente estamos desarrollando una aplicación para mejorar la
          experiencia del usuario.
        </p>
      ),
    },
    {
      question: "¿Cómo manejar deudas de tarjetas de crédito?",
      answer: (
        <p>
          Realiza pagos superiores al mínimo y considera consolidar tus deudas.
        </p>
      ),
    },
    {
      question:
        "¿Top Finanzas ofrece consejos sobre jubilación y planificación a largo plazo?",
      answer: (
        <p>
          Sí, proporcionamos información y recursos para tu jubilación y
          seguridad financiera a largo plazo.
        </p>
      ),
    },
    {
      question: "¿Cómo crear un presupuesto efectivo?",
      answer: (
        <p>
          Identifica tus ingresos, lista tus gastos, prioriza tus necesidades y
          establece límites de gasto.
        </p>
      ),
    },
    {
      question: "¿Cómo contactar a Top Finanzas?",
      answer: (
        <p>
          Puedes contactarnos a través de nuestro formulario en línea, correo
          electrónico o teléfono o{" "}
          <Link href="/contactanos" className="text-blue-600 hover:underline">
            haciendo clic aquí
          </Link>
          .
        </p>
      ),
    },
    {
      question:
        "¿Qué recursos ofrece Top Finanzas para aprender sobre inversiones?",
      answer: (
        <p>
          Ofrecemos artículos, tutoriales y webinars sobre inversiones. Conoce
          más en nuestra{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">
            sección sobre inversiones
          </Link>
          .
        </p>
      ),
    },
    {
      question: "¿Cómo mejorar mi puntuación de crédito?",
      answer: (
        <p>
          Paga tus facturas a tiempo, reduce tus deudas y revisa regularmente tu
          informe de crédito.
        </p>
      ),
    },
    {
      question: "¿Cuáles son las mejores estrategias para ahorrar dinero?",
      answer: (
        <p>
          Automatiza tus ahorros y revisa tus gastos regularmente. Encuentra más
          estrategias en nuestro{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">
            artículo sobre ahorro
          </Link>
          .
        </p>
      ),
    },
    {
      question: "¿Top Finanzas ofrece herramientas gratuitas?",
      answer: (
        <p>
          Sí, ofrecemos calculadoras y otras herramientas en nuestro sitio web.
        </p>
      ),
    },
    {
      question: "¿Cómo invertir sabiamente mi dinero?",
      answer: (
        <p>
          Investiga tus opciones y considera hablar con un asesor financiero.
          Aprende más sobre{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">
            opciones de inversión
          </Link>
          .
        </p>
      ),
    },
    {
      question: "¿Cómo puedo mejorar mis finanzas personales?",
      answer: (
        <p>
          Comienza evaluando tus ingresos y gastos, estableciendo un presupuesto
          y objetivos financieros claros. Encuentra más consejos en{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">
            nuestro blog
          </Link>
          .
        </p>
      ),
    },
    {
      question: "¿Ofrece Top Finanzas asesoramiento personalizado?",
      answer: (
        <p>
          Sí, ofrecemos servicios personalizados adaptados a tus necesidades y
          objetivos.
        </p>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex flex-col px-4 sm:px-6">
        <div className="container mx-auto px-4 py-8 max-w-7xl bg-white">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            Top Finanzas: Tu guía en el mundo de las finanzas personales
          </h1>

          <div className="mb-12">
            <Image
              src="https://topfinanzas.com/mx/wp-content/uploads/2023/11/NOSOTROS2-1180x307.jpg"
              alt="Equipo Top Finanzas"
              width={1180}
              height={307}
              className="w-full h-auto object-cover shadow-sm"
              priority
            />
          </div>

          <section className="mb-16">
            <p className="font-bold text-lg mb-6 text-gray-900">
              En Top Finanzas, creemos firmemente que una buena gestión
              financiera es la clave para una vida más plena y tranquila.
            </p>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Estamos convencidos de que una gestión financiera eficaz y
              responsable no solo es fundamental para la estabilidad económica,
              sino también esencial para alcanzar una vida más satisfactoria y
              serena. Entendemos que la tranquilidad financiera es un componente
              crucial del bienestar general, y nos esforzamos por brindarte las
              herramientas y el conocimiento necesarios para lograrla.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#7abb41]">
              Preguntas Frecuentes
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* Splitting FAQs into two columns as per typical layout, or keeping single column but styled closer to screens */}
              <div className="grid grid-cols-1 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 py-4">
                    <h3 className="font-bold text-[#7abb41] mb-2 flex items-start">
                      <span className="mr-2 text-xs mt-1">▲</span>
                      {faq.question}
                    </h3>
                    <div className="text-gray-700 pl-5">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
