import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { Portal } from "../../Portal/Portal";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import styles from "./ImagesBlock.module.css";

interface ImagesBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: string[];
}

export const ImagesBlock: React.FC<ImagesBlockProps> = ({
  images,
  ...props
}) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      {isModal && (
        <Portal>
          <ImageSlider images={images} closeHandler={() => setIsModal(false)} />
        </Portal>
      )}
      <div className={styles.images} {...props}>
        {images.slice(0, 5).map((item, index) => {
          return (
            <div className={styles.image_container} key={index}>
              <img
                src={item}
                alt="hotel preview"
                className={styles.image}
                onClick={() => setIsModal(true)}
              />
              {images.length > 5 && index === 4 && (
                <div className={styles.more} onClick={() => setIsModal(true)}>
                  <span className={styles.more_text}>
                    + {images.length - 4}
                  </span>
                  <span className={styles.more_text}>more</span>
                  <span className={styles.more_text}>photos</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
