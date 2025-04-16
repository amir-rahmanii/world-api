"use client";

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
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface TableLib {
  setPageIndex: (page: number) => void;
  getPageCount: () => number;
  getCanPreviousPage: () => boolean;
  getCanNextPage: () => boolean;
  previousPage: () => void;
  nextPage: () => void;
  getState: () => {
    pagination: {
      pageIndex: number;
      pageSize: number;
    };
  };
  setPageSize: (size: number) => void;
}

export default function DataTablePagination({ table }: { table: TableLib }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const goToPage = (zeroBasedPage: number) => {
    const max = table.getPageCount() - 1;
    const validPage = Math.max(0, Math.min(zeroBasedPage, max));
    table.setPageIndex(validPage);
    router.push(
      `${pathname}?${createQueryString("page", String(validPage + 1))}`,
    );
  };

  const changePageSize = (value: string) => {
    const size = Number(value);
    table.setPageSize(size);
    table.setPageIndex(0); // reset to first page
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", String(size));
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  return (
    <div className="flex items-center justify-end gap-2 py-6">
      <Button
        disabled={!table.getCanPreviousPage()}
        onClick={() => goToPage(0)}
      >
        {"<<"}
      </Button>
      <Button
        disabled={!table.getCanPreviousPage()}
        onClick={() => goToPage(pageIndex - 1)}
      >
        {"<"}
      </Button>
      <Button
        disabled={!table.getCanNextPage()}
        onClick={() => goToPage(pageIndex + 1)}
      >
        {">"}
      </Button>
      <Button
        disabled={!table.getCanNextPage()}
        onClick={() => goToPage(pageCount - 1)}
      >
        {">>"}
      </Button>

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
