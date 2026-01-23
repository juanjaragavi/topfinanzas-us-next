import Link from "next/link";
import Image from "next/image";
import { BackToTop } from "@/components/ui/back-to-top"; // Import the new component

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";
import { footerContent } from "@/lib/texts/footer/content";

export function Footer() {
  return (
    <footer className="bg-[#3E73C4] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Logo Section - Added at the top for mobile */}
        {/* Col 1: Logo & Rights Quote */}
        <div className="order-1 flex flex-col items-start mb-8 md:mb-0">
          <Image
            src={logos.whiteLogo.url}
            alt={logos.whiteLogo.alt}
            width={logos.whiteLogo.width}
            height={logos.whiteLogo.height}
            className="h-16 w-auto mb-6"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-xs md:text-sm leading-tight text-white font-normal text-left uppercase max-w-[280px]">
            {footerContent.legal.fullCopyright.text}
          </p>
        </div>

        {/* Main Footer Sections - 4 Column Layout for MX */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 2: Categories */}
          <div className="order-2">
            <h2 className="footer-h2 mb-4 text-white text-base font-semibold">
              {footerContent.headings.categories}
            </h2>
            <ul className="space-y-4">
              {footerNavigation.categoryItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="footer-text text-sm font-normal hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigate & Socials */}
          <div className="order-3">
            <h2 className="footer-h2 mb-4 text-white text-base font-semibold">
              {footerContent.headings.navigate}
            </h2>
            <ul className="space-y-4">
              {footerNavigation.mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="footer-text text-sm font-normal hover:text-[#55B9FF] hover:underline transition-colors"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media - Integrated here as per design */}
            <div className="mt-8">
              <p className="mb-4 text-white text-sm font-semibold">
                {footerNavigation.socialMedia.title}
              </p>
              <div className="flex space-x-4">
                {footerNavigation.socialMedia.links.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#55B9FF] transition-colors"
                    aria-label={social.ariaLabel}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6" // Kept h-6, could be h-5 based on screenshot but h-6 is safer touch target
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.svgPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="order-4">
            <h2 className="footer-h2 mb-4 text-white text-base font-semibold">
              {footerContent.headings.contact}
            </h2>
            <ul className="space-y-6">
              {footerNavigation.contactInfo.map((contact, index) => (
                <li
                  key={index}
                  className={`flex ${
                    contact.type === "address" ? "items-start" : "items-center"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 mr-3 ${
                      contact.type === "address" ? "mt-1 flex-shrink-0" : ""
                    } text-white`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Note: Original had #55B9FF text color for icons, MX design implies white or matching theme */}
                    {contact.svgPath.split("|").map((path: string, idx: number) => (
                      <path
                        key={idx}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={path}
                      />
                    ))}
                  </svg>
                  {contact.type === "email" ? (
                    <a
                      href={contact.href}
                      className="footer-text text-sm font-normal hover:text-[#55B9FF] hover:underline transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <span className="footer-text text-sm font-normal leading-tight">
                      {contact.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer with updated styling */}

        {/* Bottom Copyright */}
        <div className="text-left border-t border-white/20 pt-6">
          <p className="footer-meta text-xs md:text-sm font-light">
            <span className="font-normal">
              {footerContent.companyInfo.productLabel}
            </span>
            <span className="mx-2">|</span>
            {footerNavigation.legalLinks.map((link) => (
              <span key={link.href}>
                <Link
                  href={link.href}
                  className="footer-link text-xs md:text-sm hover:underline"
                >
                  {link.text}
                </Link>
                <span className="mx-2">|</span>
              </span>
            ))}
            <span className="font-light">
              &copy; {footerContent.legal.copyright.text}
            </span>
          </p>
        </div>
      </div>
      <BackToTop /> {/* Add the component here */}
    </footer>
  );
}
