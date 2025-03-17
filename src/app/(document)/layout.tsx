import React from "react";
import SideBar from "./documentation/+components/SideBar";

export default function Documantionlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6">
      <div className="sticky top-32 min-h-[400px]">
        <SideBar />
      </div>
      <div className="flex flex-col border border-accent rounded-lg p-8">
        {children}
      </div>
    </div>
  );
}
