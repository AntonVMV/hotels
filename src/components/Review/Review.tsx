import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IReview } from "../../types";
import cn from "classnames";
import styles from "./Review.module.css";

interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: IReview;
}

export const Review: React.FC<ReviewProps> = ({ review, ...props }) => {
  const parseIso = (date: Date) => {
    return new Date(date).toDateString().split(" ").slice(1).join(", ");
  };

  return (
    <div className={styles.review} {...props}>
      <img
        src={review.author.avatar}
        alt="Review author"
        className={styles.avatar}
      />
      <h5 className={styles.name}>{review.author.name}</h5>
      <p className={cn(styles.date, "text-m")}>{parseIso(review.date)}</p>
      <p className={cn(styles.content, "text-m")}>{review.content}</p>
    </div>
  );
};
