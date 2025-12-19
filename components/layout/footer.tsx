import Link from "next/link";
import Image from "next/image";
import { BackToTop } from "@/components/ui/back-to-top";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa6";
import { Mail, MapPin } from "lucide-react";

// Import content from lib directory
import { logos } from "@/lib/images/logos";
import { footerNavigation } from "@/lib/navigation/footerNavigation";
import { footerContent } from "@/lib/texts/footer/content";

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "Facebook":
      return <FaFacebookF className="h-6 w-6" />;
    case "YouTube":
      return <FaYoutube className="h-6 w-6" />;
    case "Instagram":
      return <FaInstagram className="h-6 w-6" />;
    case "TikTok":
      return <FaTiktok className="h-6 w-6" />;
    default:
      return null;
  }
};

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
                    <SocialIcon platform={social.platform} />
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
                  {contact.type === "email" ? (
                    <Mail className="w-5 h-5 mr-3 text-white" />
                  ) : (
                    <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-white" />
                  )}
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
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <p className="text-xs text-white/80 leading-relaxed">
            <span className="font-bold">
              {footerContent.legal.disclaimer.label}
            </span>{" "}
            {footerContent.legal.disclaimer.text}
          </p>
        </div>

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
