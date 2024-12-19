import React, { ReactNode } from "react";
import Divider from "./Divider";

interface SectionProps {
  defaultChecked: boolean;
  title: ReactNode;
  content: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  defaultChecked,
  title,
  content
}) => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="collapse collapse-plus join-item border-base-300 border w-full">
          <input type="radio" defaultChecked={defaultChecked} />
          <div className="collapse-title">{title}</div>
          <div className="collapse-content">{content}</div>
        </div>
      </div>
      <div className="block lg:hidden">
        {title}
        {content}
        <Divider />
      </div>
    </>
  );
};

export default Section;
