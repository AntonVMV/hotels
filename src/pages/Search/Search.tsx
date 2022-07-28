import cn from "classnames";
import styles from "./Search.module.css";
import { SearchCard } from "../../components/Cards/SearchCard/SearchCard";
import { useSearchParams } from "react-router-dom";
import { useSearchHotelsQuery } from "../../store/services/hotels.api";

export const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useSearchHotelsQuery(
    Object.fromEntries([...searchParams.entries()])
  );

  if (isLoading) {
    return (
      <div className={cn(styles.search, "wrapper")}>
        <h2 className={cn(styles.loading, "title-s")}>Loading...</h2>
      </div>
    );
  }

  return (
    <div className={cn(styles.search, "wrapper")}>
      <h2 className={cn(styles.title, "title-s")}>
        {data && data.length} Results found
      </h2>
      <div className={styles.results}>
        {data &&
          data.map((item) => {
            return <SearchCard data={item} key={item._id} />;
          })}
      </div>
    </div>
  );
};
