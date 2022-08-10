import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { Portal } from "../../Portal/Portal";
import { Modal } from "../Modals/Modal";
import cn from "classnames";
import styles from "./Login.module.css";

interface LoginProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Login: React.FC<LoginProps> = ({ className }) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <div
      className={cn(styles.login, className)}
      onClick={() => setIsModal(true)}
    >
      <p className="text-l">Sign in</p>
      {isModal && (
        <Portal>
          <Modal closeHnd={() => setIsModal(false)} />
        </Portal>
      )}
    </div>
  );
};
