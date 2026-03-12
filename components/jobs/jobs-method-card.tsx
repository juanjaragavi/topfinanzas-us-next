import Link from "next/link";

export interface JobMethodCardProps {
  /** Job platform/resource name */
  name: string;
  /** Short description */
  description: string;
  /** Trust signal badges */
  badges?: string[];
  /** Bullet-point features */
  features: string[];
  /** Primary CTA */
  cta: {
    label: string;
    href: string;
  };
  /** Optional secondary links */
  downloadLinks?: { label: string; href: string }[];
  /** Theme color for accents */
  themeColor: string;
  /** Emoji icon for the card header */
  icon?: string;
}

export default function JobMethodCard({
  name,
  description,
  badges,
  features,
  cta,
  downloadLinks,
  themeColor,
  icon,
}: JobMethodCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div
        className="px-6 py-4 text-white"
        style={{
          background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}dd 100%)`,
        }}
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-3xl">{icon}</span>}
          <div>
            <h3 className="text-xl font-bold">
              <Link href={cta.href} className="hover:underline text-white">
                {name}
              </Link>
            </h3>
            {badges && badges.length > 0 && (
              <div className="flex gap-2 mt-1">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-gray-700 mb-4">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white mt-0.5"
                style={{ backgroundColor: themeColor }}
              >
                ✓
              </span>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <Link
          href={cta.href}
          className="block w-full py-3 px-4 rounded-xl text-white font-semibold text-center transition-all duration-200 hover:opacity-90 shadow-md"
          style={{ backgroundColor: themeColor }}
        >
          {cta.label}
        </Link>

        {/* Download / secondary links */}
        {downloadLinks && downloadLinks.length > 0 && (
          <div className="flex justify-center gap-4 mt-3">
            {downloadLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium hover:underline"
                style={{ color: themeColor }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
