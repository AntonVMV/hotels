import cn from "classnames";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { links } from "../../data/LinksData";
import { Login } from "../../components/Login/Login";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import styles from "./Header.module.css";
import { useAppSelector } from "../../hooks/storeHooks";
import { useEffect } from "react";

export const Header = () => {
  const { data } = useAppSelector((state) => state.auth);

  useEffect(() => {}, [data]);

  return (
    <header className={styles.header}>
      <div className={cn(styles.header_wrapper, "wrapper")}>
        <Link to="/" className={styles.logo}>
          LOGO
        </Link>
        <NavBar links={links} />
        <div className={styles.userbar}>{data ? <UserMenu /> : <Login />}</div>
      </div>
    </header>
  );
};
