import AdvantagesSection from '@/components/products/AdvantagesSection';
import GallerySection from '@/components/products/GallerySection';
import SpecificationsSection from '@/components/products/SpecificationsSection';
import { categories, advantages } from '@/data/products';
import { initI18n } from '@/i18n/server';
import { getLocalizedLink, localizeObject } from '@/lib/utils';
import { Clipboard, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Product = async ({
  params,
}: {
  params: Promise<{ locale: string; slug: string; id: string }>;
}) => {
  const { locale, slug, id } = await params;
  const i18n = await initI18n(locale, 'products');
  const t = i18n.getFixedT(locale, 'products');
  const category = categories.find((cat) => cat.slug === slug);
  if (!category) return <div>Product not found</div>;
  const product = category.products.find((p) => p.id === id);
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <div className="h-48"></div>
      <section className="container mx-auto px-5">
        <div className="flex">
          <div className="flex w-1/2 flex-col justify-center">
            <div className="space-y-5">
              <Link
                href={getLocalizedLink(locale, `/products/${slug}`)}
                className="flex w-max items-center gap-2"
              >
                <ChevronLeft className="rtl:rotate-180" />
                <span className="text-lg">{t('back')}</span>
              </Link>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <p>{t(`products.${product.id}.description`)}</p>
            </div>
          </div>
          <div className="w-1/2">
            <Image src="/products/gallery/abt-speedybatch/gallery1.webp" alt="" />
          </div>
        </div>
      </section>
      <section className="bg-[#424242] bg-gradient-to-l from-white/40 to-transparent p-20 text-white">
        <h2 className="pb-10 text-3xl font-bold">
          {t(`categories.${slug}.section.title`)}
        </h2>
        <p className="pl-[320px] text-xl">
          {t(`categories.${slug}.section.description`)}
        </p>
      </section>
      <AdvantagesSection
        title={t(`advantages.title`)}
        advantages={localizeObject(advantages, locale)}
      />
      <GallerySection
        items={[
          t('gallery.precisionControl'),
          t('gallery.ecoFriendlyOperations'),
          t('gallery.versatileApplication'),
        ]}
      />
      <SpecificationsSection
        title={t(`specifications.title`)}
        data={product.specifications.map((s) => t(`specifications.${s}`))}
      />
      <div className="bg-[#424242] bg-gradient-to-b from-white/40 to-transparent p-10 text-white">
        <h2 className="pb-10 text-2xl font-bold">{t('brochures.title')}</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-10">
            <Clipboard size={64} />
            <span>{t('brochures.complementary')}</span>
          </div>
          <div className="flex flex-col items-center gap-10">
            <Clipboard size={64} />
            <span>{t('brochures.product')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
