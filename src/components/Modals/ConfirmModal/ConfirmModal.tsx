import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "../../Button/Button";
import { motion } from "framer-motion";
import cn from "classnames";
import styles from "./ConfirmModal.module.css";

const bgAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

interface ConfirmModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  closeHnd: () => void;
  sumbitHnd: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  sumbitHnd,
  closeHnd,
  children,
  className,
}) => {
  return (
    <motion.div
      className={styles.background}
      variants={bgAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className={cn(styles.modal, className)}>
        <div className={styles.content}>{children}</div>
        <div className={styles.controls}>
          <Button formType="ghost" onClick={sumbitHnd}>
            Submit
          </Button>
          <Button formType="ghost" onClick={closeHnd}>
            Cancel
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
