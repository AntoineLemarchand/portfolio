import { NextRequest, NextResponse } from "next/server";

let locales = ['en', 'fr'];

// Get the preferred locale based on the Accept-Language header
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Check if any preferred locale is available
  return locales.find((locale) => acceptLanguage.includes(locale)) || locales[0];
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and Next.js assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname === '/favicon.ico' ||
    /\.(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|otf|eot|mp4|webm|mp3|wav|ogg)$/.test(pathname)
  ) {
    return;
  }

  // If the request is for the root path, redirect to the preferred language
  if (pathname === '/') {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // Check if the pathname already contains a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to the preferred locale if no locale is found
  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

