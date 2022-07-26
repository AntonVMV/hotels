import cn from "classnames";
import styles from "./Banner.module.css";

interface BannerProps {
  title: string;
  text: string;
  imgUrl: string;
}

export const Banner: React.FC<BannerProps> = ({ title, text, imgUrl }) => {
  return (
    <div className={styles.banner}>
      <img src={imgUrl} alt="Banner background" className={styles.image} />
      <div className={styles.description}>
        <h5 className={cn(styles.title, "title-l")}>{title}</h5>
        <p className={cn(styles.text, "text-l")}>{text}</p>
      </div>
    </div>
  );
};
