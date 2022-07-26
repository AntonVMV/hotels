import { ReactComponent as UserIcon } from "./user-icon.svg";
import { logout } from "../../store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { Button } from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Portal } from "../../Portal/Portal";
import { ConfirmModal } from "../Modals/ConfirmModal/ConfirmModal";
import cn from "classnames";
import styles from "./UserMenu.module.css";

export const UserMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModal, setModal] = useState(false);
  const { data } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (isMenuOpen && !ref.current?.contains(e.target as HTMLElement)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", outsideClick);
    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, [isMenuOpen]);

  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem("HOTELS_AUTH_TOKEN");
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className={styles.container} ref={ref}>
        <div
          className={styles.user}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <p>{data?.username}</p>
          <UserIcon />
        </div>

        {isMenuOpen && (
          <div className={styles.dropdown}>
            <Link
              to="/favorites"
              className={cn(styles.link, "text-l")}
              onClick={() => setIsMenuOpen(false)}
            >
              My Favorites
            </Link>
            <Button formType="ghost" onClick={() => setModal(true)}>
              Logout
            </Button>
          </div>
        )}
      </div>
      <Portal isActive={isModal}>
        <ConfirmModal
          closeHnd={() => setModal(false)}
          sumbitHnd={logoutHandler}
        >
          Are you sure want to log out?
        </ConfirmModal>
      </Portal>
    </>
  );
};
