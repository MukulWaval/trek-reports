import React, { ReactNode } from "react";

interface NumberedListProps {
  children: ReactNode;
}

const NumberedList: React.FC<NumberedListProps> = ({ children }) => {
  return <ol className="list-decimal space-y-2 pl-6">{children}</ol>;
};

export default NumberedList;
