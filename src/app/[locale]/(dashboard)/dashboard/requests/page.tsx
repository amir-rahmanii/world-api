import { getUserRequests } from "@/supabase/getUserRequests";
import React from "react";

import { Columns } from "../_components/columns";
import { DataTable } from "../_components/DataTable";

export default async function Requestpage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;
  const q = typeof searchParams?.q === "string" ? searchParams.q : undefined;
  const userRequests = await getUserRequests(page, limit, q);

  console.log(userRequests);

  return (
    <div dir="ltr">
      <h1>User Requests Report</h1>
      <DataTable
        data={userRequests?.data ?? []}
        limit={limit}
        page={page}
        columns={Columns}
        rowCount={userRequests?.count ?? 0}
      />
    </div>
  );
}
