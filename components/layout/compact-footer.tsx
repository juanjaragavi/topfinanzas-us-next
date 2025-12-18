import Link from "next/link";
import Image from "next/image";
import { BackToTop } from "@/components/ui/back-to-top"; // Import the new component

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";

export function CompactFooter() {
  return (
    <footer className="bg-[#3F67B9] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <Image
            src={logos.whiteLogo.url}
            alt={logos.whiteLogo.alt}
            width={120}
            height={40}
            className="h-10 w-auto"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>

        {/* Copyright Text Block */}
        <div className="text-left mb-4">
          <p className="text-xs uppercase tracking-wide text-white">
            TODOS LOS DERECHOS RESERVADOS, ©TOP NETWORKS INC 2025. LA
            REPRODUCCIÓN TOTAL O PARCIAL POR CUALQUIER MEDIO O FORMA SIN LA
            AUTORIZACIÓN POR ESCRITO Y EXPRESA DEL TITULAR DE LOS DERECHOS DE
            AUTOR ESTÁ PROHIBIDA.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="mt-20 text-left text-xs text-white">
          <span className="text-white">
            Un producto de TOP NETWORKS INC. |{" "}
          </span>
          <span className="text-white">
            {footerNavigation.legalLinks.map((link, index) => (
              <span className="text-white" key={link.href}>
                <Link href={link.href} className="hover:underline text-white">
                  {link.text}
                </Link>
                {index < footerNavigation.legalLinks.length - 1 ? " | " : ""}
              </span>
            ))}
          </span>
          <span className="text-white">
            {" "}
            | Derechos de autor Top Networks Inc. 2025
          </span>
        </div>
      </div>
      <BackToTop /> {/* Add the component here */}
    </footer>
  );
}
