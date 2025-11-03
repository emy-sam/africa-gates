import i18next, { InitOptions, TOptions } from 'i18next';
import { i18nOptions } from './config';
import resources from './resources';

const allNamespaces = [
  'common',
  'products',
  'about',
  'home',
  'career',
  'article',
  'development',
];

export async function initI18n(
  locale: string,
  ns: string | string[] = allNamespaces
) {
  if (!i18next.isInitialized) {
    // 🧩 Merge configs carefully — don’t spread if it might override functions
    const options: InitOptions = {
      supportedLngs: i18nOptions.supportedLngs,
      fallbackLng: i18nOptions.fallbackLng,
      defaultNS: 'common',
      ns: allNamespaces,
      lng: locale,
      resources,
      interpolation: { escapeValue: false },
      debug: true,

      // ✅ Guaranteed function handler
      overloadTranslationOptionHandler(args: string[]): TOptions {
        return { defaultValue: args[1] };
      },
    };

    await i18next.init(options);
  }

  await i18next.loadNamespaces(ns);
  await i18next.loadLanguages(locale);

  return i18next;
}
