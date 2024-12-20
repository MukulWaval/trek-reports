import React from "react";

interface CarouselItemProps {
  src: string;
  alt: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ src, alt }) => {
  return (
    <div className="carousel-item h-full">
      <img
        src={src}
        alt={alt}
        className="rounded-box object-contain w-full h-full"
      />
    </div>
  );
};

export default CarouselItem;
