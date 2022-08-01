import { Carousel } from "../Carousel/Carousel";
import { ReactComponent as Arrow } from "./Arrow.svg";
import cn from "classnames";
import styles from "./ImageSlider.module.css";

interface ImageSliderProps {
  images: string[];
  closeHandler: () => void;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  closeHandler,
}) => {
  return (
    <div className={styles.background} onClick={closeHandler}>
      <div className={styles.slider} onClick={(e) => e.stopPropagation()}>
        <Carousel
          images={images}
          renderProp={({ moveLeft, moveRight, active }) => {
            return (
              <div className={styles.controls}>
                <div
                  className={cn(styles.handler, styles.left)}
                  onClick={moveLeft}
                >
                  <Arrow />
                </div>
                <div
                  className={cn(styles.handler, styles.right)}
                  onClick={moveRight}
                >
                  <Arrow />
                </div>
                <div className={cn(styles.info, "text-xl")}>
                  {active} / {images.length}
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};
