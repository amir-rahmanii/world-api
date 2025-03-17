import React from "react";

import SideBar from "./documentation/+components/SideBar";

export default function Documantionlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-[auto_1fr] gap-6">
      <div className="sticky top-24 h-[calc(100vh-8rem)]">
        <SideBar />
      </div>
      <div className="flex flex-col border border-accent rounded-lg p-8">
        {children}
      </div>
    </div>
  );
}
