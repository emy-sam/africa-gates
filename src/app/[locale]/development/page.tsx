import Image from 'next/image';
import FullScreenImage from '@/components/core/header/FullScreenImage';
import ExpandableParagraph from '@/components/core/ExpandableParagraph';
import { initI18n } from '@/i18n/server';
export async function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
    { locale: "ar" },
  ];
}

const Developpement = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) => {
  const { locale } = await params;
  const i18n = await initI18n(locale, ['development']);
  const t = i18n.getFixedT(locale, 'development');
  return (
    <div className="relative">
      <FullScreenImage
        image="/developpementdurable/bg.jpg"
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

        {/* Deuxième section avec image à droite */}
        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center rounded-lg bg-white p-10 shadow-md md:flex-row">
          {/* Texte à gauche */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold">{t('body.section1.title')}</h2>

            <p className="mt-4 font-semibold text-black">
              {t('body.section1.subtitle')}
            </p>

            <ExpandableParagraph text={t('body.section1.description')}>
              <p className="mt-2 text-gray-700">
                {t('body.section1.description')}
              </p>
            </ExpandableParagraph>
          </div>

          {/* Image à droite */}
          <div className="mt-6 md:ml-6 md:mt-0 md:w-1/3">
            <Image
              src="/developpementdurable/dev1.webp"
              alt="Innovation"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center rounded-lg bg-white p-10 shadow-md md:flex-row">
          {/* Texte à gauche */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold">{t('body.section2.title')}</h2>

            <p className="mt-4 font-semibold text-black">
              {t('body.section2.subtitle')}
            </p>

            <ExpandableParagraph text={t('body.section2.description')}>
              <p className="mt-2 text-gray-700">
                {t('body.section2.description')}
              </p>
            </ExpandableParagraph>
          </div>

          {/* Image à droite */}
          <div className="mt-6 md:ml-6 md:mt-0 md:w-1/3">
            <Image
              src="/developpementdurable/emission.png"
              alt="Innovation"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center rounded-lg bg-white p-10 shadow-md md:flex-row">
          {/* Texte à gauche */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold">{t('body.section3.title')}</h2>

            <ExpandableParagraph text={t('body.section3.description')}>
              <p className="mt-2 text-gray-700">
                {t('body.section3.description')}
              </p>
            </ExpandableParagraph>
          </div>

          {/* Image à droite */}
          <div className="mt-6 md:ml-6 md:mt-0 md:w-1/3">
            <Image
              src="/developpementdurable/securité.png"
              alt="Innovation"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center rounded-lg bg-white p-10 shadow-md md:flex-row">
          {/* Image à gauche */}
          <div className="md:mr-6 md:w-1/3">
            <Image
              src="/developpementdurable/inno.png"
              alt="Innovation"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Texte à droite */}
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold">{t('body.section4.title')}</h2>
            <p className="mt-4 font-semibold text-black">
              {t('body.section4.subtitle')}
            </p>
            <p className="mt-2 text-gray-700">
              {t('body.section4.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developpement;
