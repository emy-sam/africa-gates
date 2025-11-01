import Image from 'next/image';

const GallerySection = ({ items }: { items: string[] }) => {
  const width = 500;
  const height = 500;
  return (
    <div>
      <div className="grid-row-3 grid grid-cols-4 text-3xl font-semibold text-white">
        <div className="col-span-2 row-span-2">
          <Image
            alt=""
            src="/products/gallery/abt-speedybatch/gallery1.webp"
            width={width}
            height={height}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center bg-[#424242] bg-gradient-to-b from-white/40 to-transparent p-5 text-center">
          {items[0]}
        </div>
        <div className="">
          <Image
            alt=""
            src="/products/gallery/abt-speedybatch/gallery2.webp"
            width={width}
            height={height}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="">
          <Image
            alt=""
            src="/products/gallery/abt-speedybatch/gallery3.webp"
            width={width}
            height={height}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center bg-[#424242] bg-gradient-to-b from-white/40 to-transparent p-5 text-center">
          {items[1]}
        </div>
        <div className="">
          <Image
            alt=""
            src="/products/gallery/abt-speedybatch/gallery4.webp"
            width={width}
            height={height}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="">
          <Image
            alt=""
            src="/products/gallery/abt-speedybatch/gallery5.webp"
            width={width}
            height={height}
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center bg-[#424242] bg-gradient-to-b from-white/40 to-transparent p-5 text-center">
          {items[2]}
        </div>
        <div className="">
          <Image
            alt=""
            src="/products/gallery/abt-speedybatch/gallery6.webp"
            width={width}
            height={height}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
