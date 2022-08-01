import { IHotelInfo } from "../../../types";
import { Carousel } from "../../Carousel/Carousel";
import { HotelCard } from "../HotelCard";
import cn from "classnames";
import styles from "./FeaturedHotelCard.module.css";
import { SliderControlDots } from "../../SliderControlDots/SliderControlDots";
import { ReactComponent as BedroomIcon } from "../Bedroom.svg";
import { ReactComponent as BathroomIcon } from "../Bathroom.svg";

interface FeaturedHotelCardProps {
  data: IHotelInfo;
}

export const FeaturedHotelCard: React.FC<FeaturedHotelCardProps> = ({
  data,
}) => {
  return (
    <>
      <HotelCard>
        <Carousel
          images={data.images}
          renderProp={({ moveTo, active }) => {
            return (
              <div className={styles.card}>
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
      </HotelCard>
      <div className={styles.description}>
        <h5 className={cn(styles.title, "title-xs")}>{data.name}</h5>
        <p className={cn(styles.address, "text-m")}>{data.address}</p>
        <div className={styles.amenities}>
          <div className={styles.amenities_item}>
            <BathroomIcon />
            {data.info[0].bathroom}
          </div>
          <div className={styles.amenities_item}>
            <BedroomIcon />
            {data.info[0].bedroom}
          </div>
        </div>
      </div>
    </>
  );
};
