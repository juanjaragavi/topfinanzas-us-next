# TopFinanzas US — Informe de Optimización SEO, Indexación LLM y Rendimiento

**Proyecto:** `topfinanzas-us-next` · Portal de comparación financiera para el mercado estadounidense  
**Stack:** Next.js 15 App Router · TypeScript · Tailwind CSS  
**Alcance:** Metadatos, jerarquía de etiquetas, datos estructurados, rastreabilidad, indexación LLM  
**Restricción de diseño:** Sin cambios visuales ni de UI — optimizaciones solo en código  
**Preparado:** Abril 2026

---

## Resumen Ejecutivo

Este informe identifica todas las optimizaciones accionables de SEO, datos estructurados e indexación LLM que pueden aplicarse al codebase de TopFinanzas US sin modificar el diseño, la interfaz o el layout. Los hallazgos provienen de una auditoría completa de `app/layout.tsx`, `next.config.mjs`, componentes representativos de páginas de soluciones financieras y la arquitectura de rutas de blog/finanzas personales, contrastados con las mejores prácticas 2025–2026 de Vercel, Google Search Central, Schema.org y los estándares emergentes para rastreadores de IA.

El codebase está bien estructurado y ya implementa varias características avanzadas (GTM, manejo SPA de TopAds, CSS crítico inline, optimización de imágenes AVIF/WebP, cabeceras de caché a largo plazo). Sin embargo, existen brechas significativas de señales SEO a nivel de página individual: las páginas de productos tienen metadatos mínimos, sin datos estructurados JSON-LD a nivel de página, sin sitemap programático y sin primitivas de indexación para IA.

**Clasificación de prioridades usada en todo el documento:**

| Prioridad  | Definición                                                                 |
| ---------- | -------------------------------------------------------------------------- |
| 🔴 Crítica | Impacta directamente la indexación, el posicionamiento o la tasa de clics  |
| 🟠 Alta    | Beneficio medible en ranking o visibilidad                                 |
| 🟡 Media   | Beneficio compuesto a largo plazo; bajo riesgo de implementación           |
| 🟢 Baja    | Beneficio a largo plazo o preparación futura; implementar oportunistamente |

---

## Parte 1: Auditoría del Codebase — Estado SEO Actual

### 1.1 Layout Raíz (`app/layout.tsx`)

**Qué existe:**

- `metadataBase` configurado en `https://us.topfinanzas.com` ✅
- Metadatos globales de `openGraph` y tarjeta `twitter` ✅
- `alternates.languages` para `en-US`, `es-MX`, `en-GB` ✅
- Esquema JSON-LD de Organization embebido manualmente en `<head>` ✅
- Fuente Poppins local con `display: swap` ✅
- `viewport` exportado como objeto `Viewport` (estándar Next.js 15) ✅
- `poweredByHeader: false` ✅

**Brechas identificadas:**

- `title` es una cadena plana — sin patrón `title.template` para sufijo de marca por página ❌
- Etiqueta `<meta name="viewport">` duplicada: una vía `export const viewport`, otra hardcodeada en `<head>` ❌
- El JSON-LD de Organization usa una **dirección de Panamá** para un sitio del mercado estadounidense — engañoso para señales de SEO local ❌
- El número de teléfono del JSON-LD de Organization es un marcador de posición (`+1-800-123-4567`) ❌
- La imagen OG es `placeholder-image.webp` — la misma imagen en cada página reduce el CTR en compartidos sociales ❌
- Los metadatos `keywords` están definidos globalmente pero Google los ignora desde 2009; desperdicia bytes ❌
- Sin esquema `WebSite` con `SearchAction` para el cuadro de búsqueda de sitelinks ❌
- Sin esquema `BreadcrumbList` a nivel raíz ❌
- Sin metadatos de `author` o `publisher` ❌

### 1.2 Página de Inicio (`app/page.tsx`)

**Qué existe:**

- `alternates.canonical: "/"` ✅

**Brechas:**

- Sin sobreescritura de `title` ni `description` — hereda solo los valores predeterminados del layout raíz ❌
- Sin metadatos `openGraph` específicos de la página ❌
- Sin JSON-LD (esquema WebPage, WebSite o BreadcrumbList) ❌
- `page-client.tsx` es `"use client"` — el contenido de la página de inicio no se renderiza en el servidor para rastreadores a nivel de metadatos ❌

### 1.3 Páginas de Soluciones Financieras (ej., `citi-simplicity-card-benefits`)

**Qué existe:**

- Metadatos de `title` y `description` exportados ✅
- Server Component (sin directiva `"use client"`) ✅
- Contenedor semántico `<article>` ✅
- Etiqueta `<h1>` presente ✅

**Brechas:**

