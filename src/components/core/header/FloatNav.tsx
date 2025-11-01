'use client';
import { useLocale } from '@/hooks/use-locale';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

import { useTranslation } from 'react-i18next';

// const t = (s: string) => {
//   return s;
// };
// const t = (s: string) => s;
// const getLocalizedLink = (s: string) => s;
// const isTheCurrentPath = (s: string) => !!s;
const FloatNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { getLocalizedLink } = useLocale();

  const lastScrollY = useRef(0);
  const { t } = useTranslation();

  // const { t } = i18next;
  // const locale = i18next.language;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(
        currentScrollY < lastScrollY.current || currentScrollY < 500
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'relative top-5 z-40 h-8 w-full transition-transform duration-1000',
        isVisible ? 'translate-y-0' : '-translate-y-[500px]'
      )}
    >
      <div
        className={cn(
          // 'w-full ',
          'mx-auto flex w-full max-w-md items-center justify-center gap-4 rounded-3xl bg-[#161612] text-white shadow-md transition-opacity duration-1000',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
      >
        <Link
          href={getLocalizedLink('/articles/plants')}
          className="flex flex-1 cursor-pointer justify-center rounded-3xl p-3 px-6 hover:bg-[#aeaeae]"
        >
          <span className="w-max">{t('header.nav.float.centrale')}</span>
        </Link>
        <Image src="/logo.png" alt="Logo" width={50} height={30} />

        <Link
          href={getLocalizedLink('/spares')}
          className="flex flex-1 cursor-pointer justify-center rounded-3xl p-3 px-6 hover:bg-[#aeaeae]"
        >
          <span className="w-max">{t('header.nav.float.pieces')}</span>
        </Link>
      </div>
    </div>
  );
};

export default FloatNav;
