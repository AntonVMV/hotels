import styles from "./Home.module.css";
import cn from "classnames";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { LatestHotelCard } from "../../components/Cards/LatestHotelCard/LatestHotelCard";
import { FeaturedHotelCard } from "../../components/Cards/FeaturedHotelCard/FeaturedHotelCard";
import { Banner } from "../../components/Banner/Banner";
import { useGetHomeHotelsQuery } from "../../store/services/hotels.api";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data: latest } = useGetHomeHotelsQuery("latest");
  const { data: featured } = useGetHomeHotelsQuery("featured");

  return (
    <>
      <section className={styles.wellcome}>
        <img
          src="img/banner3.webp"
          alt="wellcome banner"
          className={styles.wellcome_image}
        />
        <div className={styles.wellcome_content}>
          <h2 className={cn(styles.wellcome_title, "title-l")}>Find</h2>
          <SearchForm />
        </div>
      </section>
      <section className={cn(styles.latest, "wrapper")}>
        <h2 className={cn(styles.latest_title, "title-m")}>
          Latest on the Property Listing
        </h2>
        <div className={styles.latest_cards}>
          {latest?.map((item) => {
            return (
              <Link
                to={`details/${item._id}`}
                className={styles.link}
                key={item._id}
              >
                <LatestHotelCard data={item} />
              </Link>
            );
          })}
        </div>
      </section>
      <section className={cn(styles.banner, "wrapper")}>
        <Banner
          title="Try Hosting With Us"
          text="Earn extra just by renting your property..."
          imgUrl="img/banner2.webp"
        />
      </section>
      <section className={cn(styles.featured, "wrapper")}>
        <h2 className={cn(styles.featured_title, "title-m")}>
          Featured Properties on our Listing
        </h2>
        <div className={styles.featured_cards}>
          {featured?.map((item) => {
            return (
              <Link
                to={`details/${item._id}`}
                className={styles.link}
                key={item._id}
              >
                <FeaturedHotelCard data={item} />
              </Link>
            );
          })}
        </div>
      </section>
      <section className={cn(styles.banner, "wrapper")}>
        <Banner
          title="Browse For More Properties"
          text="Explore properties by their categories/types..."
          imgUrl="img/banner1.webp"
        />
      </section>
    </>
  );
};
