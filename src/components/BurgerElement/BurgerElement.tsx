import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./BurgerElement.module.css";

interface BurgerElementProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isActive: boolean;
}

export const BurgerElement: React.FC<BurgerElementProps> = ({
  isActive,

  className,
  ...props
}) => {
  return (
    <div
      className={cn(styles.burger, className, {
        [styles.active]: isActive,
      })}
      {...props}
    >
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  );
};
