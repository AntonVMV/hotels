import React, { useState } from "react";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { ReactComponent as FavoriteIcon } from "./FavoriteIcon.svg";
import cn from "classnames";
import styles from "./HotelCard.module.css";

interface HotelCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
}

export const HotelCard: React.FC<HotelCardProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.icon} onClick={(e) => e.preventDefault()}>
        <FavoriteIcon />
      </div>
      {children}
    </div>
  );
};
