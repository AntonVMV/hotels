import { ReserveForm } from "../../components/ReserveForm/ReserveForm";
import { useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Reserve.module.css";
import { IHotelFullInfo } from "../../types";
import { parseAddress } from "../../helpers/helpers";

interface StateType {
  data: IHotelFullInfo;
}

export const Reserve: React.FC = () => {
  const location = useLocation();
  const { data } = location.state as StateType;

  return (
    <div className={cn(styles.reserve, "wrapper")}>
      <ReserveForm />
      <div className={styles.info}>
        <img
          src={data.profile.avatar}
          alt="author avatar"
          className={styles.avatar}
        />
        <h4 className={cn(styles.title, "title-xs")}>{data.name}</h4>
        <p className={cn(styles.text, "text-m")}>
          {parseAddress(data.address)}
        </p>
        <div className={styles.extra}>
          {Object.entries(data.info).map((item, index) => {
            return (
              <p key={index} className={cn(styles.text, "text-m")}>
                {item[0]}: {item[1]}
              </p>
            );
          })}
        </div>
        <div className={styles.details}>
          <h5 className="title-xs">Details:</h5>
          <p className={cn(styles.text, "text-m")}>{data.type[0]}</p>
          <p className={cn(styles.text, "text-m")}>{data.price.join(" - ")}</p>
          <p className={cn(styles.text, "text-m")}>{data.period}</p>
        </div>
      </div>
    </div>
  );
};
