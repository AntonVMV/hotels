import cn from "classnames";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import { links } from "../../data/LinksData";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cn(styles.header_wrapper, "wrapper")}>
        <Link to="/" className={styles.logo}>
          LOGO
        </Link>
        <NavBar links={links} />
      </div>
    </header>
  );
};
