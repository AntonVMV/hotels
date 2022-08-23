import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import styles from "./PopUp.module.css";

interface PopUpProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  closeHndl: () => void;
}

const popupMotion = {
  hidden: {
    x: "50vw",
  },
  visible: {
    x: 0,
  },
};

export const PopUp: React.FC<PopUpProps> = ({
  children,
  closeHndl,
  className,
}) => {
  useEffect(() => {
    const id = setTimeout(() => {
      closeHndl();
    }, 3000);

    return () => clearTimeout(id);
  }, [closeHndl]);

  return (
    <motion.div
      className={cn(styles.popup, className)}
      variants={popupMotion}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.div>
  );
};
