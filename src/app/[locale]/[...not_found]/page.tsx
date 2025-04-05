import type { Metadata } from "next";

import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "وب سرویس اطلاعات کشورها | صفحه 404",
};

const NotFoundCatchAll = () => notFound();

export default NotFoundCatchAll;
