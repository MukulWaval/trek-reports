import React from "react";

interface NumberedListProps {
  items: string[];
}

const NumberedList: React.FC<NumberedListProps> = ({ items }) => {
  return (
    <ol className="list-decimal space-y-2 pl-6">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};

export default NumberedList;
