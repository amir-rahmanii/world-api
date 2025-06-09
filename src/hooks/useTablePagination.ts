"use client";

import type { Table } from "@tanstack/react-table";

import { usePathname, useRouter } from "@/i18n/navigation";

import { useCreateQueryStrings } from "./useCreateQueryStrings";

export function useTablePagination<TData>(table: Table<TData>) {
  const createParams = useCreateQueryStrings();
  const router = useRouter();
  const pathname = usePathname();

  const goToPage = (zeroBasedPage: number) => {
    const max = table.getPageCount() - 1;
    const validPage = Math.max(0, Math.min(zeroBasedPage, max));
    table.setPageIndex(validPage);
    createParams({
      router,
      pathname,
      params: [{ name: "page", value: String(validPage + 1) }],
    });
  };

  const changePageSize = (value: string) => {
    const size = Number(value);
    table.setPageSize(size);
    table.setPageIndex(0);
    createParams({
      router,
      pathname,
      params: [
        { name: "limit", value: String(size) },
        { name: "page", value: "1" },
      ],
    });
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
