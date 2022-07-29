import styles from "./Home.module.css";
import cn from "classnames";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { LatestHotelCard } from "../../components/Cards/LatestHotelCard/LatestHotelCard";
import { Banner } from "../../components/Banner/Banner";
import { FeaturedHotelCard } from "../../components/Cards/FeaturedHotelCard/FeaturedHotelCard";
import { Input } from "../../components/Input/Input";
import { Link } from "react-router-dom";

const mockHotel = {
  author: {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/460.jpg",
  },
  _id: "62caa194f369d452b26b36f9",
  image: "http://loremflickr.com/640/480/nature",
  name: "Refined Bronze Salad",
  address: "715 Wiza Track, New Joyce, United Arab Emirates",
};

const mockFeat = {
  author: {
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1127.jpg",
  },
  _id: "62caa0b0f369d452b26b353c",
  image: "http://loremflickr.com/640/480/nature",
  name: "Recycled Fresh Cheese",
  address: "28386 Olson Crossroad, Bergnaumshire, Angola",
  price: ["$187", "$1685"],
  images: [
    "http://loremflickr.com/640/480/nature",
    "http://loremflickr.com/640/480/city",
    "http://loremflickr.com/640/480/nature",
    "http://loremflickr.com/640/480/city",
    "http://loremflickr.com/640/480/nature",
    "http://loremflickr.com/640/480/city",
    "http://loremflickr.com/640/480/nature",
    "http://loremflickr.com/640/480/city",
  ],
  info: [
    {
      bedroom: "4",
      bathroom: "3",
    },
  ],
};

export const Home = () => {
  return (
    <>
      <section className={styles.wellcome}>
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
          <Link to={`details/${mockHotel._id}`}>
            <LatestHotelCard data={mockHotel} />
          </Link>
          <LatestHotelCard data={mockHotel} />
          <LatestHotelCard data={mockHotel} />
          <LatestHotelCard data={mockHotel} />
        </div>
      </section>
      <section className={cn(styles.banner, "wrapper")}>
        <Banner
          title="Try Hosting With Us"
          text="Earn extra just by renting your property..."
          imgUrl="https://i.pinimg.com/originals/b3/95/2f/b3952fc5b246983378b7d19f5c01384e.jpg"
        />
      </section>
      <section className={cn(styles.featured, "wrapper")}>
        <h2 className={cn(styles.featured_title, "title-m")}>
          Featured Properties on our Listing
        </h2>
        <div className={styles.featured_cards}>
          <FeaturedHotelCard data={mockFeat} />
          <FeaturedHotelCard data={mockFeat} />
          <FeaturedHotelCard data={mockFeat} />
          <FeaturedHotelCard data={mockFeat} />
          <FeaturedHotelCard data={mockFeat} />
          <FeaturedHotelCard data={mockFeat} />
        </div>
      </section>
      <section className={cn(styles.banner, "wrapper")}>
        <Banner
          title="Browse For More Properties"
          text="Explore properties by their categories/types..."
          imgUrl="/"
        />
      </section>
    </>
  );
};
