"use client";
import type { InputHTMLAttributes } from "react";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 200,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  value: number | string;
  onChange: (value: number | string) => void;
  debounce?: number;
}) {
  const [value, setValue] = useState<number | string>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, debounce]);

  return (
    <Input
      {...props}
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      value={value ?? ""}
      onChange={(e) => {
        if (e.target.value === "") return setValue("");
        if (props.type === "number") {
          setValue(e.target.valueAsNumber);
        } else {
          setValue(e.target.value);
        }
      }}
    />
  );
}
