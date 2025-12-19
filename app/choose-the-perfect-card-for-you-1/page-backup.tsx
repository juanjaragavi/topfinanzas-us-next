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

            <div id="square01" data-topads data-topads-size="square"></div>

            <p className="text-left text-sm leading-6 text-gray-800 my-8">
              En <strong>TopFinanzas</strong>, te ayudamos a tomar el control de
              tus finanzas. Te ofrecemos el mejor análisis de tarjetas de
              crédito y las mejores recomendaciones para que encuentres
              fácilmente la ideal para ti, maximices tus recompensas, organices
              tus gastos y disfrutes de beneficios exclusivos. Explora nuestras
              recomendaciones y encuentra la tarjeta que mejor se adapta a ti.
            </p>

            <div className="mt-8 mb-4">
              <Link href="/soluciones-financieras/bbva-tarjeta-de-credito-azul">
                <Button className="bg-[#71C96C] hover:bg-[#5BAD56] text-white font-bold text-lg py-4 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span>Aceptar recomendación</span>
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-[#71C96C] text-sm font-bold">
                        ➔
                      </span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>

            <h2 className="text-lg leading-5 font-bold text-gray-800 mb-6 mt-12">
              ¿Por qué elegir nuestro recomendador de tarjetas de crédito?
            </h2>
            <div className="space-y-2 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-5 h-5 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span className="font-bold text-sm">
                  Opciones personalizadas
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-5 h-5 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span className="font-bold text-sm">
                  Completamente gratuito
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 rounded-full bg-[#71C96C] w-5 h-5 flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span className="font-bold text-sm">Asesoría experta</span>
              </div>
            </div>

            <p className="text-left text-sm leading-6 text-gray-800 mb-4">
              Nuestras recomendaciones están diseñadas para conectar tus metas
              financieras con las tarjetas que mejor se adaptan a tus
              necesidades. Desde el cashback hasta las recompensas de viaje, te
              damos opciones claras y fáciles de entender para que tomes
              decisiones informadas.
            </p>

            <p className="text-left text-sm leading-6 text-gray-800 mb-10">
              Con nuestra guía, transformarás tu tarjeta de crédito en una
              herramienta que simplifica tus finanzas y te ayuda a alcanzar tus
              objetivos sin complicaciones.
            </p>

            <div className="mt-8 mb-4">
              <Link href="/soluciones-financieras/bbva-tarjeta-de-credito-azul">
                <Button className="bg-[#71C96C] hover:bg-[#5BAD56] text-white font-bold text-lg py-4 w-full rounded-full inline-flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span>Nuestra mejor recomendación</span>
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-[#71C96C] text-sm font-bold">
                        ➔
                      </span>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
            <p className="text-center text-sm mb-8">
              <Link
                className="text-[#2E74B5] font-medium"
                href="/soluciones-financieras/bbva-tarjeta-de-credito-azul-requisitos"
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
                    ahorra en vuelos y disfrutar de beneficios exclusivos.
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

            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
              Beneficios a tu alcance
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="space-y-1">
                <h3 className="font-bold text-sm">
                  Recompensas por tus compras:
                </h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Acumula el 9% de cada compra en puntos, utilizables en una
                  amplia variedad de productos y servicios.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Seguridad avanzada:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Protección total para tus compras en línea con un CVV dinámico
                  que cambia con cada transacción.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Accesible para todos:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Solo necesitas un ingreso mínimo de $6,000 mensuales para
                  disfrutar de todos sus beneficios.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Compromiso ambiental:</h3>
                <p className="text-xs text-gray-600 leading-tight">
                  Fabricada con más del 85% de plástico reciclado, ayudando al
                  planeta con cada compra.
                </p>
              </div>
            </div>

            <div className="my-10">
              <Link href="/soluciones-financieras/bbva-tarjeta-de-credito-azul">
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
