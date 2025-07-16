'use client';

import type { ColumnDef } from '@tanstack/react-table';

import type { APILocaleType } from '@/constants/apilocales.constant';

import { API_LOCALES } from '@/constants/apilocales.constant';

import IrLogo from '../../../../../../public/v1/countries/flag/IR.svg';
import SaLogo from '../../../../../../public/v1/countries/flag/SA.svg';
import UsLogo from '../../../../../../public/v1/countries/flag/US.svg';
import { SortableHeader } from './SortableHeader';

export interface UserRequest {
  id: number;
  api_key: string;
  status: 200 | 400 | 401;
  path: string;
  locale: APILocaleType;
  error_message: string;
  created_at: string;
}

export const Columns: ColumnDef<UserRequest>[] = [
  {
    accessorKey: 'api_key',
    header: 'ApiKey',
    cell: ({ row }) => {
      const apiKey = row.original.api_key;
      return apiKey ? (
        <span>{apiKey}</span>
      ) : (
        <span className="text-red-400">Anonymous</span>
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
      switch (locale) {
        case API_LOCALES.Persian: {
          return (
            <div className="flex items-center justify-center">
              <IrLogo className="size-7" />
            </div>
          );
        }
        case API_LOCALES.Arabic: {
          return (
            <div className="flex items-center justify-center">
              <SaLogo className="size-7" />
            </div>
          );
        }
        case API_LOCALES.English: {
          return (
            <div className="flex items-center justify-center">
              <UsLogo className="size-7" />
            </div>
          );
        }
        default: {
          return 'No Locale';
        }
      }
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
