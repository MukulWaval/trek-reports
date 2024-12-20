import React, { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className="mt-2">{children}</p>;
};

export default Paragraph;
