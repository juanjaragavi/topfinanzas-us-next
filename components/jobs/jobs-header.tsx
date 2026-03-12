import Image from "next/image";

interface JobsHeaderProps {
  /**
   * Optional translation hook slot — pass a function to enable Google Translate
   * integration in a future iteration. When omitted, falls back to the default
   * English string. No implementation is required now.
   *
   * @example
   * // Future usage with Google Translate API:
   * translateText={(key) => googleTranslate(key, userLocale)}
   */
  translateText?: (key: string) => string;
}

export default function JobsHeader({ translateText }: JobsHeaderProps) {
  const brandLabel = translateText
    ? translateText("opportunities")
    : "Opportunities";

  return (
    <header
      role="banner"
      className="bg-white border-b border-gray-100 py-3 px-4 sm:px-6"
    >
      <div className="flex items-center gap-3">
        <Image
          src="https://media.topfinanzas.com/images/favicon.png"
          alt="TopFinanzas"
          width={32}
          height={32}
          className="rounded"
          priority
        />
        <span className="text-[#1D4ED8] font-semibold text-lg tracking-tight">
          {brandLabel}
        </span>
      </div>
    </header>
  );
}
