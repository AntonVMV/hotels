import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { BurgerElement } from "../BurgerElement/BurgerElement";
import styles from "./NavBar.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";

interface NavBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  links: { linkName: string; linkTo: string }[];
}

export const NavBar: React.FC<NavBarProps> = ({ links, className }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <BurgerElement
        isActive={isMenuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
        className={styles.burger_element}
      />

      <nav
        className={cn(styles.navigaton, className, {
          [styles.active]: isMenuOpen,
        })}
      >
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
    </>
  );
};
