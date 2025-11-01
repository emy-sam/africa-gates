'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const Card = ({ title, src }: { title: string; src: string }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="shadow-white-s rounded-default group flex h-[134px] w-[134px] cursor-pointer items-center justify-center rounded-xl border-2 border-gray-400 bg-white bg-contain bg-no-repeat hover:border-black hover:bg-gray-200">
        <img
          src={`/home/products/${src}`}
          className="group:hover:opacity-1 opacity-90"
        />
      </div>
      <span className="cursor-pointer hover:text-yellow-400">{title}</span>
    </div>
  );
};

const Categories = ({ titles }: { titles: string[] }) => {
  return (
    <div className="flex w-full justify-center gap-6">
      <Card title={titles[0]} src="postttt.webp" />
      <Card title={titles[1]} src="centtt.webp" />
    </div>
  );
};
const Products = ({ titles }: { titles: string[] }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex w-full justify-center gap-6">
        <Card title={titles[0]} src="postttt.webp" />
        <Card title={titles[1]} src="centtt.webp" />
      </div>
      <div className="flex w-full justify-center gap-6">
        <Card title={titles[2]} src="poste discontinus fixe.webp" />
        <Card src="central a beton.webp" title={titles[3]} />
      </div>
      <div className="flex w-full justify-center gap-6">
        <Card src="poste discontinus.webp" title={titles[4]} />
        <Card src="malaxeur.webp" title={titles[5]} />
      </div>
      <div className="flex w-full justify-center gap-6">
        <Card src="poste continus.webp" title={titles[6]} />
        <Card src="bacs.webp" title={titles[7]} />
      </div>
      <div className="flex w-full justify-center gap-6">
        <Card src="poste c mobiles.webp" title={titles[8]} />
        <Card src="racloirs.webp" title={titles[9]} />
      </div>
      <div className="flex w-full justify-center gap-6">
        <Card src="composants principaux.webp" title={titles[10]} />
        <div className="w-[134px]"></div>
      </div>
      <div className="flex w-full justify-center gap-6">
        <Card src="produit complémentaire.webp" title={titles[11]} />
        <div className="w-[134px]"></div>
      </div>
    </div>
  );
};

const Category = ({
  titles,
  buttons,
}: {
  titles: string[];
  buttons: string[];
}) => {
  const [selectedItem, setSelectedItem] = useState('cat');
  return (
    <div className="w-full bg-[rgb(173,173,173)] py-10">
      <div className="container mx-auto">
        <div className="flex w-full items-center justify-center gap-4 border-b-2 border-b-gray-500 font-bold">
          <div
            className={cn(
              '-mb-px border-b-2 border-transparent p-4',
              selectedItem == 'cat' ? 'border-yellow-400 text-yellow-400' : ''
            )}
            onClick={() => setSelectedItem('cat')}
          >
            {buttons[0]}
          </div>
          <div
            className={cn(
              '-mb-px border-b-2 border-transparent p-4',
              selectedItem == 'prod' ? 'border-yellow-400 text-yellow-400' : ''
            )}
            onClick={() => setSelectedItem('prod')}
          >
            {buttons[1]}
          </div>
        </div>
        <div className="my-10 w-full">
          {selectedItem === 'cat' ? (
            <Categories titles={titles} />
          ) : (
            <Products titles={titles} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
