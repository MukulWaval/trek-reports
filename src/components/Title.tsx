import React, { ReactNode } from "react";

interface TitleProps {
  title: ReactNode;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h2 className="card-title font-semibold">{title}</h2>;
};

export default Title;
