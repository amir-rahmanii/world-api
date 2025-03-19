import React from "react";

import PaginationButton from "./documentation/+components/PaginationButton";
import SideBar from "./documentation/+components/SideBar";

export interface SideBarNavLink {
  id: number;
  title: string;
  children: { title: string; path: string }[];
}

const sideBarNavLinks: SideBarNavLink[] = [
  {
    id: 1,
    title: "توضیحات وب سرویس",
    children: [
      { title: "توضیحات", path: "/documentation/about" },
      { title: "تغییر زبان", path: "/documentation/change-language" },
    ],
  },
  {
    id: 2,
    title: "مستندات اطلاعات کشورها",
    children: [
      { title: "دریافت تمام کشورها", path: "/documentation/countries" },
      { title: "دریافت کشورها با ID", path: "/documentation/countries/id" },
    ],
  },
  {
    id: 3,
    title: "پشتیبانی و سوالات متداول",
    children: [
      { title: "سوالات متداول", path: "/documentation/faq" },
      { title: "پشتیبانی", path: "/documentation/support" },
    ],
  },
];

export default function Documantionlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-[auto_1fr] gap-6">
      <div className="sticky top-24 h-[calc(100vh-8rem)]">
        <SideBar sideBarNavLinks={sideBarNavLinks} />
      </div>
      <div className="flex flex-col border border-accent rounded-lg p-8">
        {children}
        <PaginationButton sideBarNavLinks={sideBarNavLinks} />
      </div>
    </div>
  );
}
