import FullScreenImage from '@/components/core/header/FullScreenImage';
import { initI18n } from '@/i18n/server';
import Image from 'next/image';
import React from 'react';
import { spares } from '@/data/products';
import OrderDialog from '@/components/spares/OrderDialog';
import OrderButton from '@/components/spares/OrderButton';
export async function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
    { locale: "ar" },
  ];
}

interface SparesProps {
  params: Promise<{
    locale: string;
  }>;
}

const Spares = async ({ params }: SparesProps) => {
  const { locale } = await params;
  const i18n = await initI18n(locale, ['common']);
  const t = i18n.getFixedT(locale, 'common');
  return (
    <div>
      <FullScreenImage
        image={'/products/hero.webp'}
        title={t('discover.title')}
        description=""
      />

      <section className="p-20">
        <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {spares.map((spare, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              <div className="relative block h-48 border-b">
                <Image
                  src={spare.image}
                  alt={spare.title}
                  fill
                  className="h-full w-full object-contain"
                />
                <div className="absolute left-0 top-0 rounded-ee-2xl bg-[#5f5c65] p-2 text-white">
                  <h3 className="text-xl font-bold">{spare.title}</h3>
                </div>
              </div>
              <div className="px-4 py-5">
                <div className="py-5">
                  {/* <ProductInfo info={item.info} /> */}
                </div>

                <OrderButton spare={spare} text={t('order')} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <OrderDialog />
    </div>
  );
};

export default Spares;
