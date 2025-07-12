import clsx from "clsx";
import { forwardRef, type HTMLAttributes } from "react";

type Variant =
  | "display-2xl"
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "display-xs"
  | "text-6xl"
  | "text-xl"
  | "text-lg"
  | "text-md"
  | "text-sm"
  | "text-xs";

type FontWeight = "regular" | "medium" | "semibold" | "bold";

type CustomProps = {
  variant?: Variant;
  fontWeight?: FontWeight;
  color?: string;
  truncate?: boolean;
};

interface ParagraphProps
  extends React.DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    CustomProps {}

const Typography = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      className,
      children,
      variant = "display-xl",
      color = "text-base-dark",
      truncate,
      fontWeight,
      ...rest
    },
    ref,
  ) => {
    return (
      <p
        ref={ref}
        className={clsx(
          variantStyleMap[variant],
          fontWeight ? fontWeightStyleMap[fontWeight] : undefined,
          {
            "overflow-hidden text-ellipsis max-w-full whitespace-nowrap":
              truncate,
          },
          color,
          className,
        )}
        {...rest}
      >
        {children}
      </p>
    );
  },
);
Typography.displayName = "Typography";

export default Typography;

const variantStyleMap: { [k in Variant]: string } = {
  "display-2xl": "text-[72px] leading-[90px]",
  "display-xl": "text-[60px] leading-[72px]",
  "display-lg": "text-[48px] leading-[60px]",
  "display-md": "text-[36px] leading-[44px] ",
  "display-sm": "text-[30px] leading-[38px]",
  "display-xs": "text-[24px] leading-[32px]",
  "text-6xl": "text-[60px] leading-[4.625rem]",
  "text-xl": "text-[20px] leading-[30px]",
  "text-lg": "text-[18px] leading-[28px] ",
  "text-md": "text-[16px] leading-[24px] ",
  "text-sm": "text-[14px] leading-[20px]",
  "text-xs": "text-[12px] leading-[18px]",
};

const fontWeightStyleMap: { [k in FontWeight]: string } = {
  regular: "font-[400]",
  medium: "font-[500]",
  semibold: "font-[600]",
  bold: "font-[700]",
};
