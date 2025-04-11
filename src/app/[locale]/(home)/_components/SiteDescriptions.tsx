import React from "react";

import { SITE_DESCRIPTIONS } from "../../../../constants/siteDescription.constant";
import SiteDescriptionBox from "./SiteDescriptionBox";

export default function SiteDescriptions() {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-3">
      {SITE_DESCRIPTIONS.map((siteDesc) => (
        <SiteDescriptionBox key={siteDesc.featureKey} {...siteDesc} />
      ))}
    </div>
  );
}
