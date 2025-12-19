"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";

export default function InviteCreditCardRecUSPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full text-center space-y-6">
          
          {/* Limited Offer Badge */}
          <div className="flex items-center justify-center space-x-2 text-red-600 font-bold uppercase tracking-wider text-sm md:text-base">
            <Bell className="w-5 h-5 fill-current" />
            <span>Limited offer!</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase leading-tight">
            CARD WITH NO ANNUAL FEE
          </h1>

          {/* Card Stack Image */}
          <div className="relative w-full h-64 md:h-80 my-8">
            <Image
              src="https://us.topfinanzas.com/wp-content/uploads/2025/04/credit-card-varity.png"
              alt="Credit Card Variety"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Body Text */}
          <p className="text-lg md:text-xl text-gray-700 font-medium px-4">
            The most requested among our readers! Check it out today...
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link href="/financial-solutions/barclaycard-avios-plus" className="block w-full"> 
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-8 text-xl rounded-full shadow-xl transition-all transform hover:scale-105 hover:shadow-2xl uppercase tracking-wide"
              >
                SEE HOW TO APPLY
              </Button>
            </Link>
          </div>

        </div>
      </div>

      <CompactFooter />
    </main>
  );
}

