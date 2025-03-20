import React from "react";

import ErrorUnauthorized from "./+component/ErrorUnauthorized/ErrorUnauthorized";

export default function Countrieslayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <ErrorUnauthorized />
    </>
  );
}
