import React from "react";

interface KeyValueRow {
  key: string;
  value: string | React.ReactNode;
}

interface KeyValueTableProps {
  rows: KeyValueRow[];
}

const KeyValueTable: React.FC<KeyValueTableProps> = ({ rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact table-zebra w-full">
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <th>{row.key}</th>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeyValueTable;
