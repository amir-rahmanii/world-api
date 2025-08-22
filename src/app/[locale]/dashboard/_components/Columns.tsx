'use client';

import type { ColumnDef } from '@tanstack/react-table';

import type { APILocaleType } from '@/constants/apilocales.constant';

import { API_LOCALES } from '@/constants/apilocales.constant';

import { SortableHeader } from './SortableHeader';

export interface UserRequest {
  id: number;
  ip: string;
  status: 200 | 400 | 401;
  path: string;
  locale: APILocaleType;
  error_message: string;
  created_at: string;
}

export const Columns: ColumnDef<UserRequest>[] = [
  {
    accessorKey: 'ip',
    header: 'IP',
    cell: ({ row }) => {
      const ip = row.original.ip;
      return ip ? (
        <span>{ip}</span>
      ) : (
        <span className="text-red-400">Unknown</span>
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      return status === 200 ? (
        <span className="text-green-400">{status}</span>
      ) : (
        <span className="text-red-400">{status}</span>
      );
    },
  },
  {
    accessorKey: 'path',
    header: 'Path',
  },
  {
    accessorKey: 'locale',
    header: 'Locale',
    cell: ({ row }) => {
      const locale = row.original.locale;
      return locale ? <span>{locale}</span> : <span>No Locale</span>;
    },
  },
  {
    accessorKey: 'error_message',
    header: 'ErrorMessage',
    cell: ({ row }) => {
      const errorMessage = row.original.error_message;
      return errorMessage ? (
        <span className="text-red-400">{errorMessage}</span>
      ) : (
        <span className="text-muted-foreground">No Error</span>
      );
    },
  },
  {
    accessorKey: 'created_at',
    header: () => {
      return <SortableHeader />;
    },
    cell: ({ row }) => {
      const createdAt = row.original.created_at;
      const date = new Date(createdAt);

      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
    },
  },
];
