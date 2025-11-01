import React from 'react';
import FullScreenImage from '@/components/core/header/FullScreenImage';
import ArticleSection from '@/components/articles/section';
import { articles } from '@/data/articles';

export const dynamic = 'force-static'; // ✅ يخلي الصفحة تتصدر statiquement

export async function generateStaticParams() {
  const locales = ["fr", "en", "ar"];
  const categories = articles.map((a) => a.category);
  return locales.flatMap((locale) =>
    categories.map((category) => ({ locale, category }))
  );
}

export default function ArticlesPage({ params }: { params: { locale: string; category: string } }) {
  const { locale, category } = params;

  const article = articles.find((a) => a.category === category);
  if (!article) return <div>Article not found</div>;

  return (
    <div>
      <FullScreenImage
        image={article.image}
        title={category}
        description=""
      />
      {article.sections.map((sectionData, index) => (
        <ArticleSection key={index} locale={locale} section={sectionData} />
      ))}
    </div>
  );
}
