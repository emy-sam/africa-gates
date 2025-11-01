import { NextResponse, type NextRequest } from 'next/server';
import { getLocaleFromPathname } from './lib/utils';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    const locale = getLocaleFromPathname({
      pathname: request.nextUrl.pathname,
      cookieHeader: request.headers.get('cookie') ?? '',
      acceptLanguageHeader: request.headers.get('accept-language') ?? '',
    });
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
  }
  return;
  // console.log(pathname);
  // const pathnameHasLocale = locales.some(
  //   (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  // );

  // if (pathnameHasLocale) return;

  // // Redirect if there is no locale
  // const locale = getLocale(request);
  // request.nextUrl.pathname = `/${locale}${pathname}`;
  // // e.g. incoming request is /products
  // // The new URL is now /en-US/products
  // return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    '/',
  ],
};
