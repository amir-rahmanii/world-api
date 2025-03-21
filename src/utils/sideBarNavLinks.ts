export interface SideBarNavLink {
  id: number;
  title: string;
  children: { title: string; path: string; new?: boolean}[];

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
      {
        title: "دریافت کشورها با name",
        path: "/documentation/countries/get-with-name",
      },
      {
        title: "دریافت کشورها با iso2",
        path: "/documentation/countries/get-with-iso2",
      },
      {
        title: "دریافت کشورها با iso3",
        path: "/documentation/countries/get-with-iso3",
        new: true,
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
