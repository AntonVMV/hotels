import { HotelCard } from "../HotelCard";
import { IHotelInfo } from "../../../types";
import { ReactComponent as BedroomIcon } from "../Bedroom.svg";
import { ReactComponent as BathroomIcon } from "../Bathroom.svg";
import cn from "classnames";
import styles from "./SearchCard.module.css";

interface SearcCardProps {
  data: IHotelInfo;
}

export const SearchCard: React.FC<SearcCardProps> = ({ data }) => {
  return (
    <div className={styles.search_card}>
      <HotelCard
        favoritesHandler={() => {}}
        imageUrl={data.images}
        className={styles.card}
      >
        <div className={styles.info}>
          <img
            src={data.author.avatar}
            alt="author avatar"
            className={styles.avatar}
          />
          <p className={cn(styles.text, "text-s")}>Listed by:</p>
          <h5 className={cn(styles.name, "title-xs")}>Test Name</h5>
          <p className={cn(styles.price, "text-l")}>{data.price.join(" - ")}</p>
        </div>
      </HotelCard>
      <div className={styles.description}>
        <h4 className={cn(styles.title, "title-xs")}>{data.name}</h4>
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
        <div className={styles.conditions}>
          <p>Apartment on Rent</p>
          <p>For Short Period: 3 - 5 Months</p>
        </div>
      </div>
    </div>
  );
};
