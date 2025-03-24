export interface SideBarNavChild {
  title: string;
  path: string;
  new?: boolean;
}

export interface SideBarNavLink {
  id: number;
  title: string;
  children: SideBarNavChild[];
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
      },
      {
        title: "دریافت کشورها با پیش شماره",
        path: "/documentation/countries/get-with-calling-code",
      },
      {
        title: "دریافت کشورها با قاره",
        path: "/documentation/countries/get-with-continent",
        new: true,
      },
    ],
  },
  {
    id: 3,
    title: "مستندات اطلاعات شهرها",
    children: [
      { title: "دریافت تمام شهرها", path: "/documentation/cities", new: true },
      {
        title: "دریافت شهرها با id کشور",
        path: "/documentation/cities/get-cities-with-countryId",
        new: true,
      },
    ],
  },
  {
    id: 4,
    title: "پشتیبانی و سوالات متداول",
    children: [
      { title: "سوالات متداول", path: "/documentation/faq" },
      { title: "پشتیبانی", path: "/documentation/support" },
    ],
  },
];
