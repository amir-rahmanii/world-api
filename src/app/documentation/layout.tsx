import React from "react";
import SideBar from "./+components/SideBar";

export default function Documantionlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
}
