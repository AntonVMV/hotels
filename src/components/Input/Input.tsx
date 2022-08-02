import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.css";
import { FieldError } from "react-hook-form";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className={cn(styles.input_wrapper, className)}>
        <input type="text" ref={ref} className={styles.input} {...props} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);
