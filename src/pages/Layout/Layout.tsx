import { Outlet } from "react-router-dom";
import { Footer } from "../../pageComponents/Footer/Footer";
import { Header } from "../../pageComponents/Header/Header";
import styles from "./Layout.module.css";

export const Layout = () => {
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
