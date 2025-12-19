"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function InvitRecomendadorTarjetasMXPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("benefits");

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="text-left bg-white py-8 md:py-12 w-11/12 mx-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-[#1A9C8F] font-bold text-lg md:text-2xl leading-6 md:leading-8 mb-4">
              Hemos encontrado algunas tarjetas que desbloquean grandes
              posibilidades para ti.
            </h2>

            <p className="px-2 text-left text-sm text-gray-900 mb-2">
              Revisamos las últimas ofertas en México para conectarte con
              tarjetas que mantienen tus gastos diarios flexibles mientras
              acumulas recompensas significativas.
            </p>

            <div id="square01" data-topads data-topads-size="square"></div>

            <p className="px-2 text-left text-sm text-gray-900 mb-2">
              Por favor selecciona la opción de límite que mejor se ajuste a tus
              necesidades diarias:
            </p>
            <p className="text-center text-xs text-gray-800 mb-6">
              Por TopFinanzas
            </p>

            {/* Opciones de límite centradas (botones verdes) */}
            <div className="grid grid-cols-1 gap-3 my-4">
              <Link href="/soluciones-financieras/barclaycard-avios-plus">
                <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                  TARJETA HASTA $10,000 MXN
                </Button>
              </Link>
              <Link href="/soluciones-financieras/barclaycard-avios-plus">
                <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                  TARJETA HASTA $25,000 MXN
                </Button>
              </Link>
              <Link href="/soluciones-financieras/barclaycard-avios-plus">
                <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                  TARJETA HASTA $50,000 MXN
                </Button>
              </Link>
              <Link href="/soluciones-financieras/barclaycard-avios-plus">
                <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                  MÁS OPCIONES
                </Button>
              </Link>
            </div>

            {/* Panel de información + CTA de aceptación */}
            <section className="text-left mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-6 relative">
                <div
                  className="absolute left-0 top-0 h-full w-1 bg-[#1A9C8F] rounded-l-md"
                  aria-hidden="true"
                />
                <h3 className="text-[#1A9C8F] text-xl font-semibold mb-2">
                  ¡Excelente!
                </h3>
                <p className="text-left text-md text-gray-900">
                  Tu tarjeta está lista para ti. Selecciona la opción de límite
                  que mejor se adapte a tus necesidades y comienza a disfrutar
                  de beneficios como meses sin intereses, cashback, puntos y
                  más. Si ninguna de estas opciones se ajusta a tus
                  preferencias, tenemos alternativas adicionales disponibles
                  para tu consideración.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/soluciones-financieras/barclaycard-avios-plus">
                  <Button className="bg-[#1A9C8F] hover:bg-[#168B7F] text-white font-semibold py-4 my-1 w-full mx-auto rounded-xl">
                    ACEPTAR RECOMENDACIÓN
                  </Button>
                </Link>
              </div>
            </section>

            <div className="mb-6 border rounded">
              {/* FAQ Item 1: Beneficios */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b"
                onClick={() => toggleFaq("benefits")}
                aria-expanded={openFaq === "benefits"}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "benefits" ? "text-[#1A9C8F]" : "text-sky-600"
                  }`}
                >
                  ¿Qué beneficios tiene una tarjeta sin anualidad?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "benefits" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "benefits" ? "text-[#1A9C8F]" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "benefits" && (
                <div className="p-4 text-gray-900" id="faq-benefits-content">
                  <p className="text-left">
                    Una tarjeta sin anualidad te ayuda a ahorrar costos
                    recurrentes mientras disfrutas de beneficios clave como
                    cashback o puntos por tus compras.
                  </p>
                </div>
              )}

              {/* FAQ Item 2: Cashback */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b"
                onClick={() => toggleFaq("cashback")}
                aria-expanded={openFaq === "cashback"}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "cashback" ? "text-[#1A9C8F]" : "text-sky-600"
                  }`}
                >
                  ¿Cómo funciona el cashback?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "cashback" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "cashback" ? "text-[#1A9C8F]" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "cashback" && (
                <div className="p-4 text-gray-900" id="faq-cashback-content">
                  <p className="text-left">
                    Recibes un porcentaje de tus compras como efectivo que
                    puedes usar para reducir saldos o gastar como prefieras.
                  </p>
                </div>
              )}

              {/* FAQ Item 3: Viajeros */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b"
                onClick={() => toggleFaq("travelers")}
                aria-expanded={openFaq === "travelers"}
              >
                <h3
                  className={`font-medium text-lg leading-5 ${
                    openFaq === "travelers" ? "text-[#1A9C8F]" : "text-sky-600"
                  }`}
                >
                  ¿Cuál es la mejor opción para viajeros?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "travelers" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "travelers" ? "text-[#1A9C8F]" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "travelers" && (
                <div className="p-4 text-gray-900" id="faq-travelers-content">
                  <p className="text-left">
                    Las tarjetas con acumulación de millas o acceso a salones
                    VIP son ideales para viajeros frecuentes, permitiéndote
                    ahorrar en vuelos y disfrutar de beneficios exclusivos.
                  </p>
                </div>
              )}

              {/* FAQ Item 4: En línea */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer"
                onClick={() => toggleFaq("online")}
                aria-expanded={openFaq === "online"}
              >
                <h3
                  className={`font-medium text-lg leading-6 ${
                    openFaq === "online" ? "text-[#1A9C8F]" : "text-sky-600"
                  }`}
                >
                  ¿Es seguro usar tarjetas de crédito en línea?
                </h3>
                <span
                  className={`text-xl transition-transform ${
                    openFaq === "online" ? "transform rotate-180" : ""
                  } ${
                    openFaq === "online" ? "text-[#1A9C8F]" : "text-sky-700"
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
              {openFaq === "online" && (
                <div className="p-4 text-gray-900" id="faq-online-content">
                  <p className="text-left">
                    Sí, muchas tarjetas ofrecen tecnología avanzada como CVV
                    dinámico y alertas instantáneas para proteger tus
                    transacciones.
                  </p>
                </div>
              )}
            </div>

            {/* Panel de Mantente Informado */}
            <section className="text-left mb-6">
              <div className="bg-gray-50 border border-gray-200 rounded-md p-4 relative">
                <div
                  className="absolute left-0 top-0 h-full w-1 bg-[#1A9C8F] rounded-l-md"
                  aria-hidden="true"
                />
                <h3 className="text-gray-800 font-semibold mb-2 mt-4">
                  Mantente Informado
                </h3>
                <p className="text-left text-sm text-gray-900 mb-4">
                  Si buscas asistencia adicional para mejorar tu historial
                  crediticio u optimizar el uso de tu tarjeta de crédito,
                  explora la información a continuación. Ofrecemos recursos
                  valiosos adaptados a tus necesidades específicas.
                </p>
              </div>
            </section>

            {/* Banner promocional inferior */}
            <div className="my-8 text-left sm:text-left">
              <div className="mx-auto w-full md:w-8/12 border rounded-xl p-4 bg-white">
                <div className="flex flex-col items-center text-center space-y-3">
                  <Image
                    src="https://media.topfinanzas.com/images/Tobanner-02-1.webp"
                    alt="Tarjetas de Crédito México"
                    width={640}
                    height={360}
                    className="w-56 h-auto rounded-lg"
                  />
                  <p className="text-[#B45309] text-sm font-semibold">
                    🔔 ¡Oferta por tiempo limitado!
                  </p>
                  <h4 className="text-gray-900 font-bold">
                    TARJETA SIN ANUALIDAD
                  </h4>
                  <p className="text-gray-800 text-sm">
                    ¡La más solicitada por nuestros lectores! Descúbrela hoy...
                  </p>
                  <Link
                    href="/soluciones-financieras/barclaycard-avios-plus-requisitos"
                    className="w-full"
                  >
                    <Button className="bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold py-2 w-full rounded-md">
                      VER CÓMO SOLICITARLA
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}
