import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { IReserveForm } from "../../types";
import { useSetReserveMutation } from "../../store/services/reserve.api";
import { PopUp } from "../PopUp/PopUp";
import cn from "classnames";
import styles from "./ReserveForm.module.css";
import { useState } from "react";
import { Portal } from "../../Portal/Portal";

export const ReserveForm = () => {
  const [sendForm] = useSetReserveMutation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IReserveForm>();
  const [isPopup, setIsPopup] = useState<string | null>(null);

  const submitHandler = async (data: IReserveForm) => {
    try {
      await sendForm(data).unwrap();
      setIsPopup("Success");
    } catch (e) {
      setIsPopup("Server error, try again later");
      console.log(e);
    }
    reset();
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit(submitHandler)}
        autoComplete="off"
      >
        <Input
          placeholder="First name"
          className={styles.input}
          {...register("first_name", {
            required: { value: true, message: "Enter your name" },
            minLength: { value: 3, message: "Minimum 3 characters" },
          })}
          error={errors.first_name}
        />
        <Input
          placeholder="Last name"
          className={styles.input}
          {...register("last_name", {
            required: { value: true, message: "Enter your last name" },
            minLength: { value: 3, message: "Minimum 3 characters" },
          })}
          error={errors.last_name}
        />
        <Input
          placeholder="Info-1"
          className={styles.input}
          {...register("info_1", {
            required: { value: true, message: "Enter your info" },
            minLength: { value: 3, message: "Minimum 3 characters" },
          })}
          error={errors.info_1}
        />
        <Input
          placeholder="Info-2"
          className={styles.input}
          {...register("info_2", {
            required: { value: true, message: "Enter your info" },
            minLength: { value: 3, message: "Minimum 3 characters" },
          })}
          error={errors.info_2}
        />
        <Input
          placeholder="Your country"
          className={styles.input}
          {...register("country", {
            required: { value: true, message: "Enter your country" },
            minLength: { value: 3, message: "Minimum 3 characters" },
          })}
          error={errors.country}
        />
        <Input
          placeholder="Email address"
          className={styles.input}
          {...register("email", {
            required: { value: true, message: "Enter your email" },
            pattern: {
              value:
                /^[a-z0-9][a-z0-9-_.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/,
              message: "Enter valid email",
            },
          })}
          error={errors.email}
        />
        <Input
          placeholder="Phone number"
          className={cn(styles.input, styles.phone)}
          {...register("phone", {
            required: { value: true, message: "Enter your phone" },
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
              message: "Enter valid phone number",
            },
          })}
          error={errors.phone}
        />
        <Input
          placeholder="Comment"
          className={cn(styles.input, styles.comment)}
          {...register("comment", {
            required: { value: true, message: "Enter comment" },
            minLength: { value: 10, message: "Minimum 10 characters" },
          })}
          error={errors.comment}
        />
        <Button className={styles.button} type="submit">
          Reserve now
        </Button>
      </form>

      {isPopup && (
        <Portal>
          <PopUp closeHndl={() => setIsPopup(null)} isActive={!!isPopup}>
            {isPopup}
          </PopUp>
        </Portal>
      )}
    </>
  );
};
