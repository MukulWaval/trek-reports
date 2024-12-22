import React, { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return (
    <div className="carousel carousel-vertical rounded-box h-96 mt-2">
      {children}
    </div>
  );
};

export default Carousel;
