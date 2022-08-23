import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import cn from "classnames";
import styles from "./Button.module.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  formType?: "main" | "ghost" | "round";
  color?: "primary" | "secondary";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  formType = "main",
  color = "primary",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.main]: formType === "main",
        [styles.ghost]: formType === "ghost",
        [styles.round]: formType === "round",
        [styles.primary]: color === "primary",
        [styles.secondary]: color === "secondary",
        [styles.disabled]: disabled,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
