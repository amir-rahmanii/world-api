"use client";

import type { ColumnDef, ColumnFiltersState } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import { DataTableColumnToggle } from "./DataTableColumnToggle";
import DataTablePagination from "./DataTablePagination";
import { SearchBar } from "./SearchBar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page: number;
  limit: number;
  rowCount: number;
  queryKeySearchBar: string;
  placeholderSearchBar: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  page,
  limit,
  rowCount,
  queryKeySearchBar,
  placeholderSearchBar,
}: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState({
    pageIndex: page - 1,
    pageSize: limit,
  });
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    manualPagination: true,
    manualSorting: true,
    rowCount,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination,
      columnFilters,
    },
  });

  return (
    <div className="py-4">
      <div className="flex flex-wrap items-center gap-4 pb-8">
        <SearchBar
          className="w-full desktop:w-[350px]"
          queryKey={queryKeySearchBar}
          tableFirstPage={() => table.setPageIndex(0)}
          debounce={500}
          placeholder={placeholderSearchBar}
        />
        {rowCount > 0 ? (
          <p>
            Showing{" "}
            <strong>
              {pagination.pageIndex * pagination.pageSize + 1}–
              {Math.min(
                (pagination.pageIndex + 1) * pagination.pageSize,
                rowCount,
              )}
            </strong>{" "}
            of <strong>{rowCount}</strong> entries.
          </p>
        ) : (
          <p>No entries found.</p>
        )}
        <DataTableColumnToggle table={table} />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className="text-center py-3 text-base font-bold"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                data-state={row.getIsSelected() && "selected"}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    className="text-center text-xs whitespace-normal break-words p-3"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="h-24 text-center" colSpan={columns.length}>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DataTablePagination table={table} />
    </div>
  );
}
