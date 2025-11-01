import i18next from 'i18next';
// import Backend from 'i18next-fs-backend';
import { i18nOptions } from './config';
import resources from './resources';
// import path from 'path';

const allNamespaces = [
  'common',
  'products',
  'about',
  'home',
  'career',
  'article',
]; // list all known namespaces here
// const isProd = process.env.NODE_ENV === 'production';

// const loadPath = isProd
//   ? '/locales/{{lng}}/{{ns}}.json' // production: root/locales/...
//   : path.join(process.cwd(), 'public', 'locales', '{{lng}}', '{{ns}}.json'); // dev: public/locales/...

export async function initI18n(
  locale: string,
  ns: string | string[] = allNamespaces
) {
  if (!i18next.isInitialized) {
    await i18next
      // .use(Backend)
      .init({
        ...i18nOptions,
        lng: locale,
        ns: allNamespaces,
        defaultNS: 'common',
        resources,
        // backend: {
        //   loadPath,
        // },
        initImmediate: false,
        interpolation: { escapeValue: false },
        debug: true,
      });
  }
  await i18next.loadNamespaces(ns); // Ensures the needed namespaces are loaded
  await i18next.loadLanguages(locale); // Ensures the locale is loaded

  return i18next;
}
