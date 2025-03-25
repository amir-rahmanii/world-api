import React from "react";

import PaginationButton from "./documentation/+components/PaginationButton";
import SideBar from "./documentation/+components/SideBar";

export default function Documantionlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 wide:grid-cols-[auto_1fr] gap-6">
      <div className="wide:sticky wide:top-24 wide:h-[calc(100vh-8rem)]">
        <SideBar />
      </div>
      <div className="flex flex-col border border-accent rounded-lg p-4 desktop:p-6 wide:p-8">
        {children}
        <PaginationButton />
      </div>
    </div>
  );
}
