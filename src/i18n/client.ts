import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonAr from './locales/ar/common.json';
import commonEn from './locales/en/common.json';
import commonFr from './locales/fr/common.json';
import commonInit from './locales/init/common.json';
import { i18nOptions } from './config';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    ...i18nOptions,
    supportedLngs: [...i18nOptions.supportedLngs, 'init'],
    resources: {
      en: { common: commonEn },
      fr: { common: commonFr },
      ar: { common: commonAr },
      init: { common: commonInit },
    },
    lng: 'init',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
