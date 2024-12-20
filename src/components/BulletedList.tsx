import React, { ReactNode } from "react";

interface BulletedListProps {
  children: ReactNode;
}

const BulletedList: React.FC<BulletedListProps> = ({ children }) => {
  return <ul className="list-disc space-y-1 pl-4">{children}</ul>;
};

export default BulletedList;
