import cn from "classnames";
import { IHotel } from "../../../types";
import { Carousel } from "../../Carousel/Carousel";
import { HotelCard } from "../HotelCard";
import styles from "./LatestHotelCard.module.css";

interface LatestHotelCardProps {
  data: IHotel;
}

export const LatestHotelCard: React.FC<LatestHotelCardProps> = ({ data }) => {
  return (
    <HotelCard>
      <Carousel
        images={[data.image]}
        renderProp={() => {
          return (
            <div className={styles.description}>
              <img
                src={data.author.avatar}
                alt="author avatar"
                className={styles.avatar}
              />
              <h5 className={cn(styles.name, "title-xs")}>{data.name}</h5>
              <p className={cn(styles.address, "text-m")}>{data.address}</p>
            </div>
          );
        }}
      />
    </HotelCard>
  );
};
