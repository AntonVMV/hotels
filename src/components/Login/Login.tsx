import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { Portal } from "../../Portal/Portal";
import cn from "classnames";
import styles from "./Login.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { MLoginModal } from "../Modals/LoginModal/LoginModal";
import { MRegisterModal } from "../Modals/RegisterModal/RegisterModal";
import { PopUp } from "../PopUp/PopUp";
import { clearError } from "../../store/slices/authSlice";
import { motion, AnimatePresence } from "framer-motion";

const bgMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const formMotion = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};

interface LoginProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Login: React.FC<LoginProps> = ({ className }) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"login" | "register">("login");

  const { error, loading } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const switchModal = () => {
    setModalType((prev) => (prev === "login" ? "register" : "login"));
  };

  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsModal(false);
  };

  return (
    <>
      <div
        className={cn(styles.login, className)}
        onClick={() => setIsModal(true)}
      >
        <p className="text-l">Sign in</p>

        <Portal isActive={isModal}>
          <motion.div
            className={styles.modal}
            variants={bgMotion}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <AnimatePresence mode="wait">
              {modalType === "login" ? (
                <MLoginModal
                  variants={formMotion}
                  closeHnd={closeHandler}
                  switchHnd={switchModal}
                  exit={{ y: "100vh" }}
                  isLoading={loading}
                  key={modalType}
                />
              ) : (
                <MRegisterModal
                  variants={formMotion}
                  closeHnd={closeHandler}
                  switchHnd={switchModal}
                  exit={{ y: "100vh" }}
                  isLoading={loading}
                  key={modalType}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </Portal>
      </div>

      <Portal isActive={!!error}>
        <PopUp closeHndl={() => dispatch(clearError())}>{error}</PopUp>
      </Portal>
    </>
  );
};
