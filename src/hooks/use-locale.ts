import { getLocalizedLink as createLink } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
const supportedLocales = ['en', 'fr', 'ar'];
export const useLocale = () => {
  const pathname = usePathname();
  const locale = useMemo(() => {
    if (pathname) {
      return pathname.split('/')[1];
    }
    return 'en';
  }, [pathname]);
  const getLocalizedLink = (href: string) => {
    return createLink(locale, href);
  };
  const setPathnameLocale = (locale: string) => {
    if (!pathname) return;

    // Set cookie (1 year)
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;

    const segments = pathname.split('/');
    if (supportedLocales.includes(segments[1])) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }

    const newPath = segments.join('/');
    window.location.pathname = newPath;
  };
  const isTheCurrentPath = (path: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[^/]+(?:\/|$)/, '/');

    return pathWithoutLocale === path;
  };

  return { locale, getLocalizedLink, setPathnameLocale, isTheCurrentPath };
};
