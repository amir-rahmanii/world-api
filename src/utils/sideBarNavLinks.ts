export interface SideBarNavLink {
  id: number;
  title: string;
  children: { title: string; path: string }[];
}

export const sideBarNavLinks: SideBarNavLink[] = [
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
      {
        title: "دریافت کشورها با id",
        path: "/documentation/countries/get-with-id",
      },
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
