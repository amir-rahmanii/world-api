import React from "react";

import Table from "../../../+components/Table";

interface HeaderConfig {
  name: string;
  value: string;
  description: string;
  required: boolean;
  defaultValue: string | null;
}

const headersConfigs: HeaderConfig[] = [
  {
    name: "X-API-Key",
    value: "your-api-key",
    description: "کلید API معتبر شما",
    required: true,
    defaultValue: null,
  },
  {
    name: "Accept-Language",
    value: "fa, en, ar",
    description: "تعیین زبان پاسخ",
    required: false,
    defaultValue: "زبان سیستم عامل ",
  },
];

const tableHeaders: string[] = [
  "نام هدر",
  "مقدار",
  "توضیحات",
  "اجباری",
  "پیش فرض",
];

export default function HeaderConfigs() {
  return (
    <>
      <h4>هدرهای مورد نیاز:</h4>
      <Table tableHeaders={tableHeaders}>
        <tbody>
          {headersConfigs.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.value}</td>
              <td>{item.description}</td>
              <td>{item.required ? "بله" : "خیر"}</td>
              <td>{item.defaultValue ?? <code>null</code>}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
