import { NextRequest, NextResponse } from "next/server";
import {
  RECOMMENDER_LOCK_COOKIE,
  parseLockFromRequestCookie,
} from "@/lib/navigation/recommender-lock";

const QUIZ_PATHS = ["/quiz", "/quiz-2"];
const SITE_BASE_URL = "https://us.topfinanzas.com";
const SUPPORTED_HREFLANGS = ["en-us", "en"];

function isRestrictedQuizPath(pathname: string): boolean {
  return QUIZ_PATHS.some(
    (basePath) => pathname === basePath || pathname.startsWith(`${basePath}/`),
  );
}

function buildHreflangHeader(pathname: string): string {
  const normalizedPath = pathname || "/";
  const absoluteUrl = new URL(normalizedPath, SITE_BASE_URL).toString();

  const entries = [
    `<${absoluteUrl}>; rel="canonical"`,
    ...SUPPORTED_HREFLANGS.map(
      (lang) => `<${absoluteUrl}>; rel="alternate"; hreflang="${lang}"`,
    ),
    `<${absoluteUrl}>; rel="alternate"; hreflang="x-default"`,
  ];

  return entries.join(", ");
}

export function middleware(request: NextRequest) {
  // Check if the request is for a static file
  const { pathname } = request.nextUrl;

  // Allow static files to pass through without any processing
  if (
    pathname.includes(".png") ||
    pathname.includes(".ico") ||
    pathname.includes(".webmanifest") ||
    pathname.includes("/fonts/") ||
    pathname.includes("/images/")
  ) {
    return NextResponse.next();
  }

  if (isRestrictedQuizPath(pathname)) {
    const lock = parseLockFromRequestCookie(
      request.cookies.get(RECOMMENDER_LOCK_COOKIE),
    );

    if (lock) {
      const targetUrl = request.nextUrl.clone();
      targetUrl.pathname = lock.pathname;
      targetUrl.search = lock.search ?? "";

      return NextResponse.redirect(targetUrl, 307);
    }
  }

  // For other requests, continue normally
  const response = NextResponse.next();
  const hreflangHeader = buildHreflangHeader(pathname);

  // Advertise locale variants for Google via HTTP Link headers
  response.headers.set("Link", hreflangHeader);

  return response;
}

export const config = {
  // Apply middleware to all routes, but exclude static resources
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|favicon.png|apple-touch-icon.png|site.webmanifest).*)",
  ],
};
