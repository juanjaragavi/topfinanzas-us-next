import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Output configuration for standalone mode
  output: "standalone",
  // Asset prefix and base path for Vercel deployment
  assetPrefix: undefined,
  basePath: "",
  // Redirects for legacy/broken routes to prevent 404s and preserve SEO signals
  async redirects() {
    return [
      {
        source: "/uncategorized",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tarjetas",
        destination: "/financial-solutions",
        permanent: true,
      },
      {
        source: "/recomendador-de-tarjetas-de-credito-p1",
        destination: "/choose-the-perfect-card-for-you-1",
        permanent: true,
      },
    ];
  },
  // Add rewrites for static files - using simpler approach
  async rewrites() {
    return [
      {
        source: "/favicon.png",
        destination: "https://media.topfinanzas.com/images/favicon.png",
      },
    ];
  },
  // Add cache headers for static assets
  async headers() {
    return [
      {
        // Apply these headers to all static assets
        source:
          "/((?:fonts|images|media)/.*|favicon.png|apple-touch-icon.png|favicon.ico|site.webmanifest)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Apply to banner images
        source: "/images/banner-home(-mobile)?.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Priority",
            value: "high",
          },
        ],
      },
      {
        // Logo image caching
        source: "/images/logo-english.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Next.js image optimization cache
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Vary",
            value: "Accept",
          },
        ],
      },
      {
        // JavaScript and CSS assets
        source: "/_next/static/(css|js)/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Web manifest file - specific headers
        source: "/site.webmanifest",
        headers: [
          {
            key: "Content-Type",
            value: "application/manifest+json",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
      {
        // ads.txt file
        source: "/ads.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=UTF-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // Cache for 24 hours
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        // robots.txt file
        source: "/robots.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=UTF-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // Cache for 24 hours
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        // For all HTML pages
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  // Image optimization settings with improved caching
  images: {
    unoptimized: false,
    dangerouslyAllowSVG: true,
    // Using a permissive CSP instead of null (which is invalid)
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox; img-src 'self' https: data:;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.topfinanzas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "us.topfinanzas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "topfinanzas.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [
      16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year cache for improved performance
    // Remove deprecated domains configuration (already covered by remotePatterns)
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    optimizeCss: true,
    optimizePackageImports: ["next/font", "framer-motion", "lucide-react"],
  },
  // Add compression to improve loading speeds
  compress: true,
  poweredByHeader: false,
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
