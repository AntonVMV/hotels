import { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import cn from "classnames";
import styles from "./Carousel.module.css";

interface RenderPropArgs {
  moveLeft: () => void;
  moveRight: () => void;
  moveTo: (img: number) => void;
  active: number;
}

type Render = (controls: RenderPropArgs) => JSX.Element;

interface CarouselProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: string[];
  renderProp: Render;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  renderProp,
  className,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  const moveLeft = () => {
    if (activeImage - 1 < 0) {
      setActiveImage(images.length - 1);
    } else {
      setActiveImage((prev) => prev - 1);
    }
  };

  const moveRight = () => {
    if (activeImage + 1 >= images.length) {
      setActiveImage(0);
    } else {
      setActiveImage((prev) => prev + 1);
    }
  };

  const moveTo = (img: number) => {
    setActiveImage(img);
  };

  return (
    <div className={cn(styles.carousel, className)}>
      {images.map((item, index) => {
        return (
          <img
            src={item}
            alt="apartaments"
            key={index}
            className={cn(styles.image, {
              [styles.active]: index === activeImage,
            })}
          />
        );
      })}
      {renderProp({ moveLeft, moveRight, moveTo, active: activeImage + 1 })}
    </div>
  );
};
