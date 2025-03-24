import React from "react";

import PaginationButton from "./documentation/+components/PaginationButton";
import SideBar from "./documentation/+components/SideBar";

export default function Documantionlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 desktop:grid-cols-[auto_1fr] gap-6">
      <div className="desktop:sticky desktop:top-24 desktop:h-[calc(100vh-8rem)]">
        <SideBar />
      </div>
      <div className="flex flex-col border border-accent rounded-lg p-8">
        {children}
        <PaginationButton />
      </div>
    </div>
  );
}
