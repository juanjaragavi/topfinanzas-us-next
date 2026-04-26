export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TopFinanzas US",
    url: "https://us.topfinanzas.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://us.topfinanzas.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateCreditCardSchema(card: { name: string; description: string; url: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreditCard",
    name: card.name,
    description: card.description,
    url: card.url,
    image: card.image,
    provider: {
      "@type": "Organization",
      name: "TopFinanzas US", 
      url: "https://us.topfinanzas.com"
    },
    offers: {
      "@type": "Offer",
      url: card.url,
    },
  };
}

export function generateArticleSchema(article: { title: string; description: string; url: string; image: string; datePublished: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    datePublished: article.datePublished,
    author: {
      "@type": "Organization",
      name: "TopFinanzas US",
      url: "https://us.topfinanzas.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TopFinanzas US",
      logo: {
        "@type": "ImageObject",
        url: "https://media.topfinanzas.com/images/logo-english.webp",
      },
    },
  };
}
