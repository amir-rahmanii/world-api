import React from "react";

import type { SiteDescriptionsType } from "./SiteDescriptions";

export default function SiteDescriptionBox({
  title,
  desc,
  icon: Icon,
}: SiteDescriptionsType) {
  return (
    <div className="group pointer-events-auto rounded-xl border border-accent bg-card hover:border-primary transition-all">
      <div className="flex flex-col gap-2.5 p-8">
        <Icon className="size-10 text-card-foreground group-hover:text-primary transition-all" />
        <h2 className="font-bold text-lg text-heading-foreground">{title}</h2>
        <p className="text-foreground/80 text-sm leading-6">{desc}</p>
      </div>
    </div>
  );
}
