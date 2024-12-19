import React, { ReactNode } from "react";

interface ParagraphProps {
  text: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p className="mt-2">{text}</p>;
};

export default Paragraph;
