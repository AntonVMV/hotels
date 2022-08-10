import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import { LoginModal } from "./LoginModal/LoginModal";
import { RegisterModal } from "./RegisterModal/RegisterModal";
import { Portal } from "../../Portal/Portal";
import { PopUp } from "../PopUp/PopUp";
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { useNavigate } from "react-router-dom";
import { clearError } from "../../store/slices/authSlice";
import cn from "classnames";
import styles from "./Modal.module.css";

interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  closeHnd: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  className,
  closeHnd,
  ...props
}) => {
  const [modalType, setModalType] = useState<"login" | "register">("login");

  const { data, loading, error } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      closeHnd();
      navigate("/");
    }
  }, [data, loading, closeHnd, navigate]);

  const switchModal = () => {
    setModalType((prev) => (prev === "login" ? "register" : "login"));
  };

  const cancelHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    closeHnd();
  };

  return (
    <div className={cn(styles.modal, className)} {...props}>
      {modalType === "login" ? (
        <LoginModal closeHnd={cancelHandler} switchHnd={switchModal} />
      ) : (
        <RegisterModal closeHnd={cancelHandler} switchHnd={switchModal} />
      )}
      {error && (
        <Portal>
          <PopUp isActive={!!error} closeHndl={() => dispatch(clearError())}>
            {error}
          </PopUp>
        </Portal>
      )}
    </div>
  );
};
