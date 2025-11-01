import { getFixedT } from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Equipement = ({ locale }: { locale: string }) => {
  const t = getFixedT(locale, 'common');
  return (
    <div className="relative flex min-h-[368px] flex-col justify-center overflow-hidden px-5 py-16 md:px-24 lg:min-h-[450px] lg:py-[72px]">
      <Image
        src="/home/equipement.jpg"
        alt=""
        width={996}
        height={409}
        className="absolute bottom-0 left-0 right-0 h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 rtl:bg-gradient-to-l"></div>
      <div className="container relative mx-auto">
        <div className="flex w-full max-w-[480px] flex-col items-start justify-start gap-4 text-white">
          <h2 className="text-2xl font-semibold">{t('discover.title')}</h2>
          <p>{t('discover.description')}</p>
          <button className="inline-flex h-10 max-h-10 w-max items-center justify-center gap-2 whitespace-nowrap rounded-3xl border-2 border-solid border-white bg-yellow-400 px-7 py-0.5 text-white transition ease-in-out hover:bg-red-400 lg:py-2">
            <Link href={`/${locale}/spares`}>{t('discover.button')}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipement;
