import { OTPInput, OTPInputContext, REGEXP_ONLY_DIGITS } from "input-otp";
import { MinusIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

import Typography from "../typography";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName,
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-2 data-[active=true]:border-primary-400 dark:data-[active=true]:border-primary-hover aria-invalid:border-2 aria-invalid:text-error-main aria-invalid:bg-transparent aria-invalid:border-error-main dark:aria-invalid:border-error-main dark:aria-invalid:text-error-main dark:bg-gray-850 data-[active=true]:bg-transparent relative flex h-16 w-16  items-center justify-center text-5xl font-medium shadow-xs py-0.5 px-2 leading-[60px] transition-all outline-none rounded-[12px] data-[active=true]:z-10 data-[active=true]:",
        char
          ? "bg-primary-25 text-base-dark dark:text-primary-50"
          : "bg-gray-100 text-gray-400 dark:text-gray-500 ",
        className,
      )}
      {...props}
    >
      {char ? char : <span className="">0</span>}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

function VerificationInput({
  digits = 4,
  size = "sm",
  label,
  helperText,
}: {
  digits?: 4 | 6;
  size?: "sm" | "md";
  label: string;
  helperText?: string;
}) {
  const slotSizeClass = size === "md" ? "h-[80px] w-[80px]" : "h-16 w-16";

  return (
    <div className="flex flex-col gap-1.5">
      <Typography variant="text-sm/medium" className="text-gray-700">
        {label}
      </Typography>
      <InputOTP maxLength={digits} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          {Array.from({ length: digits === 4 ? 4 : 3 }).map((_, i) => (
            <InputOTPSlot key={i} index={i} className={slotSizeClass} />
          ))}
        </InputOTPGroup>

        {digits === 6 && (
          <>
            <InputOTPSeparator />
            <InputOTPGroup>
              {Array.from({ length: 3 }).map((_, i) => (
                <InputOTPSlot
                  key={i + 3}
                  index={i + 3}
                  className={slotSizeClass}
                />
              ))}
            </InputOTPGroup>
          </>
        )}
      </InputOTP>
      <Typography className="text-gray-600" variant="text-sm/regular">
        {helperText}
      </Typography>
    </div>
  );
}

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  VerificationInput,
};
