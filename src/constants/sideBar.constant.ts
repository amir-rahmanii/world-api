import type { Messages } from 'next-intl';

type SideBarNavTitlesKey =
  keyof Messages['documentationPage']['sideBar']['sideBarNavLink']['titles'];

type SideBarNavLinkChildKey =
  keyof Messages['documentationPage']['sideBar']['sideBarNavLink']['links'];

export interface SideBarNavChild {
  title: SideBarNavLinkChildKey;
  path: string;
  new?: boolean;
}

export interface SideBarNavLink {
  id: number;
  title: SideBarNavTitlesKey;
  children: SideBarNavChild[];
}

export const SIDEBAR_NAV_LINKS: SideBarNavLink[] = [
  {
    id: 1,
    title: 'serviceDescription',
    children: [
      { title: 'about', path: '/documentation/about' },
      { title: 'changeLanguage', path: '/documentation/change-language' },
    ],
  },
  {
    id: 2,
    title: 'countryInfoDocumentation',
    children: [
      { title: 'getAllCountries', path: '/documentation/countries' },
      { title: 'getById', path: '/documentation/countries/get-with-id' },
      { title: 'getByName', path: '/documentation/countries/get-with-name' },
      { title: 'getByIso2', path: '/documentation/countries/get-with-iso2' },
      { title: 'getByIso3', path: '/documentation/countries/get-with-iso3' },
      {
        title: 'getByCallingCode',
        path: '/documentation/countries/get-with-calling-code',
      },
      {
        title: 'getByContinent',
        path: '/documentation/countries/get-with-continent',
        new: true,
      },
    ],
  },
  {
    id: 3,
    title: 'cityInfoDocumentation',
    children: [
      { title: 'getAllCities', path: '/documentation/cities', new: true },
      {
        title: 'getCitiesByCountryId',
        path: '/documentation/cities/get-cities-with-countryId',
        new: true,
      },
    ],
  },
  {
    id: 4,
    title: 'supportAndFAQ',
    children: [
      { title: 'frequentlyAskedQuestions', path: '/documentation/faq' },
      { title: 'feedback', path: '/documentation/feedback' },
      { title: 'support', path: '/documentation/support' },
    ],
  },
];
