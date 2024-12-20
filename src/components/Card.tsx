import React, { ReactNode } from "react";

interface CardProps {
  imgSrc: string;
  alt: string;
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ imgSrc, alt, title, children }) => {
  return (
    <div className="card w-full bg-base-100 shadow-2xl mb-10">
      <figure>
        <img src={imgSrc} alt={alt} className="h-full w-full object-cover" />
      </figure>
      <h1 className="text-2xl font-bold mt-5 mb-2 px-3 lg:text-5xl lg:px-10 lg:mb-10">
        {title}
      </h1>
      <div className="card-body m-0">{children}</div>
    </div>
  );
};

export default Card;
