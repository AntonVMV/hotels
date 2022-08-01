import cn from "classnames";
import styles from "./BurgerElement.module.css";

interface BurgerElementProps {
  isActive: boolean;
  toggleActive: () => void;
}

export const BurgerElement: React.FC<BurgerElementProps> = ({
  isActive,
  toggleActive,
}) => {
  return (
    <div
      className={cn(styles.burger, {
        [styles.active]: isActive,
      })}
      onClick={toggleActive}
    >
      <div className={styles.line} />
      <div className={styles.line} />
      <div className={styles.line} />
    </div>
  );
};
