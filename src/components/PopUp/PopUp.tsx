import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect } from "react";

import cn from "classnames";
import styles from "./PopUp.module.css";

interface PopUpProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isActive: boolean;
  children: ReactNode;
  closeHndl: () => void;
}

export const PopUp: React.FC<PopUpProps> = ({
  isActive,

  children,
  closeHndl,
  className,
  ...props
}) => {
  useEffect(() => {
    const id = setTimeout(() => {
      closeHndl();
    }, 3000);
    return () => clearTimeout(id);
  }, [closeHndl]);

  return (
    <div
      className={cn(styles.popup, className, {
        [styles.active]: isActive,
      })}
      {...props}
    >
      {}
      {children}
    </div>
  );
};
