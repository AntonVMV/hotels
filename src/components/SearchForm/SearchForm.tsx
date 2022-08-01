import styles from "./SearchForm.module.css";
import { useEffect } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ReactComponent as SearhIcon } from "./SearchIcon.svg";
import { fetchCountries } from "../../store/slices/countriesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { useForm, Controller } from "react-hook-form";
import { DropdownInput } from "../DropdownInput/DropdownInput";
import { useNavigate, createSearchParams } from "react-router-dom";
import { ISearchHotelsParams } from "../../types";
import cn from "classnames";

export const SearchForm = () => {
  const { countries } = useAppSelector((state) => state.countries);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISearchHotelsParams>();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries());
    }
  }, []);

  const searchHandler = (data: ISearchHotelsParams) => {
    const params = createSearchParams(data as {});
    navigate({ pathname: "/search", search: params.toString() });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(searchHandler)}
      autoComplete="off"
    >
      <div className={cn(styles.input_el, styles.countries)}>
        <label htmlFor="city-select-input">Location</label>
        <Controller
          control={control}
          name="location"
          rules={{ required: { value: true, message: "Choose country" } }}
          render={({ field }) => (
            <DropdownInput
              data={countries}
              value={field.value}
              change={field.onChange}
              placeholder="Which city do you prefer?"
              id="city-select-input"
              error={errors.location}
            />
          )}
        />
      </div>
      <div className={styles.input_el}>
        <label htmlFor="check-in-date-input">Check in</label>
        <Input
          id="check-in-date-input"
          type="date"
          error={errors.checkIn}
          {...register("checkIn", {
            required: { value: true, message: "Set date" },
          })}
        />
      </div>
      <div className={styles.input_el}>
        <label htmlFor="check-out-date-input">Check out</label>
        <Input
          id="check-out-date-input"
          type="date"
          error={errors.checkOut}
          {...register("checkOut", {
            required: { value: true, message: "Set date" },
          })}
        />
      </div>
      <div className={styles.input_el}>
        <label htmlFor="add-guest-input">Guests</label>
        <Input
          placeholder="Guests"
          id="add-guest-input"
          type="number"
          error={errors.guest}
          {...register("guest", {
            required: { value: true, message: "Enter number of persons" },
          })}
        />
      </div>
      <Button formType="round" className={styles.button} type="submit">
        <SearhIcon />
      </Button>
    </form>
  );
};
