'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const p = Autoplay({ delay: 1000 });
const FullScreenCarousel = () => {
  console.log({ p });
  return (
    <Carousel
      className="h-screen w-screen"
      opts={{ loop: true }}
      plugins={[Autoplay()]}
    >
      <CarouselContent>
        <CarouselItem className="h-screen w-screen">
          <img
            src="https://cdn1-originals.webdamdb.com/12938_159019783?cache=-62169955622&response-content-disposition=inline;filename=C1-Hero_Image-ABG-2560x1440px.webp&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9jZG4xLW9yaWdpbmFscy53ZWJkYW1kYi5jb20vMTI5MzhfMTU5MDE5NzgzP2NhY2hlPS02MjE2OTk1NTYyMiZyZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPWlubGluZTtmaWxlbmFtZT1DMS1IZXJvX0ltYWdlLUFCRy0yNTYweDE0NDBweC53ZWJwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoyMTQ3NDE0NDAwfX19XX0_&Signature=IShCopgZqBP8C9he4PlXgrecHAqzUbEI2irtL-B1IEI0F7HxgPN3JlHftvJOeKVM1Q0E38pBLgH-YJ27ede5QGCF~bqVLvYeYRysDy21zg8QXmlmYkDdpb6M-pxod0SdnCxH03na86yRgETYgE8x-HEbNoyZXcBp7DazoqrK91Bc~VsZEKaNHK1IV7xG1YKoJSeHGb-llHir~I2Spt~KAUNx74PV2RskW-k1dElO9s9KwH79OE0AMBlc4xb4llMZxKi8JKjk1~OSo1K0bLS2~UbjYqr7pL~EwvXzNDPNvG8cTnFNc7E~qbLdn14wKu2E1v8njwRB3LD32xbvdQWN9Q__&Key-Pair-Id=APKAI2ASI2IOLRFF2RHA"
            alt="i1"
            className="h-full w-full object-cover"
          />
        </CarouselItem>
        <CarouselItem className="h-screen w-screen">
          <img
            src="/home/caroussel.jpg"
            alt="i2"
            className="h-full w-full object-cover"
          />
        </CarouselItem>
        <CarouselItem className="h-screen w-screen">
          <img
            src="https://cdn1-originals.webdamdb.com/12938_156635691?cache=1709719869&response-content-disposition=inline;filename=C1_Hero_Image_Give-your-plant-new-life_Retrofit_1920x1050px.webp&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cCo6Ly9jZG4xLW9yaWdpbmFscy53ZWJkYW1kYi5jb20vMTI5MzhfMTU2NjM1NjkxP2NhY2hlPTE3MDk3MTk4NjkmcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj1pbmxpbmU7ZmlsZW5hbWU9QzFfSGVyb19JbWFnZV9HaXZlLXlvdXItcGxhbnQtbmV3LWxpZmVfUmV0cm9maXRfMTkyMHgxMDUwcHgud2VicCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MjE0NzQxNDQwMH19fV19&Signature=QmNcFU7qQqCIaH1o-vuQLra~sVxhxiASBtd2qjh-cfUA0HKWtLyiHQ7Ml3y8kE09svwd8n07rGvnoGzvpeki0VtjS9kO2iNAuv8hpsblGRrJv7k-KYBC483jWviuGCViNp5GKN867U~SvpSH7uh4oB1dHJ-aSQba9Gx9bPzjNlHJP3N5zsenL3G9fwQ3FlEflGwDJEEfspmETz8CZqIvAelKjxkBLVn9jzGFf7JryfYCINHmwfwmfeOMhaHcXBE3f~SqIMOgHxpZeJIAqOSLSkpGYlOXkEMhALwW3T10GKJe3rOw6dAcEThpN7OvqGK3Kz2EVkDfTAzubLdr5TRKOQ__&Key-Pair-Id=APKAI2ASI2IOLRFF2RHA"
            alt="i3"
            className="h-full w-full object-cover"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-12" />
      <CarouselNext className="right-12" />
    </Carousel>
  );
};

export default FullScreenCarousel;
