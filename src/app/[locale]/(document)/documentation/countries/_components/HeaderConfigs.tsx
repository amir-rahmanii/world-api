import {
  HEADER_CONFIGS,
  TABLE_HEADERS_HEADER_CONFIGS,
} from "@/constants/headerConfigs.constant";
import { useTranslations } from "next-intl";
import React from "react";

import Table from "../../_components/Table";

export default function HeaderConfigs() {
  const tHeaderConfigsDesc = useTranslations(
    "documentationPage.headerConfigs.headerConfigsDesc",
  );
  const tHeaderConfigs = useTranslations("documentationPage.headerConfigs");
  return (
    <>
      <h4>{tHeaderConfigs("title")}</h4>
      <Table tableHeaders={TABLE_HEADERS_HEADER_CONFIGS}>
        <tbody>
          {HEADER_CONFIGS.map(
            ({ name, value, description, required, defaultValue }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{value}</td>
                <td>{tHeaderConfigsDesc(description)}</td>
                <td>{required ? "✅" : "❌"}</td>
                <td>{defaultValue ?? <code>null</code>}</td>
              </tr>
            ),
          )}
        </tbody>
      </Table>
    </>
  );
}
