import { useTranslations } from 'next-intl';
import React from 'react';

import type { TableHeader } from '@/types/tableHeaders.types';

interface TableProps {
  children: React.ReactNode;
  tableHeaders: TableHeader[];
}

export default function Table({ tableHeaders, children }: TableProps) {
  const t = useTranslations('documentationPage.tableHeaders');
  return (
    <div className="w-full overflow-auto">
      <table className="table_docs mt-4 w-full table-auto overflow-hidden rounded-xl text-center">
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
