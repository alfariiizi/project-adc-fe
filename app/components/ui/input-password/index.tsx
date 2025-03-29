"use client";

import { useState } from "react";
import { Input, type InputProps, type InputType } from "../input";
import { Eye, EyeOff } from "lucide-react";

type Props<T extends InputType = "text"> = Omit<
  InputProps<T>,
  "type" | "endAdornment" | "value" | "onValueChange"
> & {
  value: string | undefined;
  onValueChange?: (value: string | undefined) => void;
};

export default function InputPassword<T extends InputType = "text">({
  value,
  onValueChange,
  ...props
}: Props<T>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      value={value}
      onValueChange={onValueChange}
      endAdornment={
        <button
          tabIndex={-1}
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <Eye className="text-neutral-500 size-4" />
          ) : (
            <EyeOff className="text-neutral-500 size-4" />
          )}
        </button>
      }
      {...props}
    />
  );
}

export { InputPassword };
