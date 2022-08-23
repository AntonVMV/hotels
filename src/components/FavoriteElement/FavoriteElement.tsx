import { ReactComponent as FavoriteIcon } from "./FavoriteIcon.svg";
import { useAddToFavoritesMutation } from "../../store/services/user.api";
import React, { DetailedHTMLProps, HTMLAttributes, useState } from "react";
import { useAppSelector } from "../../hooks/storeHooks";
import { Portal } from "../../Portal/Portal";
import { PopUp } from "../PopUp/PopUp";

import cn from "classnames";
import styles from "./FavoriteElement.module.css";

interface FavoriteElementProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
}

export const FavoriteElement: React.FC<FavoriteElementProps> = ({
  id,
  className,
}) => {
  const [addToFav] = useAddToFavoritesMutation();
  const [isPopup, setPopup] = useState<string>("");
  const isAuth = useAppSelector((state) => Boolean(state.auth.data));

  const addHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isAuth) {
      setPopup("Login before add to favorites");
      return;
    }

    try {
      await addToFav(id).unwrap();
      setPopup("Added to your favorites");
    } catch (error) {
      setPopup("Some error");
    }
  };

  return (
    <>
      <div className={cn(styles.icon, className)} onClick={addHandler}>
        <FavoriteIcon />
      </div>
      <Portal isActive={!!isPopup}>
        <PopUp closeHndl={() => setPopup("")}>{isPopup}</PopUp>
      </Portal>
    </>
  );
};
