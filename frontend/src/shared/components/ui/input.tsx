import * as React from "react";

import { cn } from "@/shared/lib/utils";

import Typography from "../typography";

interface InputProps extends React.ComponentProps<"input"> {
  withRightIcon?: boolean;
  withLeftIcon?: boolean;
  state?: "default" | "typing" | "disabled" | "error";
  label?: string;
  // placeholder?: string;
  buttonText?: boolean;
  helperText?: string;
}

function Input({
  className,
  type = "text",
  label,
  // withRightIcon = false,
  // withLeftIcon = false,
  // state = "default",
  // placeholder,
  // buttonText,
  // helperText,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Typography variant="text-sm" fontWeight="medium">
        {label}
      </Typography>
      <div className="flex flex-col gap-1.5">
        <input
          type={type}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-gray-500 selection:bg-primary selection:text-primary-foreground dark:bg-gray-850 border-input flex h-13 w-full min-w-0 rounded-md border bg-gray-100 px-3 py-1 text-gray-800 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className,
          )}
          {...props}
        />
      </div>
    </div>
  );
}

export { Input };
