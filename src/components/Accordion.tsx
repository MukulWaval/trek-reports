import React from "react";
import AccordionItem from "./AccordionItem";

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="join join-vertical w-full mt-2">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
