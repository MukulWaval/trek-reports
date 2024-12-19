import React, { ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  content: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  return (
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title font-medium">{title}</div>
      <div className="collapse-content">{content}</div>
    </div>
  );
};

export default AccordionItem;
