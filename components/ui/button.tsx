import type React from "react";
import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  /**
   * Accessibility label for screen readers
   * Required for buttons without text content
   */
  "aria-label"?: string;
  disabled?: boolean;
}

export interface ButtonAsButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

export interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      showArrow = false,
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonStyles = cn(
      "inline-flex items-center justify-center px-5 md:px-6 py-2 md:py-2.5 text-sm md:text-base font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
      {
        "bg-[#3e73c4] hover:bg-[#305ca3] text-white": variant === "primary",
        "bg-white hover:bg-gray-100 text-gray-900 border border-gray-300":
          variant === "secondary",
        "w-full": fullWidth,
      },
      className,
    );

    const content = (
      <>
        <span>{children}</span>
        {showArrow && <ArrowRight className="ml-2 -mr-1 w-5 h-5" />}
      </>
    );

    if ("href" in props && props.href !== undefined) {
      return (
        <Link href={props.href} className={buttonStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button
        className={buttonStyles}
        ref={ref}
        {...(props as ButtonAsButtonProps)}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };

// Exporting buttonVariants to satisfy Shadcn component imports
export const buttonVariants = ({ variant = "primary", className }: { variant?: "primary" | "secondary"; className?: string } = {}) => {
  return cn(
    "inline-flex items-center justify-center px-5 md:px-6 py-2 md:py-2.5 text-sm md:text-base font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
    {
      "bg-[#3e73c4] hover:bg-[#305ca3] text-white": variant === "primary",
      "bg-white hover:bg-gray-100 text-gray-900 border border-gray-300":
        variant === "secondary",
    },
    className,
  );
};
