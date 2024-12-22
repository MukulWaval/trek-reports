import React, { ReactNode } from "react";
import Divider from "./Divider";
import Title from "./Title";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="collapse collapse-plus join-item border-base-300 border w-full">
          <input type="radio" defaultChecked />
          <div className="collapse-title">
            <Title>{title}</Title>
          </div>
          <div className="collapse-content">{children}</div>
        </div>
      </div>
      <div className="block lg:hidden">
        <Title>{title}</Title>
        {children}
        <Divider />
      </div>
    </>
  );
};

export default Section;
