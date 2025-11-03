'use client';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const FullScreenCarousel = () => {
  return (
    <Carousel
      className="h-screen w-screen"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000 })]} // autoplay every 3s
    >
      <CarouselContent>
        {/* Slide 1 */}
        <CarouselItem className="relative h-screen w-screen">
          <Image
            src="https://cdn1-originals.webdamdb.com/12938_159019783?cache=-62169955622&response-content-disposition=inline;filename=C1-Hero_Image-ABG-2560x1440px.webp"
            alt="i1"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </CarouselItem>

        {/* Slide 2 */}
        <CarouselItem className="relative h-screen w-screen">
          <Image
            src="/home/caroussel.jpg"
            alt="i2"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </CarouselItem>

        {/* Slide 3 */}
        <CarouselItem className="relative h-screen w-screen">
          <Image
            src="https://cdn1-originals.webdamdb.com/12938_156635691?cache=1709719869&response-content-disposition=inline;filename=C1_Hero_Image_Give-your-plant-new-life_Retrofit_1920x1050px.webp"
            alt="i3"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </CarouselItem>
      </CarouselContent>

      {/* Navigation arrows */}
      <CarouselPrevious className="left-12" />
      <CarouselNext className="right-12" />
    </Carousel>
  );
};

export default FullScreenCarousel;
