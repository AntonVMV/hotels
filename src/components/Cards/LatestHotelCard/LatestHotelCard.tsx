import cn from "classnames";
import { parseAddress } from "../../../helpers/helpers";
import { IHotel } from "../../../types";
import { Carousel } from "../../Carousel/Carousel";
import { FavoriteElement } from "../../FavoriteElement/FavoriteElement";
import styles from "./LatestHotelCard.module.css";

interface LatestHotelCardProps {
  data: IHotel;
}

export const LatestHotelCard: React.FC<LatestHotelCardProps> = ({ data }) => {
  return (
    <div className={styles.card}>
      <FavoriteElement className={styles.favorites} id={data._id} />
      <Carousel
        images={[data.image]}
        renderProp={() => {
          return (
            <div className={styles.description}>
              <img
                src={data.profile.avatar}
                alt="author avatar"
                className={styles.avatar}
              />
              <h5 className={cn(styles.name, "title-xs")}>{data.name}</h5>
              <p className={cn(styles.address, "text-m")}>
                {parseAddress(data.address)}
              </p>
            </div>
          );
        }}
      />
    </div>
  );
};
