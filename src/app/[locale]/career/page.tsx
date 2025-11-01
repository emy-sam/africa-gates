import FullScreenImage from '@/components/core/header/FullScreenImage';
import { initI18n } from '@/i18n/server';
export async function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
    { locale: "ar" },
  ];
}
const Career = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const i18n = await initI18n(locale, ['career']);
  const t = i18n.getFixedT(locale, 'career');
  return (
    <div className="relative">
      <FullScreenImage
        image="/career/carriere.jpeg"
        title={t('title')}
        description=""
      />

      {/* Contenu principal en dehors de l'image */}
      <div className="bg-gray-100 px-6 py-10 text-black">
        {/* Première section */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">{t('header')}</h2>
          <p className="mt-4 text-lg text-gray-600">{t('subheader')}</p>
        </div>

        {/* Deuxième section */}
        <div className="mx-auto mt-16 max-w-5xl rounded-lg bg-white p-10 shadow-md">
          <h2 className="text-3xl font-bold">{t('body.title')}</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">
                {t('body.section1.title')}
              </h3>
              <p className="mt-2 text-gray-700">
                {t('body.section1.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                {t('body.section2.title')}
              </h3>
              <p className="mt-2 text-gray-700">
                {t('body.section2.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                {t('body.section3.title')}
              </h3>
              <p className="mt-2 text-gray-700">
                {t('body.section3.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
