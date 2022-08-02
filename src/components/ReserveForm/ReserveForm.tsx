import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { IReserveForm } from "../../types";
import cn from "classnames";
import styles from "./ReserveForm.module.css";

export const ReserveForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IReserveForm>();

  const submitHandler = (data: IReserveForm) => {};

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
      <Input
        placeholder="First name"
        className={styles.input}
        {...register("firstName", {
          required: { value: true, message: "Enter your name" },
          minLength: { value: 3, message: "Minimum 3 characters" },
        })}
        error={errors.firstName}
      />
      <Input
        placeholder="Last name"
        className={styles.input}
        {...register("lastName", {
          required: { value: true, message: "Enter your last name" },
          minLength: { value: 3, message: "Minimum 3 characters" },
        })}
        error={errors.lastName}
      />
      <Input
        placeholder="Info-1"
        className={styles.input}
        {...register("info1", {
          required: { value: true, message: "Enter your info" },
          minLength: { value: 3, message: "Minimum 3 characters" },
        })}
        error={errors.info1}
      />
      <Input
        placeholder="Info-2"
        className={styles.input}
        {...register("info2", {
          required: { value: true, message: "Enter your info" },
          minLength: { value: 3, message: "Minimum 3 characters" },
        })}
        error={errors.info2}
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
  );
};
