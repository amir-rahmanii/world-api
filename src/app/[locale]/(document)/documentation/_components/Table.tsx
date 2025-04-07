import React from "react";

interface TableProps {
  children: React.ReactNode;
  tableHeaders: string[];
}

export default function Table({ tableHeaders, children }: TableProps) {
  return (
    <div className="w-full overflow-auto">
      <table className="w-full table-auto wide:table-fixed overflow-hidden text-center rounded-xl mt-4">
        <thead>
          <tr className="bg-gray-700/70 font-bold">
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
}
