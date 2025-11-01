import FullScreenCarousel from '@/components/core/header/FullScreenCarousel';
import Category from '@/components/Category';
import { initI18n } from '@/i18n/server';

// 👇 Ajoute cette fonction juste ici (avant ton export default)
export function generateStaticParams() {
  // 👉 Liste les locales que ton site utilise
  return [
    { locale: 'fr' },
    { locale: 'en' },
  ];
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const i18n = await initI18n(locale, ['home']);
  const t = i18n.getFixedT(locale, 'home');

  const buttons = [t('title_categories'), t('title_gamme')];
  const titles = [
    t('poste_enrobage'),
    t('centrale_beton'),
    t('pe_discontinus_fixes'),
    t('centrale_beton'),
    t('pe_discontinus_mobile'),
    t('malaxeurs_beton'),
    t('poste_continu_fixe'),
    t('bacs_stockage'),
    t('postes_continu_mobile'),
    t('racloirs_radiaux'),
    t('composants_principaux'),
    t('produits_complementaires'),
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <FullScreenCarousel />
        </div>
      </div>
      <Category titles={titles} buttons={buttons} />
    </div>
  );
}
