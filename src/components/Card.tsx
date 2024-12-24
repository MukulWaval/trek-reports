import React, { ReactNode, useEffect, useRef } from "react";

interface CardProps {
  imgSrc: string;
  alt: string;
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ imgSrc, alt, title, children }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Wait until the DOM is fully loaded and rendered
    const timeoutId = setTimeout(() => {
      // Ensure the title element exists and then scroll into view
      if (titleRef.current) {
        titleRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }
    }, 100); // Delay to make sure the element is rendered

    return () => clearTimeout(timeoutId); // Cleanup timeout
  }, []);

  return (
    <div className="grid grid-cols-1 p-0">
      <div className="card bg-base-100 shadow-2xl">
        <figure>
          <img src={imgSrc} alt={alt} className="h-full w-full object-cover" />
        </figure>
        <h1
          ref={titleRef}
          className="text-2xl font-bold mt-5 mb-2 px-3 lg:text-5xl lg:px-10 lg:mb-10"
        >
          {title}
        </h1>
        <div className="card-body m-0">{children}</div>
      </div>
    </div>
  );
};

export default Card;
