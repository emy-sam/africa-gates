/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLocalizedLink = (locale: string, href: string) => {
  return `/${locale}${href.startsWith('/') ? '' : '/'}${href}`;
};

type Context = {
  pathname?: string;
  cookieHeader?: string;
  acceptLanguageHeader?: string;
};

export function getLocaleFromPathname(
  context?: Context,
  toDefault = true
): string {
  const supportedLocales = ['en', 'fr', 'ar'];
  const { pathname, cookieHeader, acceptLanguageHeader } = context || {};

  // 1. Try from URL
  const urlLocale = getUrlLocale(pathname);
  if (supportedLocales.includes(urlLocale)) return urlLocale;

  // 2. Try from Cookie header (server) or document.cookie (client)
  const cookieLocale = getCookieLocale('locale', cookieHeader);
  if (supportedLocales.includes(cookieLocale)) return cookieLocale;

  // 3. Try Accept-Language header (server) or navigator.language (client)
  const preferredLocale = getPreferredLocale(acceptLanguageHeader);
  if (supportedLocales.includes(preferredLocale)) return preferredLocale;

  // 4. Default fallback
  if (!toDefault) return '';
  return 'en';
}

function getUrlLocale(pathname?: string): string {
  if (pathname) {
    return pathname.split('/')[1];
  }
  if (typeof window !== 'undefined') {
    // client-side
    return window.location.pathname.split('/')[1];
  }
  return '';
}
function getCookieLocale(name: string, cookieHeader?: string): string {
  if (typeof document !== 'undefined') {
    // client-side
    return (
      document.cookie
        .split('; ')
        .find((c) => c.startsWith(name + '='))
        ?.split('=')[1] ?? ''
    );
  }

  // server-side
  const cookies = cookieHeader?.split(';') ?? [];
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) return value;
  }
  return '';
}

function getPreferredLocale(acceptLanguageHeader?: string): string {
  if (typeof navigator !== 'undefined') {
    return navigator.language?.split('-')[0] ?? '';
  }

  const preferred = acceptLanguageHeader
    ?.split(',')
    .map((l) => l.split(';')[0].trim());
  return preferred?.[0]?.split('-')[0] ?? '';
}

/**
 * Recursively localizes an object by extracting the value at the specified locale
 */
export function localizeObject<T>(obj: any, locale: string): T {
  if (Array.isArray(obj)) {
    return obj.map((item) => localizeObject(item, locale)) as T;
  }

  if (
    obj &&
    typeof obj === 'object' &&
    'en' in obj &&
    'fr' in obj &&
    'ar' in obj
  ) {
    return obj[locale];
  }

  if (obj && typeof obj === 'object') {
    const result: any = {};
    for (const key in obj) {
      result[key] = localizeObject(obj[key], locale);
    }
    return result as T;
  }

  return obj as T;
}
