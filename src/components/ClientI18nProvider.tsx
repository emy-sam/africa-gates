'use client';

import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/client';

interface ClientI18nProviderProps {
  children: React.ReactNode;
  locale: string;
}

export default function ClientI18nProvider({
  children,
  locale,
}: ClientI18nProviderProps) {
  useEffect(() => {
    if (locale !== i18n.language) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
