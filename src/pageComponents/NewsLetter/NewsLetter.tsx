import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { ReactComponent as SendIcon } from "./SendIcon.svg";
import cn from "classnames";
import styles from "./NewsLetter.module.css";

export const NewsLetter: React.FC = () => {
  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletter_description}>
        <h5 className={cn(styles.newsletter_title, "text-xl")}>Newsletter</h5>
        <p className={cn(styles.newsletter_test, "text-m ")}>Stay Upto Date</p>
      </div>
      <div className={styles.form}>
        <Input placeholder="Your Email..." />
        <Button
          formType="round"
          color="secondary"
          className={styles.form_button}
        >
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};
