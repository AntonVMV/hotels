import { useState } from "react";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ReactComponent as FavoriteIcon } from "./FavoriteIcon.svg";
import cn from "classnames";
import styles from "./HotelCard.module.css";

interface HotelCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  favoritesHandler: () => void;
  imageUrl: string[];
}

export const HotelCard: React.FC<HotelCardProps> = ({
  children,
  favoritesHandler,
  imageUrl,
  className,
}) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <div className={cn(styles.card, className)}>
      <img
        src={imageUrl[currentImage]}
        alt="card background"
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.icon} onClick={favoritesHandler}>
          <FavoriteIcon />
        </div>
        {children}
        <div className={styles.card_controls}>
          {imageUrl.length > 1 &&
            imageUrl.map((_, index) => {
              return (
                <div
                  key={index}
                  className={cn(styles.control_dot, {
                    [styles.active]: index === currentImage,
                  })}
                  onClick={() => setCurrentImage(index)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
