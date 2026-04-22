import type React from "react";
import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "3d-blue" | "3d-green";
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
  extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
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
      "inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-medium transition-all duration-200 rounded-xl whitespace-nowrap font-inter shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]",
      {
        "bg-brand-primary hover:bg-brand-primary-hover text-white":
          variant === "primary",
        "bg-white hover:bg-gray-100 text-gray-900 border-gray-300":
          variant === "secondary",
        "bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide border-b-4 border-blue-800 shadow-[0_4px_0_0_#1e40af] active:translate-y-[2px] active:shadow-none active:border-b-2":
          variant === "3d-blue",
        "bg-[#10B981] hover:bg-[#059669] text-white font-bold tracking-wide border-b-4 border-[#047857] shadow-[0_4px_0_0_#047857] active:translate-y-[2px] active:shadow-none active:border-b-2":
          variant === "3d-green",
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
export const buttonVariants = ({
  variant = "primary",
  className,
}: {
  variant?: "primary" | "secondary" | "3d-blue" | "3d-green";
  className?: string;
} = {}) => {
  return cn(
    "inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-medium transition-all duration-200 rounded-xl whitespace-nowrap font-inter shadow-3d border border-black/[.15] hover:shadow-3d-hover hover:translate-y-[1px] active:shadow-3d-active active:translate-y-[3px]",
    {
      "bg-brand-primary hover:bg-brand-primary-hover text-white":
        variant === "primary",
      "bg-white hover:bg-gray-100 text-gray-900 border-gray-300":
        variant === "secondary",
      "bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide border-b-4 border-blue-800 shadow-[0_4px_0_0_#1e40af] active:translate-y-[2px] active:shadow-none active:border-b-2":
        variant === "3d-blue",
      "bg-[#10B981] hover:bg-[#059669] text-white font-bold tracking-wide border-b-4 border-[#047857] shadow-[0_4px_0_0_#047857] active:translate-y-[2px] active:shadow-none active:border-b-2":
        variant === "3d-green",
    },
    className,
  );
};
