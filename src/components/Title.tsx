import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className="card-title font-semibold">{children}</h2>;
};

export default Title;
