import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none [&_svg]:pointer-events-none  shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-main text-base-light hover:bg-primary-hover focus:bg-primary-pressed disabled:bg-primary-300 dark:disabled:bg-primary-900 dark:disabled:text-gray-500",
        pryOutline:
          "text-primary-main border-[2px] border-primary-main hover:border-primary-hover hover:bg-primary-50 hover:text-primary-hover focus:text-primary-pressed focus:bg-transparent focus:border-primary-pressed disabled:border-primary-300 disabled:text-primary-300",
        grey: "text-gray-500 border-[2px] border-gray-300 hover:text-gray-600 hover:bg-gray-25 focus:text-gray-700 disabled:text-gray-300",
        secondary:
          "bg-secondary-main text-base-light hover:bg-secondary-600 focus:bg-secondary-700 disabled:bg-secondary-300",
        error:
          "bg-error-main text-base-light hover:bg-error-hover focus:bg-error-pressed disabled:bg-error-300",
        ghost:
          "text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:text-gray-700 focus:bg-transparent disabled:text-gray-300",
        errorOutline:
          "border-[2px] border-error-main text-error-main hover:bg-error-25 hover:text-error-hover hover:border-error-hover focus:text-error-pressed focus:border-error-pressed focus:bg-transparent disabled:border-error-300 disabled:text-error-300 ",

        pryLink:
          "text-primary-main hover:text-primary-hover focus:text-primary-pressed disabled:text-primary-300 ",
        successLink:
          "text-success-main hover:text-success-600 focus:text-success-700 disabled:text-success-300 ",
        secLink:
          "text-warning-main hover:text-warning-600 focus:text-warning-700 disabled:text-warning-300 ",
      },
      size: {
        md: "h-12 py-3 px-6 [&_svg:not([class*='size-'])]:size-6 text-[16px] font-medium rounded-[12px] gap-2",
        sm: "h-9 text-sm py-2 px-3 font-semibold [&_svg:not([class*='size-'])]:size-5 rounded-[6px] gap-2",
        // lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-[8px] [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
