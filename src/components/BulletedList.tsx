import React from "react";

interface BulletedListProps {
  items: string[];
}

const BulletedList: React.FC<BulletedListProps> = ({ items }) => {
  return (
    <ul className="list-disc space-y-1 pl-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default BulletedList;
