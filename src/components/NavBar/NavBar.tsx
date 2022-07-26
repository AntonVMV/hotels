import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./NavBar.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

interface NavBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  links: { linkName: string; linkTo: string }[];
}

export const NavBar: React.FC<NavBarProps> = ({ links, className }) => {
  return (
    <nav className={cn(styles.navigaton, className)}>
      <ul className={styles.navList}>
        {links.map(({ linkName, linkTo }, index) => {
          return (
            <Link
              to={linkTo}
              key={index}
              className={cn(styles.navLink, "text-l")}
            >
              {linkName}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
