'use client';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { getLocalizedLink } from '@/lib/utils';
import Link from 'next/link';

interface Section {
  title: string;
  items: { image: string; title: string; href: string }[];
}

const ArticleSection = ({
  section,
  locale,
}: {
  section: Section;
  locale: string;
}) => {
  const timeOut = useRef<NodeJS.Timeout>(undefined);
  const slideIndex = useRef(1);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);

  const getOption = () => {
    const windowWidth = window.innerWidth;
    let itemWdith = 384;
    let gap = 32;
    if (windowWidth > 470) {
      itemWdith = 384;
      gap = 32;
    }
    const view = Math.floor(windowWidth / (itemWdith + gap));
    return {
      maxIndex: section.items.length - view,
      pageDir: locale === 'ar' ? 1 : -1,
    };
  };

  const handleMove = (dir: 1 | -1) => {
    const nextIndex = slideIndex.current + dir;
    const { maxIndex, pageDir } = getOption();
    if (nextIndex < 0 || nextIndex > maxIndex) return;
    slideIndex.current = nextIndex;
    const itemWdith = 384;
    const gap = 32;
    const newOffset = nextIndex * (itemWdith + gap) * pageDir;
    setHasPrev(nextIndex > 0);
    setHasNext(nextIndex < maxIndex);
    setOffset(newOffset);
  };

  const onWheel = ({ deltaX }: { deltaX: number }) => {
    if (timeOut.current) {
      clearTimeout(timeOut.current);
    }
    timeOut.current = setTimeout(() => {
      if (deltaX > 1) {
        handleMove(1);
      } else if (deltaX < 1) {
        handleMove(-1);
      }
    }, 300);
  };

  return (
    <div
      className="relative max-w-full overflow-hidden px-10 py-20"
      onWheel={onWheel}
    >
      <h2 className="pb-10 text-2xl font-bold">{section.title}</h2>
      <div className="relative flex items-center">
        <div
          className="relative flex translate-x-0 items-center justify-start gap-8 transition-transform rtl:justify-end"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {section.items.map((item, index) => (
            <Link
              locale={locale}
              href={getLocalizedLink(locale, item.href)}
              key={index}
              className="group relative h-96 w-96 shrink-0 overflow-hidden rounded-2xl shadow transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  fill
                />
              </div>
              <h3 className="relative flex h-full w-full items-end justify-center bg-black bg-opacity-20 pb-10 text-3xl text-white group-hover:underline">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
        <button
          className="absolute start-0 rounded-full bg-black bg-opacity-50 p-3 text-white transition hover:bg-opacity-70 disabled:pointer-events-none disabled:opacity-0"
          onClick={() => handleMove(1)}
          disabled={!hasNext}
        >
          <ChevronLeft className="rtl:rotate-180" />
        </button>
        <button
          className="absolute end-0 rounded-full bg-black bg-opacity-50 p-3 text-white transition hover:bg-opacity-70 disabled:pointer-events-none disabled:opacity-0"
          onClick={() => handleMove(-1)}
          disabled={!hasPrev}
        >
          <ChevronRight className="rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
};
export default ArticleSection;
