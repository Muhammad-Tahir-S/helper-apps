import * as React from "react";

import { cn } from "@/shared/lib/utils";

import CheckCircle from "../../assets/icons/check-circle.svg?react";
import RemoveCircle from "../../assets/icons/remove-circle.svg?react";
import Typography from "../typography";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  helperText?: string;
}

function Textarea({ className, label, helperText, ...props }: TextareaProps) {
  const isInvalid = props["aria-invalid"] === true;
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex flex-col gap-2">
        <Typography variant="text-sm/medium" className="dark:text-gray-100">
          {label}
        </Typography>
        <textarea
          data-slot="textarea"
          className={cn(
            "placeholder:text-gray-400 dark:bg-gray-850  bg-gray-100  dark:aria-invalid:ring-destructive/40 a flex field-sizing-content min-h-31.5 w-full rounded-[12px] px-3.5 py-3 text-base-dark dark:text-primary-50 shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400 md:text-sm font-medium",
            " focus:border-primary-400 focus:bg-transparent focus:dark:border-primary-hover focus:border-[2px]",
            "[&:not(:focus):not(:placeholder-shown)]:bg-primary-25 dark:[&:not(:focus):not(:placeholder-shown)]:bg-transparent",
            "aria-invalid:border-error-main dark:aria-invalid:border-error-main dark:aria-invalid:text-error-main ",
            className,
          )}
          {...props}
        />
      </div>
      <div className="flex gap-0.5">
        {isInvalid ? (
          <RemoveCircle className="fill-error-main w-4.5 h-4.5" />
        ) : (
          <CheckCircle className="fill-gray-400 w-4.5 h-4.5" />
        )}
        <Typography
          variant="text-sm/medium"
          className={cn(isInvalid ? "text-error-main" : "text-gray-500")}
        >
          {helperText}
        </Typography>
      </div>
    </div>
  );
}

export { Textarea };
