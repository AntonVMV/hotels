import cn from "classnames";
import styles from "./SliderControlDots.module.css";

interface SliderControlDotsProps {
  clickHandler: (item: number) => void;
  images: string[];
  active: number;
}

export const SliderControlDots: React.FC<SliderControlDotsProps> = ({
  clickHandler,
  images,
  active,
}) => {
  return (
    <div className={styles.controls} onClick={(e) => e.preventDefault()}>
      {images.map((_, index) => {
        return (
          <div
            key={index}
            className={cn(styles.control_dot, {
              [styles.active]: index + 1 === active,
            })}
            onClick={() => {
              clickHandler(index);
            }}
          />
        );
      })}
    </div>
  );
};
