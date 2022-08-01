import cn from "classnames";
import styles from "./Loading.module.css";

export const Loading: React.FC = () => {
  return (
    <div className={cn(styles.loading, "wrapper")}>
      <h2 className={cn(styles.title, "title-s")}>Loading...</h2>
    </div>
  );
};
