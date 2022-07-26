import cn from "classnames";
import React from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  data: string[];
  isLoading?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.dropdown}>
        <p className={styles.loading}>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.dropdown}>
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <p className={cn(styles.dropdown_item, "text-m")} key={index}>
              {item}
            </p>
          );
        })
      ) : (
        <p className={styles.text}>No items found</p>
      )}
    </div>
  );
};
