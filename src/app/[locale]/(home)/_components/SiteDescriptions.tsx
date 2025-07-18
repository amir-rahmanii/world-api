import React from 'react';

import { SITE_DESCRIPTIONS } from '../../../../constants/siteDescription.constant';
import SiteDescriptionBox from './SiteDescriptionBox';

export default function SiteDescriptions() {
  return (
    <div className="tablet:grid-cols-2 desktop:grid-cols-3 grid grid-cols-1 gap-3">
      {SITE_DESCRIPTIONS.map((siteDesc) => (
        <SiteDescriptionBox key={siteDesc.featureKey} {...siteDesc} />
      ))}
    </div>
  );
}
