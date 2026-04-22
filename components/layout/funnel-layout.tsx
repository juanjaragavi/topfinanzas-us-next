import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroBanner, TrustBar, AdSlot } from '@/components/steps/credit-card-rec-shared';
import { motion } from 'framer-motion';

interface FunnelLayoutProps {
  progress: number;
  title: string;
  'aria-label'?: string;
  unitIndex?: number;
  children: React.ReactNode;
}

export const CreditCardFunnelLayout: React.FC<FunnelLayoutProps> = ({
  title,
  'aria-label': ariaLabel,
  unitIndex = 1,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white" aria-label={ariaLabel}>
      <Header />
      <HeroBanner />
      <TrustBar />

      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
          {/* TopAds ad unit */}
          <div className="flex justify-center mb-6">
            <AdSlot unitIndex={unitIndex} logTag="CC-FUNNEL-LAYOUT" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-[20px] md:text-2xl font-bold leading-tight text-gray-900 text-center mb-6">
              {title}
            </h2>

            {children}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
