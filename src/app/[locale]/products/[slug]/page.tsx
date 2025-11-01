import FullScreenImage from '@/components/core/header/FullScreenImage';
import { categories } from '@/data/products';
import Image from 'next/image';
import { initI18n } from '@/i18n/server';
import { getLocalizedLink } from '@/lib/utils';
import Link from 'next/link';
export async function generateStaticParams() {
  return [
    { locale: "fr" },
    { locale: "en" },
    { locale: "ar" },
  ];
}

interface ProductsProps {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}

const Products = async ({ params }: ProductsProps) => {
  const { slug, locale } = await params;

  const i18n = await initI18n(locale, 'products');
  const t = i18n.getFixedT(locale, 'products');
  const category = categories.find((cat) => cat.slug === slug);
  if (!category) return <div>Product not found</div>;
  return (
    <div>
      <FullScreenImage
        image={category.hero.image}
        title={t(`categories.${slug}.hero.title`)}
        description={t(`categories.${slug}.hero.description`)}
      />
      <section className="p-20">
        <h2 className="pb-10 text-3xl font-bold">
          {t(`categories.${slug}.section.title`)}
        </h2>
        <p className="pl-[320px] text-xl">
          {t(`categories.${slug}.section.description`)}
        </p>
      </section>

      <section className="p-20">
        <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {category.products.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200"
            >
              <Link
                href={getLocalizedLink(locale, `/products/${slug}/${item.id}`)}
                className="relative block h-48 border-b"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="h-full w-full object-contain"
                />
                <div className="absolute start-0 top-0 rounded-ee-2xl bg-[#5f5c65] p-2 text-white">
                  <h3 className="text-xl font-bold">
                    {t(`products.${item.id}.title`)}
                  </h3>
                </div>
              </Link>
              <div className="px-4 py-5">
                <div className="py-5">
                  {Object.keys(item.info).map((key) => (
                    <div key={key} className="flex justify-between">
                      <span>{t(`info.${key}`)}:</span>
                      <span className="font-bold">{item.info[key]}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={getLocalizedLink(
                    locale,
                    `/products/${slug}/${item.id}`
                  )}
                  className="block w-full rounded-3xl bg-[#5f5c65] px-4 py-2 text-center text-white"
                >
                  {t('details', { locale, ns: 'common' })}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
