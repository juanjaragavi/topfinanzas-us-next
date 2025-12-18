"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import useRecommenderPageGuard from "@/hooks/use-recommender-page-guard";

function CreditCardRecommenderPageContent() {
  useRecommenderPageGuard();
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

      <article className="text-left bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
              Descubre tu tarjeta de crédito ideal
            </h1>

            <p className="text-left text-sm leading-6 text-gray-800 mb-8">
              Encontrar la tarjeta correcta es simple. Maximiza tus recompensas,
              organiza tus gastos y disfruta de beneficios exclusivos. ¡Explora
              y elige la tarjeta ideal para ti!
            </p>

            <div id="square01" data-topads data-topads-size="square"></div>

            <h2 className="text-lg leading-5 font-bold text-gray-800 mb-6 mt-8">
              ¿Por qué elegir nuestro recomendador de tarjetas de crédito?
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">➔</span>
                </div>
                <span className="font-bold text-sm sm:text-lg">
                  Opciones personalizadas
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">➔</span>
                </div>
                <span className="font-bold text-sm sm:text-lg">
                  Completamente gratuito
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">➔</span>
                </div>
                <span className="font-bold text-sm sm:text-lg">
                  Asesoría experta
                </span>
              </div>
            </div>

            <div className="mt-8 mb-4">
              <Link href="/financial-solutions/bbva-tarjeta-de-credito-azul">
                <Button className="bg-[#80E67D] hover:bg-[#70D66D] text-white font-bold text-base py-3 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span>Aceptar recomendación</span>
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-[#80E67D] text-sm font-bold">
                        ➔
                      </span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <p className="text-left text-sm leading-6 text-gray-800 mb-4">
              Nuestras recomendaciones están diseñadas para conectar tus metas
              financieras con las tarjetas que mejor se adaptan a tus
              necesidades. Desde el cashback hasta las recompensas de viaje, te
              damos opciones claras y fáciles de entender para que tomes
              decisiones informadas.
            </p>

            <p className="text-left text-sm leading-6 text-gray-800 mb-8">
              Con nuestra guía, transformarás tu tarjeta de crédito en una
              herramienta que simplifica tus finanzas y te ayuda a alcanzar tus
              objetivos sin complicaciones.
            </p>

            <div className="mt-8 mb-4">
              <Link href="/financial-solutions/bbva-tarjeta-de-credito-azul">
                <Button className="bg-[#80E67D] hover:bg-[#70D66D] text-white font-bold text-base py-3 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span>Nuestra mejor recomendación</span>
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-[#80E67D] text-sm font-bold">
                        ➔
                      </span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <p className="text-center text-sm mb-12">
              <Link
                className="text-[#2E74B5] font-medium"
                href="/financial-solutions/bbva-tarjeta-de-credito-azul-requisitos"
              >
                Aprende cómo solicitarla
              </Link>
            </p>

            <div className="mt-8 mb-6 border rounded-lg overflow-hidden">
              {/* FAQ Item 1: Benefits */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("benefits")}
                aria-expanded={openFaq === "benefits"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "benefits" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "benefits" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    ¿Qué beneficios tiene una tarjeta sin anualidad?
                  </h3>
                </div>
              </button>
              {openFaq === "benefits" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-benefits-content"
                >
                  <p className="text-left text-sm">
                    Una tarjeta sin anualidad te ayuda a ahorrar costos
                    recurrentes mientras disfrutas de beneficios clave como
                    cashback o puntos por tus compras.
                  </p>
                </div>
              )}

              {/* FAQ Item 2: Cashback */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("cashback")}
                aria-expanded={openFaq === "cashback"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "cashback" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "cashback" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    ¿Cómo funciona el cashback?
                  </h3>
                </div>
              </button>
              {openFaq === "cashback" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-cashback-content"
                >
                  <p className="text-left text-sm">
                    Recibes un porcentaje de tus compras como efectivo que
                    puedes usar para reducir saldos o gastar como prefieras.
                  </p>
                </div>
              )}

              {/* FAQ Item 3: Travelers */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer border-b hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("travelers")}
                aria-expanded={openFaq === "travelers"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "travelers" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "travelers" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    ¿Cuál es la mejor opción para viajeros?
                  </h3>
                </div>
              </button>
              {openFaq === "travelers" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-travelers-content"
                >
                  <p className="text-left text-sm">
                    Las tarjetas con acumulación de millas o acceso a salones
                    VIP son ideales para viajeros frecuentes, permitiéndote
                    ahorrar en vuelos y disfrutar de beneficios exclusivos.
                  </p>
                </div>
              )}

              {/* FAQ Item 4: Online */}
              <button
                type="button"
                className="flex justify-between items-center w-full p-4 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq("online")}
                aria-expanded={openFaq === "online"}
              >
                <div className="flex items-center">
                  <span className="text-[#2E74B5] mr-3 font-bold text-xl">
                    {openFaq === "online" ? "−" : "+"}
                  </span>
                  <h3
                    className={`font-bold text-md leading-tight ${openFaq === "online" ? "text-[#2E74B5]" : "text-[#2E74B5]"}`}
                  >
                    ¿Es seguro usar tarjetas de crédito en línea?
                  </h3>
                </div>
              </button>
              {openFaq === "online" && (
                <div
                  className="p-4 text-gray-700 bg-gray-50"
                  id="faq-online-content"
                >
                  <p className="text-left text-sm">
                    Sí, muchas tarjetas ofrecen tecnología avanzada como CVV
                    dinámico y alertas instantáneas para proteger tus
                    transacciones.
                  </p>
                </div>
              )}
            </div>

            <p className="text-left text-sm leading-6 text-gray-800 mb-12">
              Haz de tu tarjeta de crédito una aliada para alcanzar tus metas
              financieras. Desde cashback hasta recompensas de viaje, elige una
              opción que simplifique tu vida y maximice tus beneficios. Explora
              nuestras recomendaciones y encuentra la tarjeta que mejor se
              adapta a ti.
            </p>

            <div className="my-10">
              <Link href="/financial-solutions/bbva-tarjeta-de-credito-azul">
                <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <Image
                    src="https://media.topfinanzas.com/images/Tobanner-02-1.webp"
                    alt="BBVA Tarjeta de Crédito Azul"
                    width={800}
                    height={450}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CompactFooter />
    </main>
  );
}

export default function CreditCardRecommenderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreditCardRecommenderPageContent />
    </Suspense>
  );
}
