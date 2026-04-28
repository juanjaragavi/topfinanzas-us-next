"use client";

import { useState } from "react";
import Image from "next/image";
import { ChatLightbox } from "./ChatLightbox";

export function OperatorAvatar() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const operatorImageSrc = "https://media.topfinanzas.com/images/top-us-operator.webp";

  return (
    <>
      <button 
        onClick={() => setIsLightboxOpen(true)}
        className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-gray-200 shadow-sm transition-transform hover:scale-105"
      >
        <Image
          src={operatorImageSrc}
          alt="Top Finanzas Assistant"
          fill
          className="object-cover"
          sizes="40px"
          priority
        />
        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
      </button>

      <ChatLightbox 
        isOpen={isLightboxOpen} 
        onClose={() => setIsLightboxOpen(false)} 
        imageSrc={operatorImageSrc} 
      />
    </>
  );
}
