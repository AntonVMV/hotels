import { ReactComponent as PlayStore } from "./PlayStore.svg";
import { ReactComponent as AppStore } from "./AppStore.svg";
import { ReactComponent as Facebook } from "./Facebook.svg";
import { ReactComponent as Instagram } from "./Instagram.svg";
import { ReactComponent as Twitter } from "./Twitter.svg";
import { ReactComponent as Linkedin } from "./Linkedin.svg";
import { NewsLetter } from "../NewsLetter/NewsLetter";
import cn from "classnames";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NewsLetter />
      <div className={cn(styles.content, "wrapper")}>
        <div className={styles.footer_column}>
          <Link to="/" className={cn(styles.logo, "title-l")}>
            LOGO
          </Link>
          <p className={cn(styles.description, "text-m")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <div className={styles.stores}>
            <Link to="/" className={styles.store_link}>
              <PlayStore />
              PlayStore
            </Link>
            <Link to="/" className={styles.store_link}>
              <AppStore />
              AppleStore
            </Link>
          </div>
        </div>
        <div className={styles.footer_column}>
          <h3 className={cn(styles.subtitle, "title-xs")}>COMPANY</h3>
          <Link to="/" className={cn(styles.link, "text-m")}>
            About Us
          </Link>
          <Link to="/" className={cn(styles.link, "text-m")}>
            Legal Information
          </Link>
          <Link to="/" className={cn(styles.link, "text-m")}>
            Contact Us
          </Link>
          <Link to="/" className={cn(styles.link, "text-m")}>
            Blogs
          </Link>
        </div>
        <div className={styles.footer_column}>
          <h3 className={cn(styles.subtitle, "title-xs")}>HELP CENTER</h3>
          <Link to="/" className={cn(styles.link, "text-m")}>
            Find a Property
          </Link>
          <Link to="/" className={cn(styles.link, "text-m")}>
            How To Host?
          </Link>
          <Link to="/" className={cn(styles.link, "text-m")}>
            Why Us?
          </Link>
          <Link to="/" className={cn(styles.link, "text-m")}>
            FAQs
          </Link>
          <Link to="/" className={cn(styles.link, "text-m")}>
            Rental Guides
          </Link>
        </div>
        <div className={styles.footer_column}>
          <h3 className={cn(styles.subtitle, "title-xs")}>CONTACT INFO</h3>
          <p className="text-m">Phone: 1234567890</p>
          <p className="text-m">Email: company@email.com</p>
          <p className="text-m">Location: 100 Smart Street, LA, USA</p>
          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
            >
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
            >
              <Instagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={cn(styles.copyright, "wrapper")}>
        <p className="text-l">
          © 2022 thecreation.design | All rights raserved
        </p>
        <p className="text-l">Created with love by thecreation.design</p>
      </div>
    </footer>
  );
};
