import React from "react";

import { CopyButton } from "./CopyButton";

export default function CodeBlock({ code }: { code: string }) {
  return (
    <div className="relative bg-accent p-4 rounded-lg my-10">
      <CopyButton className="absolute top-3 right-3" text={code} />
      <pre dir="ltr" className="text-start overflow-auto whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  );
}