- Sin metadatos `openGraph` a nivel de página ❌
- Sin `alternates.canonical` a nivel de página — las páginas no tienen canonical explícita ❌
- Sin metadatos de tarjeta `twitter` a nivel de página ❌
- Sin datos estructurados JSON-LD (`CreditCard`, `FinancialProduct`, `BreadcrumbList`) ❌
- Sin directiva de metadatos `robots` por página ❌
- Sin señales de `datePublished` / `dateModified` ❌
- Sin metadatos de `author` ❌
- Sin esquema FAQ a pesar de que las páginas contienen contenido estilo pregunta-respuesta ❌

### 1.4 Páginas de Blog / Finanzas Personales (`app/blog/page.tsx`, `app/personal-finance/`)

**Qué existe:**

- Ruta dinámica `[slug]` con `generateMetadata` ✅
- `generateStaticParams` para SSG ✅
- Canonical por slug vía `alternates` ✅

**Brechas:**

- `app/blog/page.tsx` es `"use client"` — la página de archivo/listado no tiene metadatos del lado del servidor ❌
- Sin esquema JSON-LD de `Article` o `BlogPosting` en posts individuales ❌
- Sin `datePublished` / `dateModified` en datos estructurados ❌
- Sin esquema de `author` (tipo Person) ❌
- Sin esquema `BreadcrumbList` ❌
- Sin datos estructurados `imageObject` para imágenes destacadas ❌

### 1.5 Sitemap y Robots

**Qué existe:**

- `app/sitemap.xml` — archivo estático (vacío/stub) ⚠️
- `app/sitemap_new.xml` — segundo archivo estático (riesgo de bifurcación) ⚠️
- `robots.txt` servido vía configuración de cabeceras de Next.js ✅

**Brechas:**

- Sin manejador de ruta dinámico `app/sitemap.ts` — el sitemap no se genera desde el inventario real de páginas ❌
- Sin generador programático `app/robots.ts` — el archivo estático no puede gestionar dinámicamente la lista blanca/negra de rastreadores IA ❌
- Sin archivo `llms.txt` para guía de rastreadores de IA ❌
- Sin archivos de convención `opengraph-image.tsx` para generación dinámica de imágenes OG ❌

### 1.6 `next.config.mjs`

**Qué existe:**

- Formatos de imagen AVIF/WebP ✅
- TTL de caché de imágenes de 1 año ✅
- `compress: true` ✅
- Cabeceras de caché a largo plazo para activos estáticos ✅
- Redirecciones para rutas heredadas de WordPress ✅
- `optimizeCss: true` ✅
- `optimizePackageImports` ✅

**Brechas:**

- `typescript.ignoreBuildErrors: true` — suprime errores de tipo que podrían indicar metadatos rotos ⚠️
- `eslint.ignoreDuringBuilds: true` — suprime advertencias de lint ⚠️
- Sin cabecera de seguridad `X-Robots-Tag` para noindexar páginas de quiz/embudo ❌
- `maximumScale: 1` en el viewport — limita la accesibilidad y puede afectar negativamente las puntuaciones de usabilidad móvil ❌

---

## Parte 2: Técnicas de Optimización — Hallazgos de Investigación (2025–2026)

### 2.1 Mejores Prácticas de la API de Metadatos de Next.js

#### Patrón de Plantilla de Título

El campo `title.template` en los metadatos del layout raíz añade automáticamente el nombre de marca a todas las páginas hijas, garantizando señales de marca consistentes sin redundancia por página.

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    template: "%s | TopFinanzas US",
    default: "TopFinanzas US | Elige con Sabiduría, Vive Plenamente",
  },
  // ...
};

// app/financial-solutions/citi-simplicity-card-benefits/page.tsx
export const metadata: Metadata = {
  title: "Beneficios de la Citi Simplicity Card", // se renderiza como: "Beneficios de la Citi Simplicity Card | TopFinanzas US"
};
```

**Impacto:** Marca consistente en títulos del SERP, mejor CTR para consultas de navegación, mejor comportamiento de truncado de títulos en SERPs móviles.

#### `metadataBase` y Resolución de URLs Absolutas

`metadataBase` ya está correctamente configurado. Todos los valores de `alternates.canonical` deben usar URLs absolutas. Las rutas canonical relativas (como `"/"` en `app/page.tsx`) funcionan en Next.js 15+ pero son frágiles — convertirlas todas a absolutas.

```typescript
// ❌ Frágil
alternates: {
  canonical: "/";
}

