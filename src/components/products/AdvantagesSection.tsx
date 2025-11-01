'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AdvantagesSection = ({
  title: bigTitle,
  advantages,
}: {
  title: string;
  advantages: {
    title: string;
    description?: string;
    descriptionList?: string[];
  }[];
}) => {
  const [advantageIndex, setAdvantageIndex] = useState(0);
  const handleMove = (dir: 1 | -1) => {
    setAdvantageIndex(
      (advantageIndex + advantages.length + dir) % advantages.length
    );
  };
  const { title, description, descriptionList } = advantages[advantageIndex];
  return (
    <div className="px-5 py-20">
      <div className="container mx-auto">
        <div className="flex items-stretch gap-20 pl-20">
          <div className="flex w-1/3 shrink-0 flex-col gap-5">
            <h2 className="text-2xl font-bold">{bigTitle}</h2>
            <div className="relative flex h-full w-full items-center rounded-2xl border p-5 shadow-xl">
              <div className="relative h-full w-full">
                <h3 className="mb-4 text-xl font-semibold">{title}</h3>
                {description && <p>{description}</p>}
                {descriptionList && (
                  <ul className="list-disc pl-5">
                    {descriptionList?.map((item, index) => (
                      <li key={index} className="pb-5">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                className="absolute -left-16 rounded-full bg-black bg-opacity-50 p-3 text-white transition hover:bg-opacity-70 disabled:pointer-events-none disabled:opacity-0"
                onClick={() => handleMove(1)}
              >
                <ChevronLeft />
              </button>
              <button
                className="absolute -right-16 rounded-full bg-black bg-opacity-50 p-3 text-white transition hover:bg-opacity-70 disabled:pointer-events-none disabled:opacity-0"
                onClick={() => handleMove(-1)}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-2xl">
            <Image
              src={'/products/advantages/abt-speedybatch.webp'}
              alt=""
              width="580"
              height="670"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
