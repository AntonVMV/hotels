import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { ReactComponent as UserIcon } from "../../UserMenu/user-icon.svg";
import { ReactComponent as ArrowIcon } from "../arrow-right.svg";
import { registerUser } from "../../../store/slices/authSlice";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { useForm } from "react-hook-form";
import { IRegister } from "../../../types";
import cn from "classnames";
import styles from "../Modal.module.css";
import React, { ForwardedRef, forwardRef } from "react";
import { motion } from "framer-motion";

interface RegisterModalProps {
  closeHnd: (e: React.MouseEvent<HTMLElement>) => void;
  switchHnd: () => void;
  isLoading: boolean;
}

const RegisterModal = forwardRef(
  (
    { closeHnd, switchHnd, isLoading }: RegisterModalProps,
    ref: ForwardedRef<HTMLFormElement>
  ) => {
    const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
    } = useForm<IRegister>();

    const dispatch = useAppDispatch();

    const submitHandler = async (data: IRegister) => {
      await dispatch(registerUser(data));
      reset();
    };

    return (
      <form
        className={styles.form}
        onSubmit={handleSubmit(submitHandler)}
        autoComplete="off"
        ref={ref}
      >
        <UserIcon />
        <h3 className="title-s">Registration</h3>
        <Input
          className={styles.input}
          placeholder="Enter your user name"
          {...register("username", {
            required: { value: true, message: "Enter your name" },
          })}
          error={errors.username}
        />

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
            required: { value: true, message: "Enter your name" },
            minLength: { value: 5, message: "Minimum 5 chars" },
          })}
          error={errors.password}
        />

        <div className={styles.toggler}>
          <p className="text-s">Already registered?</p>
          <p className={cn(styles.link, "text-xl")} onClick={switchHnd}>
            Log in
            <ArrowIcon />
          </p>
        </div>

        <div className={styles.buttons}>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Register"}
          </Button>
          <Button type="reset" onClick={closeHnd}>
            Cancel
          </Button>
        </div>
      </form>
    );
  }
);

export const MRegisterModal = motion(RegisterModal);
