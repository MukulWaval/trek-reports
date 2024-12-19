import React from "react";
import CarouselItem from "./CarouselItem";

interface ImageProps {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageProps[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div className="carousel carousel-vertical rounded-box h-96 mt-2">
      {images.map((image, index) => (
        <CarouselItem key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default Carousel;
