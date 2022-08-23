import { IHotelFullInfo } from "../../../types";
import { Carousel } from "../../Carousel/Carousel";
import { SliderControlDots } from "../../SliderControlDots/SliderControlDots";
import styles from "./FavoriteCard.module.css";
import { parseAddress } from "../../../helpers/helpers";

interface FavoriteCardProps {
  data: IHotelFullInfo;
}

export const FavoriteCard: React.FC<FavoriteCardProps> = ({ data }) => {
  return (
    <div className={styles.card}>
      <Carousel
        className={styles.carousel}
        images={data.images}
        renderProp={({ moveTo, active }) => {
          return (
            <SliderControlDots
              clickHandler={moveTo}
              active={active}
              images={data.images}
              colorType="dark"
              className={styles.controls}
            />
          );
        }}
      />

      <div className={styles.description}>
        <p className="text-l">{data.price.join(" - ")}</p>
        <h5 className="title-xs">{data.name}</h5>
        <p className="text-m">{parseAddress(data.address)}</p>
      </div>
    </div>
  );
};
