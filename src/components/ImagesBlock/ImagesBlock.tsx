import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./ImagesBlock.module.css";

interface ImagesBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: string[];
}

export const ImagesBlock: React.FC<ImagesBlockProps> = ({
  images,
  ...props
}) => {
  return (
    <div className={styles.images} {...props}>
      {images.slice(0, 5).map((item, index) => {
        return (
          <div className={styles.image_container} key={index}>
            <img src={item} alt="hotel preview" className={styles.image} />
            {images.length > 5 && index === 4 && (
              <div className={styles.more}>
                <span className={styles.more_text}>+ {images.length - 4}</span>
                <span className={styles.more_text}>more</span>
                <span className={styles.more_text}>photos</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
