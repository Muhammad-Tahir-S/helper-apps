import { X } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";

export default function CloseButton({
  size = "sm",
  variant = "primary",
}: {
  size?: "sm" | "md" | "lg";
  variant?: "gray" | "primary";
}) {
  return (
    <Button
      className={cn(
        variant === "primary"
          ? "text-primary-main bg-transparent hover:bg-primary-50 hover:text-primary-hover focus:bg-transparent focus:text-primary-pressed "
          : "text-gray-500 bg-transparent hover:bg-gray-25 hover:text-gray-600 focus:bg-transparent focus:text-black",
        size === "lg"
          ? "h-11 w-11 [&_svg:not([class*='size-'])]:size-6"
          : size === "md"
            ? "h-10 w-10"
            : "",
      )}
      size="icon"
    >
      <X />
    </Button>
  );
}
