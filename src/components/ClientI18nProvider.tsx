'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/client';
import { useEffect } from 'react';

export default function ClientI18nProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  useEffect(() => {
    if (locale !== i18n.language) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
