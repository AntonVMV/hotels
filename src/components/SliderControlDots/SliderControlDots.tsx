import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./SliderControlDots.module.css";

interface SliderControlDotsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  clickHandler: (item: number) => void;
  images: string[];
  active: number;
  colorType?: "light" | "dark";
}

export const SliderControlDots: React.FC<SliderControlDotsProps> = ({
  clickHandler,
  images,
  active,
  colorType = "light",
  className,
}) => {
  return (
    <div
      className={cn(styles.controls, className)}
      onClick={(e) => e.preventDefault()}
    >
      {images.map((_, index) => {
        return (
          <div
            key={index}
            className={cn(styles.control_dot, {
              [styles.active]: index + 1 === active,
              [styles.dark]: colorType === "dark",
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
