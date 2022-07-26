import { IHotelInfo } from "../../../types";
import { ReactComponent as BedroomIcon } from "../Bedroom.svg";
import { ReactComponent as BathroomIcon } from "../Bathroom.svg";
import { SliderControlDots } from "../../SliderControlDots/SliderControlDots";
import { Carousel } from "../../Carousel/Carousel";
import { parseAddress } from "../../../helpers/helpers";
import cn from "classnames";
import styles from "./SearchCard.module.css";
import { FavoriteElement } from "../../FavoriteElement/FavoriteElement";

interface SearcCardProps {
  data: IHotelInfo;
}

export const SearchCard: React.FC<SearcCardProps> = ({ data }) => {
  return (
    <div className={styles.card}>
      <FavoriteElement className={styles.favorites} id={data._id} />
      <Carousel
        images={data.images}
        renderProp={({ moveTo, active }) => {
          return (
            <div className={styles.card_content}>
              <div className={styles.info}>
                <img
                  src={data.profile.avatar}
                  alt="author avatar"
                  className={styles.avatar}
                />
                <p className={cn(styles.text, "text-s")}>Listed by:</p>
                <h5 className={cn(styles.name, "title-xs")}>Test Name</h5>
                <p className={cn(styles.price, "text-l")}>
                  {data.price.join(" - ")}
                </p>
              </div>
              <SliderControlDots
                images={data.images}
                clickHandler={moveTo}
                active={active}
              />
            </div>
          );
        }}
      />

      <div className={styles.description}>
        <h4 className={cn(styles.title, "title-xs")}>{data.name}</h4>
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
        <div className={styles.conditions}>
          <p>Apartment on Rent</p>
          <p>For Short Period: 3 - 5 Months</p>
        </div>
      </div>
    </div>
  );
};
