'use client';
import React from 'react';
import { initI18n } from '@/i18n/server';
import FullScreenImage from '@/components/core/header/FullScreenImage';

const teamMembers = [
  {
    name: 'Maher Charni',
    role: 'CEO & Founder',
    img: '/images/team1.jpg',
  },
];

const brands = [
  { name: 'Wibau', img: '/about/brands/wibau.png' },
  { name: 'Teknomak', img: '/about/brands/teknomak.png' },
  { name: 'STA', img: '/about/brands/osta.png' },
  { name: 'SIM', img: '/about/brands/sim.png' },
  { name: 'Roberg', img: '/about/brands/roberg.png' },
  { name: 'Rammax', img: '/about/brands/rammax.png' },
  { name: 'Induflame', img: '/about/brands/oertli.png' },
  { name: 'IMA', img: '/about/brands/ima.png' },
  { name: 'Främbs & Freudenberg', img: '/about/brands/frambs.png' },
  { name: 'ELBA', img: '/about/brands/elba.png' },
  { name: 'Duomat', img: '/about/brands/duomat.png' },
  { name: 'Bräuer', img: '/about/brands/brauer.png' },
  { name: 'Apollo', img: '/about/brands/apollo.png' },
  { name: 'Antec', img: '/about/brands/antec.png' },
  { name: 'Ae', img: '/about/brands/ae.png' },
  { name: 'ABG', img: '/about/brands/abg.png' },
];

const About = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const i18n = await initI18n(locale, ['about']);
  const t = i18n.getFixedT(locale, 'about');

  return (
    <div className="relative min-h-screen w-full">
      {/* Section Header avec image plein écran */}
      <FullScreenImage
        image="/about/aboutus2.jpg"
        title={t('header.title')}
        description={t('header.description')}
      />

      {/* Section Équipe */}
      <div className="flex flex-col items-center bg-white px-6 py-10 text-black md:flex-row">
        {/* Texte à gauche */}
        <div className="text-start md:w-1/2 md:pr-10">
          <h1 className="text-4xl font-bold">{t('team.title')}</h1>
          <p className="mt-4 max-w-lg text-gray-600">{t('team.description')}</p>
        </div>

        {/* Cartes des membres à droite */}
        <div className="flex flex-wrap justify-center gap-6 md:w-1/2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-64 rounded-lg bg-gray-800 p-6 text-center shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section Nos Missions */}
      <div className="flex flex-col items-center bg-yellow-400 px-6 py-10 text-black md:flex-row">
        {/* Image à gauche */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="/home/mission.jpg"
            alt="Nos Missions"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Texte à droite */}
        <div className="text-start md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold">{t('mission.title')}</h2>
          <p className="mt-4 max-w-lg">
            {t('mission.description.before')} <strong>AGCP</strong>{' '}
            {t('mission.description.after')}
          </p>
        </div>
      </div>

      {/* Section Nos Services */}
      <div className="flex flex-col items-center gap-6 bg-gray-300 px-6 py-10 text-black md:flex-row">
        {/* Texte à gauche */}
        <div className="text-start md:w-1/2">
          <h2 className="text-3xl font-bold">{t('services.title')}</h2>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>
              <strong>{t('services.title1')} :</strong>{' '}
              {t('services.description1')}
            </li>
            <li>
              <strong>{t('services.title2')} :</strong>{' '}
              {t('services.description2')}
            </li>
            <li>
              <strong>{t('services.title3')} :</strong>{' '}
              {t('services.description3')}
            </li>
            <li>
              <strong>{t('services.title4')} :</strong>{' '}
              {t('services.description4')}
            </li>
            <li>
              <strong>{t('services.title5')} :</strong>{' '}
              {t('services.description5')}
            </li>
          </ul>
          <p className="mt-4">{t('services.description')}</p>
        </div>

        {/* Image à droite */}
        <div className="mt-6 flex justify-center md:mt-0 md:w-1/2">
          <img
            src="/home/services.jpg"
            alt="Nos Services"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Section Nos Marques */}
      <div className="bg-gray-100 py-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">{t('marque.title')}</h2>
        <p className="mx-auto mb-6 max-w-xl text-gray-600">
          {t('marque.description')}
        </p>

        <div className="grid grid-cols-2 gap-6 px-6 md:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-3xl bg-white p-4 shadow-md transition-transform hover:scale-105"
            >
              <img src={brand.img} alt={brand.name} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
