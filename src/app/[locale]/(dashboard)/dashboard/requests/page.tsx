import type { Metadata } from "next";

import { getUserRequests } from "@/supabase/getUserRequests";
import React from "react";

import { Columns } from "../_components/Columns";
import { DataTable } from "../_components/DataTable";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | ادمین پنل | درخواست های کاربران API",
};

export default async function Requestpage({ searchParams }: Props) {
  const currSearchParams = await searchParams;

  const page = Number(currSearchParams.page) || 1;
  const limit = Number(currSearchParams.limit) || 10;
  const apiKey =
    typeof currSearchParams.apiKey === "string"
      ? currSearchParams.apiKey
      : undefined;
  const order =
    currSearchParams.order === "asc" || currSearchParams.order === "desc"
      ? currSearchParams.order
      : undefined;
  const userRequests = await getUserRequests(page, limit, apiKey, order);

  return (
    <div dir="ltr">
      <h1>User Requests Report</h1>
      <DataTable
        data={userRequests?.data ?? []}
        limit={limit}
        page={page}
        queryKeySearchBar="apiKey"
        columns={Columns}
        placeholderSearchBar="Api key Search..."
        rowCount={userRequests?.count ?? 0}
      />
    </div>
  );
}
