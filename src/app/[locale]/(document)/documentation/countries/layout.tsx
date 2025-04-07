import React from "react";

import ApiErrorMessage from "./_components/ApiErrorMessage";

export interface ApiError {
  title: string;
  message: string;
  status?: number;
}

const errorData: ApiError = {
  title: "🔴 خطای عدم ارسال یا نامعتبر بودن API key",
  message: "API key is missing or invalid. Please provide a valid API key.",
  status: 401,
};

export default function Countrieslayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ApiErrorMessage {...errorData} />
    </>
  );
}
