import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../../pageComponents/Footer/Footer";
import { Header } from "../../pageComponents/Header/Header";
import styles from "./Layout.module.css";

export const Layout = () => {
  const { pathname } = useLocation();

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
