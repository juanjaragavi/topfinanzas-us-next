"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { logger } from "@/lib/logger";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SidebarAd,
  SidebarCategories,
  SidebarContent,
  SidebarNewsletter,
  SidebarProvider,
  SidebarRecentArticles,
  SidebarSeparator,
} from "@/components/ui/sidebar";

interface BlogLayoutProps {
  children: ReactNode;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export function BlogLayout({ children, metadata }: BlogLayoutProps) {
  const {
    title = "Blog - TopFinanzas",
    description = "Mantente informado con los mejores consejos, estrategias e información financiera de los expertos de TopFinanzas.",
  } = metadata || {};

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de suscripción
    logger.info("Formulario enviado");
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <section className="bg-gradient-to-b from-white to-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-left max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">{children}</div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <SidebarProvider>
                <SidebarContent>
                  {/* Ad banner */}
                  <SidebarAd />
                  <SidebarSeparator />
                  {/* Recent Articles - Updated */}
                  <SidebarRecentArticles>
                    {/* The Debt Detox */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-[50px] h-[50px] flex-shrink-0">
                        <Image
                          src="https://media.topfinanzas.com/images/the-debt-detox-choosing-between-the-snowball-and-avalanche-payoff-methods.webp"
                          alt="The Debt Detox: Choosing Between the Snowball and Avalanche Payoff Methods"
                          fill
                          loading="lazy"
                          className="rounded-md object-cover"
                          sizes="50px"
                        />
                      </div>
                      <div>
                        <Link
                          href="/personal-finance/the-debt-detox-choosing-between-the-snowball-and-avalanche-payoff-methods"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          The Debt Detox: Choosing Between the Snowball and
                          Avalanche Payoff Methods
                        </Link>
                      </div>
                    </div>

                    {/* Legacy Planning 101 */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-[50px] h-[50px] flex-shrink-0">
                        <Image
                          src="https://media.topfinanzas.com/images/legacy-planning-how-to-talk-to-aging-parents-about-finances.webp"
                          alt="Legacy Planning 101: How to Talk to Aging Parents About Their Finances and Wishes"
                          fill
                          loading="lazy"
                          className="rounded-md object-cover"
                          sizes="50px"
                        />
                      </div>
                      <div>
                        <Link
                          href="/personal-finance/legacy-planning-how-to-talk-to-aging-parents-about-finances"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Legacy Planning 101: How to Talk to Aging Parents
                          About Their Finances and Wishes
                        </Link>
                      </div>
                    </div>

                    {/* Micro-Investing for Big Dreams */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-[50px] h-[50px] flex-shrink-0">
                        <Image
                          src="https://media.topfinanzas.com/images/micro-investing-for-big-dreams-how-5-a-day-can-change-your-financial-trajectory.webp"
                          alt="Micro-Investing for Big Dreams: How $5 a Day Changes Your Finances"
                          fill
                          loading="lazy"
                          className="rounded-md object-cover"
                          sizes="50px"
                        />
                      </div>
                      <div>
                        <Link
                          href="/personal-finance/micro-investing-for-big-dreams-how-5-a-day-can-change-your-financial-trajectory"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Micro-Investing for Big Dreams: How $5 a Day Changes
                          Your Finances
                        </Link>
                      </div>
                    </div>
                    {/* Best 0% APR Balance Transfer Cards */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-[50px] h-[50px] flex-shrink-0">
                        <Image
                          src="https://media.topfinanzas.com/images/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt.webp"
                          alt="Best 0% APR Balance Transfer Cards: A Guide to Managing Debt"
                          fill
                          loading="lazy"
                          className="rounded-md object-cover"
                          sizes="50px"
                        />
                      </div>
                      <div>
                        <Link
                          href="/personal-finance/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Best 0% APR Balance Transfer Cards: A Guide to
                          Managing Debt
                        </Link>
                      </div>
                    </div>

                    {/* Best Secured Credit Cards */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-[50px] h-[50px] flex-shrink-0">
                        <Image
                          src="https://media.topfinanzas.com/images/what-are-the-best-secured-credit-cards-for-building-credit.webp"
                          alt="What Are the Best Secured Credit Cards for Building Credit?"
                          fill
                          loading="lazy"
                          className="rounded-md object-cover"
                          sizes="50px"
                        />
                      </div>
                      <div>
                        <Link
                          href="/personal-finance/what-are-the-best-secured-credit-cards-for-building-credit"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          What Are the Best Secured Credit Cards for Building
                          Credit?
                        </Link>
                      </div>
                    </div>

                    {/* Beat Inflation */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-[50px] h-[50px] flex-shrink-0">
                        <Image
                          src="https://media.topfinanzas.com/images/beat-inflation-with-your-cashback.webp"
                          alt="Beat Inflation with Your Cashback"
                          fill
                          loading="lazy"
                          className="rounded-md object-cover"
                          sizes="50px"
                        />
                      </div>
                      <div>
                        <Link
                          href="/personal-finance/beat-inflation-with-your-cashback"
                          className="text-sm font-medium hover:underline line-clamp-2"
                        >
                          Beat Inflation with Your Cashback
                        </Link>
                      </div>
                    </div>
                  </SidebarRecentArticles>
                  <SidebarSeparator />
                  {/* Categories - Updated */}
                  <SidebarCategories>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/personal-finance"
                        className="text-sm hover:underline font-medium" // Made font medium
                      >
                        Personal Finance
                      </Link>
                      {/* Removed count */}
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        href="/financial-solutions"
                        className="text-sm hover:underline font-medium" // Made font medium
                      >
                        Financial Solutions
                      </Link>
                      {/* Removed count */}
                    </div>
                    {/* Add more relevant categories if needed */}
                  </SidebarCategories>
                  <SidebarSeparator />
                  {/* Newsletter */}
                  <SidebarNewsletter onSubmit={handleNewsletterSubmit} />
                </SidebarContent>
              </SidebarProvider>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
