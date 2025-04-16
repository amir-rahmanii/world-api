"use client";

import type { Table } from "@tanstack/react-table";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useTablePagination<TData>(table: Table<TData>) {
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
    table.setPageIndex(0);
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", String(size));
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  return {
    pageIndex,
    pageCount,
    goToPage,
    changePageSize,
    canNext: table.getCanNextPage(),
    canPrev: table.getCanPreviousPage(),
  };
}
