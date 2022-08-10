import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../hooks/storeHooks";
import { Footer } from "../../pageComponents/Footer/Footer";
import { Header } from "../../pageComponents/Header/Header";
import { getUser } from "../../store/slices/authSlice";
import styles from "./Layout.module.css";

export const Layout = () => {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
