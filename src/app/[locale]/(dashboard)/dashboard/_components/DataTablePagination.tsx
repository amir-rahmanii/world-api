"use client";

import type { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTablePagination } from "@/hooks/useTablePagination";

export default function DataTablePagination<TData>({
  table,
}: {
  table: Table<TData>;
}) {
  const { pageIndex, pageCount, goToPage, changePageSize, canNext, canPrev } =
    useTablePagination(table);

  return (
    <div className="flex items-center flex-wrap justify-center tablet:justify-end gap-5 tablet:gap-4 py-6">
      <div className="flex items-center gap-2">
        <Button disabled={!canPrev} onClick={() => goToPage(0)}>
          {"<<"}
        </Button>
        <Button disabled={!canPrev} onClick={() => goToPage(pageIndex - 1)}>
          {"<"}
        </Button>
        <Button disabled={!canNext} onClick={() => goToPage(pageIndex + 1)}>
          {">"}
        </Button>
        <Button disabled={!canNext} onClick={() => goToPage(pageCount - 1)}>
          {">>"}
        </Button>
      </div>

      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {pageIndex + 1} of {pageCount}
        </strong>
      </span>
      <Select
        dir="ltr"
        value={String(table.getState().pagination.pageSize)}
        onValueChange={changePageSize}
      >
        <SelectTrigger className="w-full desktop:w-[140px]">
          <SelectValue placeholder="Rows per page" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Rows</SelectLabel>
            {[10, 20, 30, 40, 50].map((cur) => (
              <SelectItem key={cur} value={String(cur)}>
                {cur}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
