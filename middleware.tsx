import { NextRequest, NextResponse } from "next/server";
 
let locales = ['en', 'fr']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const { headers } = request
  const accept = headers.get('accept')
 
  // Get the first locale available
  return locales.find((locale) => accept?.includes(locale)) || locales[0]
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files in `public/`
  if (/((?!_next|_vercel|favicon.ico|.*\\.(png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|otf|eot|mp4|webm|mp3|wav|ogg)).*)/.test(pathname)) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}
