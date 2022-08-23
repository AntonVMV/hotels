import cn from "classnames";
import styles from "./Search.module.css";
import { SearchCard } from "../../components/Cards/SearchCard/SearchCard";
import { Link, useSearchParams } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { useSearchHotelsMutation } from "../../store/services/hotels.api";
import { useEffect } from "react";

export const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [setSearchFilter, { data, isLoading }] = useSearchHotelsMutation();

  useEffect(() => {
    setSearchFilter(Object.fromEntries([...searchParams.entries()]));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={cn(styles.search, "wrapper")}>
      <h2 className={cn(styles.title, "title-s")}>
        {data?.length} Results found
      </h2>
      <div className={styles.results}>
        {data?.map((item) => {
          return (
            <Link
              to={`/details/${item._id}`}
              key={item._id}
              className={styles.link}
            >
              <SearchCard data={item} key={item._id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
