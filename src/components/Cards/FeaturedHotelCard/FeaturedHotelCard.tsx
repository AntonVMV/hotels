import { IHotelInfo } from "../../../types";
import { Carousel } from "../../Carousel/Carousel";
import { SliderControlDots } from "../../SliderControlDots/SliderControlDots";
import { ReactComponent as BedroomIcon } from "../Bedroom.svg";
import { ReactComponent as BathroomIcon } from "../Bathroom.svg";
import { parseAddress } from "../../../helpers/helpers";
import cn from "classnames";
import styles from "./FeaturedHotelCard.module.css";
import { FavoriteElement } from "../../FavoriteElement/FavoriteElement";

interface FeaturedHotelCardProps {
  data: IHotelInfo;
}

export const FeaturedHotelCard: React.FC<FeaturedHotelCardProps> = ({
  data,
}) => {
  return (
    <div className={styles.card}>
      <FavoriteElement className={styles.favorites} id={data._id} />
      <Carousel
        images={data.images}
        renderProp={({ moveTo, active }) => {
          return (
            <div className={styles.card_content}>
              <p className={cn(styles.card_text, "text-xl")}>
                {data.price.join(" - ")}
              </p>
              <SliderControlDots
                clickHandler={moveTo}
                active={active}
                images={data.images}
              />
            </div>
          );
        }}
      />

      <div className={styles.description}>
        <h5 className={cn(styles.title, "title-xs")}>{data.name}</h5>
        <p className={cn(styles.address, "text-m")}>
          {parseAddress(data.address)}
        </p>
        <div className={styles.amenities}>
          <div className={styles.amenities_item}>
            <BathroomIcon />
            {data.info.bathroom}
          </div>
          <div className={styles.amenities_item}>
            <BedroomIcon />
            {data.info.bedroom}
          </div>
        </div>
      </div>
    </div>
  );
};
