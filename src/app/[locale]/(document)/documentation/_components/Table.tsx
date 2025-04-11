import type { TableHeader } from "@/types/tableHeaders.types";

import { useTranslations } from "next-intl";
import React from "react";

interface TableProps {
  children: React.ReactNode;
  tableHeaders: TableHeader[];
}

export default function Table({ tableHeaders, children }: TableProps) {
  const t = useTranslations("documentationPage.tableHeaders");
  return (
    <div className="w-full overflow-auto">
      <table className="w-full table-auto overflow-hidden text-center rounded-xl mt-4">
        <thead>
          <tr className="bg-gray-700/70 font-bold">
            {tableHeaders.map((header) => (
              <th key={header.title}>{t(header.title)}</th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
}
