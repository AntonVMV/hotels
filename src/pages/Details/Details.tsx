import { Link, useParams } from "react-router-dom";
import { ReactComponent as BathroomIcon } from "../../components/Cards/Bathroom.svg";
import { ReactComponent as BedroomIcon } from "../../components/Cards/Bedroom.svg";
import { ReactComponent as FavoriteIcon } from "../../components/Cards/FavoriteIcon.svg";
import { ReactComponent as ShareIcon } from "./Share.svg";
import { useGetHotelInfoQuery } from "../../store/services/hotels.api";
import { ImagesBlock } from "../../components/ImagesBlock/ImagesBlock";
import { Button } from "../../components/Button/Button";
import { IAmenity, IReview } from "../../types";
import { Review } from "../../components/Review/Review";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading/Loading";
import { MapComponent } from "../../pageComponents/MapComponent/MapComponent";
import cn from "classnames";
import styles from "./Details.module.css";

export const Details: React.FC = () => {
  const { id } = useParams<string>();
  const { isLoading, data } = useGetHotelInfoQuery(id || "");

  const [amenities, setAmenities] = useState<IAmenity[]>([]);
  const [reviews, setReviews] = useState<IReview[]>([]);

  useEffect(() => {
    if (data) {
      setAmenities(data.amenities.slice(0, 6));
      setReviews(data.reviews.slice(0, 4));
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data && (
        <>
          <ImagesBlock images={data.images} />
          <div className={cn(styles.details, "wrapper")}>
            <div className={styles.reserve}>
              <p className={cn(styles.price, "text-xxl")}>
                {data.price.join(" - ")}
              </p>
              <Link to={{ pathname: "/reserve" }} state={{ data }}>
                <Button>Reserve now</Button>
              </Link>
            </div>
            <div className={styles.info}>
              <div className={styles.name}>
                <h3 className={cn(styles.title, "title-s")}>{data.name}</h3>
                <p className={cn(styles.text, "text-l")}>{data.address}</p>
              </div>
              <div className={styles.extra}>
                <div className={styles.extra_item}>
                  <BathroomIcon />
                  <span>{data.info[0].bathroom} bathrooms</span>
                </div>
                <div className={styles.extra_item}>
                  <BedroomIcon />
                  <span>{data.info[0].bedroom} bedrooms</span>
                </div>
              </div>
              <div className={styles.share}>
                <FavoriteIcon />
                <ShareIcon />
              </div>
            </div>

            <div className={styles.description}>
              <h4 className={cn(styles.subtitle, "title-xs")}>
                Apartment Description
              </h4>
              {data.description.map((desc, index) => {
                return (
                  <p className={cn(styles.text, "text-m")} key={index}>
                    {desc}
                  </p>
                );
              })}
            </div>

            <div className={styles.amenities}>
              <h4 className={cn(styles.subtitle, "title-xs")}>
                Offered Amenities
              </h4>
              {amenities.map((item, index) => {
                return (
                  <div className={styles.service} key={index}>
                    <img src={item.icon} alt="service icon" />
                    <p className={cn(styles.text, "text-l")}>{item.name}</p>
                  </div>
                );
              })}
              {data.amenities.length > 6 &&
                data.amenities.length !== amenities.length && (
                  <Button
                    formType="ghost"
                    onClick={() => setAmenities(data.amenities.slice(0))}
                    className={styles.show_all}
                  >
                    Show all {data.amenities.length} amenities
                  </Button>
                )}
            </div>

            <div className={styles.map}>
              <MapComponent
                location={data.coords.map((item) => parseFloat(item))}
                hotel={data.name}
                address={data.address}
              />
            </div>

            <div className={styles.reviews}>
              <h4 className={cn(styles.subtitle, "title-xs")}>Reviews</h4>
              {reviews.map((item, index) => {
                return <Review review={item} key={index} />;
              })}
              {data.reviews.length > 4 &&
                data.reviews.length !== reviews.length && (
                  <Button
                    formType="ghost"
                    onClick={() => setReviews(data.reviews.slice(0))}
                    className={styles.show_all}
                  >
                    Show all {data.reviews.length} reviews
                  </Button>
                )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
