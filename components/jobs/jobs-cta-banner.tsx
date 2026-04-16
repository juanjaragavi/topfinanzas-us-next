import Link from "next/link";

export interface JobsCtaBannerProps {
  badge?: string;
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  disclaimer?: string;
  themeColor: string;
  themeColorDark: string;
}

function isExternal(href: string): boolean {
  return /^https?:\/\//.test(href);
}

export default function JobsCtaBanner({
  badge,
  headline,
  body,
  ctaLabel,
  ctaHref,
  disclaimer,
  themeColor,
  themeColorDark,
}: JobsCtaBannerProps) {
  const external = isExternal(ctaHref);

  return (
    <div
      className="rounded-xl overflow-hidden my-6"
      style={{
        background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColorDark} 100%)`,
      }}
    >
      <div className="p-6 md:p-8 text-white">
        {badge && (
          <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 bg-white/20">
            {badge}
          </div>
        )}
        <h3
          className="text-xl md:text-2xl font-bold mb-3"
          style={{ color: "#FFFFFF" }}
        >
          {headline}
        </h3>
        <p className="text-white/90 mb-5 text-sm md:text-base">{body}</p>
        {external ? (
          <a
            href={ctaHref}
            className="inline-block bg-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:bg-gray-100 shadow-md text-sm md:text-base"
            style={{ color: themeColor }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel} →
          </a>
        ) : (
          <Link
            href={ctaHref}
            className="inline-block bg-white font-bold py-3 px-6 rounded-xl transition-all duration-200 hover:bg-gray-100 shadow-md text-sm md:text-base"
            style={{ color: themeColor }}
          >
            {ctaLabel} →
          </Link>
        )}
        {disclaimer && (
          <p className="text-white/60 text-xs mt-4">{disclaimer}</p>
        )}
      </div>
    </div>
  );
}
