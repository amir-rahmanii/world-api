import type { ApiErrorMessageType } from "@/types/apiErrorMessage.types";

import React from "react";

import ApiErrorMessage from "./_components/ApiErrorMessage";

export interface ApiError {
  title: ApiErrorMessageType;
  message: string;
  status?: number;
}

const errorData: ApiError = {
  title: "apiKey",
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
