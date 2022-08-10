import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { ReactComponent as UserIcon } from "../../UserMenu/user-icon.svg";
import { ReactComponent as ArrowIcon } from "../arrow-right.svg";
import { useForm } from "react-hook-form";
import cn from "classnames";
import styles from "../Modal.module.css";
import React from "react";
import { ILogin } from "../../../types";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { loginUser } from "../../../store/slices/authSlice";

interface LoginModalProps {
  closeHnd: (e: React.MouseEvent<HTMLElement>) => void;
  switchHnd: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  closeHnd,
  switchHnd,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILogin>();

  const dispatch = useAppDispatch();

  const submitHandler = async (data: ILogin) => {
    await dispatch(loginUser(data));
    reset();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(submitHandler)}
      autoComplete="off"
    >
      <UserIcon />
      <h3 className="title-s">Log In</h3>
      <Input
        className={styles.input}
        placeholder="Enter your email"
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
        className={styles.input}
        placeholder="Enter your password"
        type="password"
        {...register("password", {
          required: { value: true, message: "Enter your password" },
        })}
        error={errors.password}
      />
      <div className={styles.toggler}>
        <p className="text-s">Didn't have an account yet?</p>
        <p className={cn(styles.link, "text-xl")} onClick={switchHnd}>
          Register
          <ArrowIcon />
        </p>
      </div>
      <div className={styles.buttons}>
        <Button type="submit">Log in</Button>
        <Button type="reset" onClick={closeHnd}>
          Cancel
        </Button>
      </div>
    </form>
  );
};
