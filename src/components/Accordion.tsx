import React, { ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className="join join-vertical w-full mt-2">{children}</div>;
};

export default Accordion;
