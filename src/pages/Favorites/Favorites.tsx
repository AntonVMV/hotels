import { useGetFavoritesQuery } from "../../store/services/user.api";
import { Loading } from "../../components/Loading/Loading";
import { FavoriteCard } from "../../components/Cards/FavoriteCard/FavoriteCard";
import { ReactComponent as DeleteIcon } from "./delete.svg";
import { Link, Navigate } from "react-router-dom";
import { useRemoveFromFavoritesMutation } from "../../store/services/user.api";
import cn from "classnames";
import styles from "./Favorite.module.css";
import { useEffect, useState } from "react";
import { Portal } from "../../Portal/Portal";
import { PopUp } from "../../components/PopUp/PopUp";
import { ConfirmModal } from "../../components/Modals/ConfirmModal/ConfirmModal";
import { useAppSelector } from "../../hooks/storeHooks";

export const Favorites: React.FC = () => {
  const isAuth = useAppSelector((state) => Boolean(state.auth.data));
  const { data, isLoading } = useGetFavoritesQuery();
  const [removeItem, { data: removeData }] = useRemoveFromFavoritesMutation();

  const [isPopup, setPopup] = useState<string>("");
  const [isModal, setModal] = useState<string>("");

  useEffect(() => {
    if (removeData) {
      setPopup("Removed");
    }
  }, [removeData]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuth) {
    return <Navigate replace to="/" />;
  }

  const removeHandler = () => {
    removeItem(isModal);
    setModal("");
  };

  return (
    <>
      <div className={cn(styles.favorites, "wrapper")}>
        <h2 className={cn(styles.title, "title-s")}>Faviore Hotels</h2>
        {data &&
          data.map((item) => {
            return (
              <div key={item._id} className={styles.favorite}>
                <Link to={`/details/${item._id}`} className={styles.link}>
                  <FavoriteCard data={item} />
                </Link>
                <DeleteIcon onClick={() => setModal(item._id)} />
              </div>
            );
          })}
      </div>

      <Portal isActive={!!isPopup}>
        <PopUp closeHndl={() => setPopup("")}>{isPopup}</PopUp>
      </Portal>

      <Portal isActive={!!isModal}>
        <ConfirmModal closeHnd={() => setModal("")} sumbitHnd={removeHandler}>
          Are you sure want to remove this hotel from favorites ?
        </ConfirmModal>
      </Portal>
    </>
  );
};