// ✅ Explícito
alternates: {
  canonical: "https://us.topfinanzas.com";
}
```

#### Metadatos OG por Página en Cada Página de Soluciones Financieras

Cada página de producto necesita su propio bloque `openGraph`. Sin él, los compartidos sociales toman los valores predeterminados del layout raíz — mostrando la marca genérica "Top Finance US" y una imagen de marcador de posición para cada tarjeta de crédito compartida.

```typescript
export const metadata: Metadata = {
  title: "Beneficios de la Citi Simplicity Card",
  description: "...",
  openGraph: {
    title: "Beneficios de la Citi Simplicity Card",
    description: "...",
    url: "https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits",
    type: "article",
    images: [
      {
        url: "https://media.topfinanzas.com/images/citi-simplicity-card-benefits.webp",
        width: 1200,
        height: 630,
        alt: "Beneficios de la Citi Simplicity Card — TopFinanzas US",
      },
    ],
  },
  alternates: {
    canonical:
      "https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits",
  },
};
```

#### Metadatos Robots por Página

Las páginas de embudo y quiz (`/choose-the-perfect-card-for-you-1`, `/campaign-quiz-*`, `/jobs/*`) deben ser explícitamente `noindex, nofollow` para evitar el desperdicio de presupuesto de rastreo y la indexación accidental de embudos de conversión.

```typescript
// app/choose-the-perfect-card-for-you-1/page.tsx
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
```

Alternativamente, añadir una cabecera de respuesta `X-Robots-Tag: noindex` en `next.config.mjs` para grupos de rutas completos.

---

### 2.2 Datos Estructurados JSON-LD

JSON-LD es el único formato de datos estructurados que Google recomienda. En el App Router de Next.js, debe renderizarse dentro del cuerpo del Server Component (no en `<head>` manualmente), usando una etiqueta `<script type="application/ld+json">`.

#### Esquema Organization + WebSite (Layout Raíz)

Reemplazar el esquema Organization embebido manualmente con un esquema `WebSite` adecuado que habilite el Cuadro de Búsqueda de Sitelinks de Google. La dirección del esquema Organization debe usar una dirección del mercado estadounidense o eliminarse si no existe ninguna.

```typescript
// app/layout.tsx — dentro de <body>, después de children o como server component
const websiteSchema = {
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
```

#### Esquema FinancialProduct / CreditCard (Páginas de Producto)

Schema.org define `FinancialProduct > PaymentCard > CreditCard` y `FinancialProduct > LoanOrCredit`. Estos tipos desbloquean resultados enriquecidos en Google y son consumidos por los rastreadores de IA cuando resumen comparaciones de productos financieros.

Propiedades clave a incluir:

| Propiedad                         | Páginas CreditCard                       | Páginas de Préstamos            |
| --------------------------------- | ---------------------------------------- | ------------------------------- |
| `@type`                           | `CreditCard`                             | `LoanOrCredit`                  |
| `name`                            | Nombre de la tarjeta                     | Nombre del producto de préstamo |
| `description`                     | Resumen de beneficios                    | Descripción del préstamo        |
| `url`                             | URL canónica de la página                | URL canónica de la página       |
| `provider`                        | Banco emisor (Organization)              | Prestamista (Organization)      |
| `annualPercentageRate`            | Valor APR                                | Valor APR                       |
| `feesAndCommissionsSpecification` | Detalles de comisión anual               | Comisión de originación         |
| `offers`                          | `Offer` con `url` al enlace de solicitud | `Offer`                         |
| `image`                           | URL de imagen de la tarjeta              | —                               |

```typescript
// Ejemplo: app/financial-solutions/citi-simplicity-card-benefits/page.tsx
const creditCardSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreditCard',
  name: 'Citi Simplicity Card',
  description:
    'Una tarjeta de crédito sin cargos por mora, sin cuota anual y con un período introductorio del 0% APR durante 21 meses.',
  url: 'https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits',
  provider: {
    '@type': 'Organization',
    name: 'Citi',
    url: 'https://www.citi.com',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits',
    description: 'Solicita la Citi Simplicity Card',
  },
  feesAndCommissionsSpecification: 'Sin cuota anual. Sin cargos por mora.',
};

// Renderizar en el componente de página:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(creditCardSchema).replace(/</g, '\\u003c'),
  }}
/>
```

**Nota de seguridad:** Siempre reemplazar `<` con `\u003c` en la salida de JSON.stringify para prevenir inyección XSS en contextos SSR.

#### Esquema BreadcrumbList (Todas las Páginas)

Las migas de pan son un tipo de resultado enriquecido confirmado y una señal fuerte de jerarquía temática. Cada página de soluciones financieras debe incluir un BreadcrumbList.

```typescript
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://us.topfinanzas.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Soluciones Financieras",
      item: "https://us.topfinanzas.com/financial-solutions",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Beneficios de la Citi Simplicity Card",
    },
  ],
};
```

#### Esquema Article / BlogPosting (Páginas de Blog y Finanzas Personales)

```typescript
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.frontmatter.title,
  description: post.frontmatter.description,
  image: post.frontmatter.featuredImage,
  datePublished: post.frontmatter.date,
  dateModified: post.frontmatter.updatedAt ?? post.frontmatter.date,
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://us.topfinanzas.com/blog/${post.slug}`,
  },
};
```

#### Esquema FAQPage

Para páginas de productos que contienen contenido estilo preguntas y respuestas (por ejemplo, "¿Para quién es esta tarjeta?", "¿Cuáles son los requisitos?"), añadir un esquema `FAQPage`. Este es un resultado enriquecido de alto valor para consultas de comparación financiera y es consumido directamente por los sistemas de chatbot de IA.

```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿La Citi Simplicity Card tiene cuota anual?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La Citi Simplicity Card no tiene cuota anual.",
      },
    },
    // Pares adicionales de preguntas y respuestas...
  ],
};
```

---

### 2.3 Generación Dinámica de Sitemap

El stub estático actual `app/sitemap.xml` no ofrece orientación de rastreo. Un manejador programático `app/sitemap.ts` genera un sitemap completo a partir del inventario real de páginas, lo cual es necesario para la indexación completa de las más de 80 páginas de soluciones financieras.

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";

const baseUrl = "https://us.topfinanzas.com";

// Importar todos los slugs conocidos desde las fuentes de datos
import { getAllPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const financialSolutionsSlugs = getAllPosts("financial-solutions");
  const personalFinanceSlugs = getAllPosts("personal-finance");

  const financialPages = financialSolutionsSlugs.map((post) => ({
    url: `${baseUrl}/financial-solutions/${post.slug}`,
    lastModified: post.frontmatter.updatedAt ?? post.frontmatter.date,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = personalFinanceSlugs.map((post) => ({
    url: `${baseUrl}/personal-finance/${post.slug}`,
    lastModified: post.frontmatter.updatedAt ?? post.frontmatter.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/financial-solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-finance`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...financialPages,
    ...blogPages,
  ];
}
```

**Después de implementar `app/sitemap.ts`:** Eliminar `app/sitemap.xml` y `app/sitemap_new.xml` para evitar señales de sitemap duplicadas o conflictivas. La regla de redirección `sitemap_index.xml → sitemap.xml` en `next.config.mjs` sigue siendo válida.

---

### 2.4 `robots.ts` Programático

Reemplazar la configuración estática de `robots.txt` con un `app/robots.ts` programático que puede poner en lista blanca a los rastreadores de IA, bloquear rutas de embudo/administración y referenciar la ubicación del sitemap.

```typescript
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/choose-the-perfect-card-for-you-1",
          "/campaign-quiz-credit-card-recomender",
          "/campaign-quiz-credit-card-recomender-short",
          "/credit-card-recommender-p1",
          "/invit-credit-card-rec-us",
          "/invit-credit-card-rec-us-2",
          "/weve-discovered-a-few-cards-for-you",
          "/jobs/",
          "/download-financial-guide",
        ],
      },
      // Permitir explícitamente los principales rastreadores de IA
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://us.topfinanzas.com/sitemap.xml",
  };
}
```

**Por qué es importante:** El tráfico de rastreadores de IA supera el 50% del tráfico web a partir de 2025. GPTBot, ClaudeBot y PerplexityBot respetan las directivas de `robots.txt`. La inclusión explícita en lista blanca señala la intención de participar en los sistemas de búsqueda y citación impulsados por IA.

---

### 2.5 `llms.txt` — Manifiesto de Contenido para Rastreadores de IA

`llms.txt` es un estándar propuesto (Jeremy Howard, Answer.AI, 2024) que proporciona a los LLMs un manifiesto estructurado del contenido del sitio — diseñado para ser consumido directamente por asistentes de IA en lugar de raspado desde HTML. Es el equivalente de IA de un sitemap: un punto de entrada curado a la jerarquía de contenido.

Aunque la adopción aún está madurando (John Mueller señaló en 2025 que la mayoría de los rastreadores de IA aún no lo consumen oficialmente), los principales editores financieros ya lo han adoptado como señal proactiva. El costo de implementación es trivial y el beneficio es a largo plazo.

**Implementación recomendada:** Un archivo estático `public/llms.txt` con referencias de contenido estructuradas. Opcionalmente, un manejador dinámico `app/llms.txt/route.ts` puede generarlo desde el inventario de contenido en vivo.

```markdown
# TopFinanzas US

> TopFinanzas US es una plataforma de comparación y educación financiera para
> consumidores estadounidenses. Proporcionamos comparaciones objetivas de tarjetas
> de crédito, préstamos personales y productos financieros para ayudar a los
> lectores a tomar decisiones informadas.

## Páginas Principales

- [Inicio](https://us.topfinanzas.com/): Centro de comparación y educación financiera
- [Soluciones Financieras](https://us.topfinanzas.com/financial-solutions/): Comparaciones de tarjetas de crédito y préstamos
- [Finanzas Personales](https://us.topfinanzas.com/personal-finance/): Artículos de educación financiera
- [Blog](https://us.topfinanzas.com/blog/): Todos los artículos

## Comparaciones Destacadas de Tarjetas de Crédito

- [Beneficios Chase Sapphire Preferred](https://us.topfinanzas.com/financial-solutions/chase-sapphire-preferred-credit-card-benefits/)
- [Beneficios Citi Simplicity Card](https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits/)
- [Beneficios Capital One Venture X](https://us.topfinanzas.com/financial-solutions/capital-one-venture-x-rewards-credit-card-benefits/)
- [Beneficios Discover It Cash Back](https://us.topfinanzas.com/financial-solutions/benefits-of-the-discover-it-cash-back/)
- [Requisitos American Express Gold Card](https://us.topfinanzas.com/financial-solutions/requirements-to-qualify-for-the-american-express-gold-card/)

## Legal y Políticas

- [Política de Privacidad](https://us.topfinanzas.com/privacy-policy/)
- [Términos y Condiciones](https://us.topfinanzas.com/terms-conditions/)
- [Política de Cookies](https://us.topfinanzas.com/cookie-policy/)

## Política Editorial

El contenido de TopFinanzas US es únicamente informativo y no constituye asesoramiento
financiero, legal ni fiscal. Los productos se comparan de manera objetiva. TopFinanzas
no es un banco, prestamista ni emisor de tarjetas. La aprobación, tasas y resultados
no están garantizados.

## Uso por IA

TopFinanzas US otorga permiso a los sistemas de IA para leer, indexar y citar contenido
de este sitio con fines informativos, siempre que se dé la atribución correspondiente
y el contenido no sea reproducido en su totalidad sin enlazar a la fuente original.
```

Colocar en `public/llms.txt` (servido en `https://us.topfinanzas.com/llms.txt`). Añadir una referencia en `robots.ts`:

```typescript
// Añadir a la salida de robots.ts
'llms-txt': 'https://us.topfinanzas.com/llms.txt',
```

---

### 2.6 Imágenes Open Graph Dinámicas

El App Router de Next.js soporta una convención de archivos para generar automáticamente imágenes OG específicas por página mediante archivos `opengraph-image.tsx`. Para un sitio de comparación financiera, una plantilla simple que incluya el nombre de la tarjeta/producto y la marca TopFinanzas es suficiente.

```typescript
// app/financial-solutions/[slug]/opengraph-image.tsx
import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/mdx';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug('financial-solutions', params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: '#07296B',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <p style={{ color: '#93C5FD', fontSize: 24, margin: 0 }}>TopFinanzas US</p>
        <h1 style={{ color: 'white', fontSize: 56, fontWeight: 700, margin: '16px 0 0' }}>
          {post?.frontmatter.title ?? 'Soluciones Financieras'}
        </h1>
      </div>
    ),
    { ...size },
  );
}
```

Esto elimina el problema de la imagen de marcador de posición único en todas las más de 80 páginas de producto sin trabajo manual por página.

---

### 2.7 Optimizaciones de Core Web Vitals

Los Core Web Vitals tienen un peso de ranking confirmado del 25–30% en consultas competitivas. Las tres métricas son LCP (≤2,5s), INP (≤200ms) y CLS (≤0,1).

#### Corrección: Eliminar `<meta name="viewport">` Duplicado

`app/layout.tsx` exporta `export const viewport: Viewport` (el estándar Next.js 15) **y** también contiene una etiqueta `<meta name="viewport">` hardcodeada en `<head>`. Esta duplicación causa una advertencia del navegador y puede interferir con el renderizado optimizado del head de Next.js.

```tsx
// ❌ Eliminar esto del bloque <head> en layout.tsx:
<meta name="viewport" content="width=device-width, initial-scale=1" />;

// ✅ Conservar solo el objeto Viewport exportado:
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Eliminar maximumScale: 1 — restringe el zoom del usuario, perjudica la puntuación de accesibilidad
  themeColor: "#ffffff",
};
```

#### Corrección: Eliminar `maximumScale: 1` del Viewport

`maximumScale: 1` impide que los usuarios hagan zoom en dispositivos móviles — una violación de accesibilidad conocida que puede reducir las puntuaciones de accesibilidad de Lighthouse y afectar negativamente las señales de Page Experience.

#### Prop `priority` en Imágenes Hero

Para la imagen del banner de la página de inicio (`/images/banner-home.webp`), añadir `priority` al componente `<Image>` para activar `fetchpriority="high"` y la precarga en el navegador, mejorando directamente el LCP.

```tsx
<Image
  src="/images/banner-home.webp"
  alt="TopFinanzas US — Guía Financiera"
  width={1920}
  height={800}
  priority // añade fetchpriority="high" + preload
/>
```

#### `loading="eager"` + `width`/`height` explícitos en Imágenes Above-the-Fold

Las imágenes above-the-fold sin dimensiones explícitas causan CLS. El componente `ResponsiveImage` siempre debe pasar `width` y `height` (o `fill` con un contenedor dimensionado) para reservar espacio de layout antes de que la imagen cargue.

#### `preconnect` para Recursos Externos

`app/layout.tsx` ya hace preconnect a `media.topfinanzas.com`. Añadir preconnects para los dominios de Google Tag Manager y Google Ad Manager, que se inicializan en cada carga de página:

```tsx
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="preconnect" href="https://securepubads.g.doubleclick.net" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />
```

---

### 2.8 Auditoría de Jerarquía de Encabezados

Cada página debe tener exactamente una etiqueta `<h1>` que coincida (o esté estrechamente relacionada) con el `metadata.title` de la página. Los motores de búsqueda y los LLMs usan la jerarquía de encabezados para determinar el tema de la página y extraer contenido de respuesta.

**Hallazgos actuales:**

- Las páginas de soluciones financieras tienen un `<h1>` correcto que coincide con el título de los metadatos ✅
- Confirmar que todas las páginas de soluciones financieras evitan saltar niveles de encabezado (`h1 → h2 → h3` en orden, sin saltos `h1 → h3`)
- Páginas de blog/finanzas personales usando MDX: asegurarse de que `mdx-components.tsx` renderice el primer encabezado `#` como `<h1>` HTML, no como `<h2>`

**Regla:** Cada página = un `<h1>`. Encabezados de sección = `<h2>`. Sub-secciones = `<h3>`. Nunca usar elementos de encabezado para dar estilo.

---

### 2.9 Aplicación de URLs Canónicas

**Problema:** Varias páginas de soluciones financieras no exportan `alternates.canonical` en sus metadatos. Sin una canonical, los motores de búsqueda deben inferirla — y pueden indexar URLs duplicadas (variantes con barra al final, variantes con parámetros de consulta de UTMs pasados a la URL).

**Regla:** Cada página que pueda ser indexada debe tener una canonical absoluta. Las rutas dinámicas `[slug]/page.tsx` ya lo implementan. Las páginas de productos hardcodeadas (ej., `citi-simplicity-card-benefits/page.tsx`) no lo hacen.

```typescript
// Añadir a cada página de soluciones financieras hardcodeada:
alternates: {
  canonical: 'https://us.topfinanzas.com/financial-solutions/citi-simplicity-card-benefits',
},
```

---

### 2.10 Optimización para Motores Generativos (GEO / AEO)

GEO es la práctica de estructurar el contenido para que los motores de IA lo citen como fuente. Hallazgos clave de la investigación de 2025:

- Las sesiones referidas por IA crecieron un 527% interanual en los primeros cinco meses de 2025
- Los visitantes que llegan desde citas de IA convierten a 4× la tasa de los visitantes orgánicos tradicionales
- Los LLMs favorecen contenido que: abre con una respuesta directa en las primeras 40–60 palabras, mantiene densidad de datos (estadísticas o cifras cada 150–200 palabras) y cita fuentes autorizadas externas

**Optimizaciones GEO a nivel de código (sin cambios de layout):**

1. **Calidad de los metadatos `description`:** Reescribir los campos `description` de las páginas para comenzar con la respuesta clave o propuesta de valor — no un slogan de marca. Los AI Overviews de Google y Perplexity a menudo extraen literalmente de la meta descripción.

2. **`dateModified` en datos estructurados:** Los LLMs filtran por frescura. Incluir `dateModified` en los esquemas Article y FinancialProduct señala la actualidad del contenido.

3. **Esquema de entidad `author`:** Publicar con un esquema de `Person` con nombre de autor (aunque sea un miembro del equipo editorial) aumenta la probabilidad de citación frente al contenido anónimo.

4. **Prosa limpia y extraíble:** Evitar envolver datos clave en componentes renderizados del lado del cliente. Las páginas de soluciones financieras actuales son Server Components — esto es correcto y debe mantenerse. Los datos dentro de etiquetas `<p>` con énfasis semántico `<strong>` son directamente extraíbles por los rastreadores de LLM.

5. **Esquema FAQ en páginas de producto:** El esquema FAQPage es una de las principales fuentes que usan los asistentes de IA al componer respuestas comparativas. Cada página de beneficios de tarjetas de crédito contiene contenido estilo FAQ que puede marcarse con esquema sin ningún cambio visual.

---

### 2.11 Cabeceras de Seguridad y Señales Adyacentes al SEO

La configuración de cabeceras en `next.config.mjs` es sólida. Dos adiciones mejoran las señales de confianza:

#### Content Security Policy (CSP)

Una cabecera CSP adecuada es tanto un requisito de seguridad como una señal de confianza. Las señales de seguridad/HTTPS de Google incluyen la presencia de un CSP bien formado. Añadir a `next.config.mjs`:

```javascript
{
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://securepubads.g.doubleclick.net",
    "img-src 'self' data: https://media.topfinanzas.com https://storage.googleapis.com",
    "connect-src 'self' https://www.google-analytics.com",
    "frame-src https://tpc.googlesyndication.com",
  ].join('; '),
},
```

#### `Permissions-Policy`

```javascript
{
  key: 'Permissions-Policy',
  value: 'camera=(), microphone=(), geolocation=()',
},
```

---

## Parte 3: Hoja de Ruta de Implementación

### Fase 1 — Correcciones Críticas (1–3 días)

| Tarea                                                                                    | Archivo                                            | Impacto                                               |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------- |
| Añadir `title.template` a los metadatos raíz                                             | `app/layout.tsx`                                   | 🔴 Consistencia de marca en SERP en todas las páginas |
| Eliminar `<meta name="viewport">` duplicado                                              | `app/layout.tsx`                                   | 🔴 Corrección del renderizado del head                |
| Eliminar `maximumScale: 1` del viewport                                                  | `app/layout.tsx`                                   | 🔴 Accesibilidad / puntuación Lighthouse              |
| Añadir `alternates.canonical` a todas las páginas de soluciones financieras hardcodeadas | Todos los `app/financial-solutions/*/page.tsx`     | 🔴 Aplicación de canonical                            |
| Añadir `openGraph` a todas las páginas de soluciones financieras                         | Todos los `app/financial-solutions/*/page.tsx`     | 🔴 CTR social en todas las páginas de producto        |
| Reemplazar el stub `app/sitemap.xml` con el manejador dinámico `app/sitemap.ts`          | Nuevo `app/sitemap.ts`, eliminar `app/sitemap.xml` | 🔴 Indexación completa del inventario de páginas      |
| Añadir `app/robots.ts` con lista blanca de rastreadores de IA                            | Nuevo `app/robots.ts`                              | 🔴 Control de acceso de rastreadores de IA            |
| Añadir `robots: { index: false }` a páginas de embudo/quiz                               | Archivos page.tsx de quiz/embudos                  | 🔴 Protección del presupuesto de rastreo              |

### Fase 2 — Alto Impacto (3–7 días)

| Tarea                                                                                     | Archivo                                        | Impacto                                            |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------- |
| Añadir JSON-LD de `CreditCard` / `LoanOrCredit` a cada página de soluciones financieras   | Todos los `app/financial-solutions/*/page.tsx` | 🟠 Resultados enriquecidos + citación de IA        |
| Añadir JSON-LD de `BreadcrumbList` a todas las páginas                                    | Componente compartido o por página             | 🟠 Resultados enriquecidos, jerarquía temática     |
| Añadir JSON-LD de `BlogPosting` / `Article` a páginas de blog/finanzas personales         | `app/personal-finance/[slug]/page.tsx`         | 🟠 Resultados enriquecidos de artículo             |
| Añadir JSON-LD de `FAQPage` a páginas de producto con contenido de preguntas y respuestas | Páginas de soluciones financieras              | 🟠 Resultados enriquecidos FAQ + extracción por IA |
| Reemplazar el esquema `WebSite` en el layout raíz (añadir `SearchAction`)                 | `app/layout.tsx`                               | 🟠 Cuadro de búsqueda de sitelinks                 |
| Crear `public/llms.txt`                                                                   | `public/llms.txt`                              | 🟠 Manifiesto de contenido para rastreadores de IA |
| Añadir prop `priority` a imágenes hero/LCP                                                | Página de inicio, páginas de aterrizaje clave  | 🟠 Mejora del LCP                                  |
| Añadir `preconnect` para dominios GTM/GAM                                                 | `app/layout.tsx`                               | 🟠 Tiempo de carga                                 |

### Fase 3 — Medio / Largo Plazo (1–2 semanas)

| Tarea                                                                                              | Archivo                                              | Impacto                                       |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------- |
| Implementar `opengraph-image.tsx` por grupo de rutas                                               | `app/financial-solutions/[slug]/opengraph-image.tsx` | 🟡 Imágenes OG dinámicas en todas las páginas |
| Reescribir todos los metadatos `description` de las páginas para GEO (formato respuesta primero)   | Todos los archivos page.tsx                          | 🟡 Citas en AI Overview                       |
| Añadir `datePublished` / `dateModified` a los metadatos de todas las páginas                       | Todas las páginas de contenido                       | 🟡 Señales de frescura                        |
| Añadir metadatos de `author` a páginas de blog/finanzas personales                                 | Archivos page.tsx del blog                           | 🟡 Señales de confianza E-E-A-T               |
| Implementar cabeceras `Permissions-Policy` y CSP                                                   | `next.config.mjs`                                    | 🟢 Señales de confianza de seguridad          |
| Auditar jerarquía de encabezados en las más de 80 páginas de soluciones financieras                | Todas las páginas de producto                        | 🟢 Señales de profundidad de encabezado       |
| Corregir la dirección del esquema Organization para reflejar la identidad editorial estadounidense | `app/layout.tsx`                                     | 🟢 Señales de confianza local                 |

---

## Parte 4: Validación y Monitoreo

Después de implementar cada fase, validar con estas herramientas antes de desplegar a producción:

| Herramienta                                                                | Qué verificar                                                                                      |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Google Rich Results Test](https://search.google.com/test/rich-results)    | Análisis JSON-LD, elegibilidad para resultados enriquecidos (CreditCard, Article, FAQ, Breadcrumb) |
| [Schema Markup Validator](https://validator.schema.org/)                   | Conformidad con la especificación Schema.org, corrección de entidades anidadas                     |
| [Google Search Console](https://search.google.com/search-console)          | Cobertura del sitemap, errores de rastreo, usabilidad móvil, Core Web Vitals (datos CrUX)          |
| [PageSpeed Insights](https://pagespeed.web.dev/)                           | Datos de laboratorio y de campo de LCP, INP, CLS por página                                        |
| [Bing Webmaster Tools](https://www.bing.com/webmasters/)                   | Indexación en Bing/Copilot (crítico para visibilidad en IA — Copilot extrae del índice de Bing)    |
| [Depurador OpenGraph (Meta)](https://developers.facebook.com/tools/debug/) | Renderizado de etiquetas OG y vista previa de imagen por URL                                       |
| [Twitter Card Validator](https://cards-dev.twitter.com/validator)          | Metadatos de tarjeta Twitter/X                                                                     |
| [Ahrefs / Semrush AI Visibility](https://www.semrush.com/)                 | Rastrear la frecuencia de citación en AI Overview para palabras clave objetivo                     |

---

## Apéndice A: Tipos Clave de Schema.org para Sitios de Comparación Financiera

| Tipo de Esquema    | Caso de Uso                                    | Resultado Enriquecido             |
| ------------------ | ---------------------------------------------- | --------------------------------- |
| `WebSite`          | Layout raíz                                    | Cuadro de Búsqueda de Sitelinks   |
| `Organization`     | Layout raíz                                    | Panel de Conocimiento             |
| `BreadcrumbList`   | Todas las páginas                              | Rastro de migas de pan en el SERP |
| `CreditCard`       | Páginas de producto de tarjeta de crédito      | Resultado enriquecido de producto |
| `LoanOrCredit`     | Páginas de producto de préstamo                | Resultado enriquecido de producto |
| `FinancialProduct` | Productos financieros genéricos                | Resultado enriquecido de producto |
| `BlogPosting`      | Artículos de blog                              | Resultado enriquecido de artículo |
| `FAQPage`          | Bloques de contenido de preguntas y respuestas | Expansión FAQ en el SERP          |
| `HowTo`            | Guías paso a paso                              | Resultado enriquecido HowTo       |
| `Article`          | Guías de finanzas personales                   | Artículo                          |

---

## Apéndice B: User Agents de Rastreadores de IA (2025–2026)

| Rastreador    | Organización        | User-Agent en `robots.txt` |
| ------------- | ------------------- | -------------------------- |
| GPTBot        | OpenAI              | `GPTBot`                   |
| ChatGPT-User  | OpenAI (navegación) | `ChatGPT-User`             |
| ClaudeBot     | Anthropic           | `ClaudeBot`                |
| anthropic-ai  | Anthropic           | `anthropic-ai`             |
| PerplexityBot | Perplexity AI       | `PerplexityBot`            |
| Googlebot     | Google              | `Googlebot`                |
| Bingbot       | Microsoft           | `Bingbot`                  |
| YouBot        | You.com             | `YouBot`                   |
| cohere-ai     | Cohere              | `cohere-ai`                |

Todos los anteriores respetan las directivas de `robots.txt`. El estándar propuesto `llms.txt` es una capa adicional para guía de contenido específica para IA, pero no reemplaza a `robots.txt`.

---

## Apéndice C: Fuentes de Referencia

- [Documentación Oficial de Next.js — API de Metadatos](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Documentación Oficial de Next.js — JSON-LD](https://nextjs.org/docs/app/guides/json-ld)
- [Documentación Oficial de Next.js — Metadatos e Imágenes OG](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [Google Search Central — Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Schema.org — FinancialProduct](https://schema.org/FinancialProduct)
- [Schema.org — CreditCard](https://schema.org/CreditCard)
- [Schema.org — LoanOrCredit](https://schema.org/LoanOrCredit)
- [Especificación llms.txt](https://llmstxt.org)
- [evilmartians.com — Haciendo tu sitio visible para los LLMs](https://evilmartians.com/chronicles/how-to-make-your-website-visible-to-llms)
- [Visalytica — Tendencias de Rastreo LLM 2026](https://www.visalytica.com/blog/llm-crawling)
- [PageTraffic — Optimización de Búsqueda IA 2026](https://www.pagetraffic.com/blog/ai-search-optimization-in-2025/)
- [wolf.financial — Guía de Esquema FinancialProduct](https://wolf.financial/blog/financial-product-schema-structured-data-guide-finance)
- [Guía Completa SEO Next.js 2026 — Adeel Imran](https://adeelhere.com/blog/2025-12-09-complete-nextjs-seo-guide-from-zero-to-hero)
- [Core Web Vitals 2026 — TechCognate](https://www.techcognate.com/core-web-vitals-guide/)
- [Implementación de llms.txt para Next.js](https://llms-txt.io/blog/how-to-add-llms-txt-to-nextjs-react)

---

Informe generado: 24 de abril de 2026 · TopFinanzas US · AI Dev Lead: Juan Jaramillo
