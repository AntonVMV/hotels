import styles from "./SearchForm.module.css";
import { useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ReactComponent as SearhIcon } from "./SearchIcon.svg";
import { fetchCountries } from "../../store/slices/countriesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { searchItemFilter } from "../../helpers/helpers";
import { Dropdown } from "../Dropdown/Dropdown";
import cn from "classnames";

export const SearchForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { loading, countries } = useAppSelector((state) => state.countries);
  const [searchValue, setSerchValue] = useState<string>("");

  const dispatch = useAppDispatch();

  const countiesInputHandler = () => {
    setIsDropdownOpen(true);
    if (!countries.length) {
      dispatch(fetchCountries());
    }
  };

  return (
    <form className={styles.form}>
      <div className={cn(styles.input_el, styles.countries)}>
        <label htmlFor="city-select-input">Location</label>
        <Input
          placeholder="Which country do you prefer?"
          id="city-select-input"
          onFocus={countiesInputHandler}
          onBlur={() => setIsDropdownOpen(false)}
          onChange={(e) => setSerchValue(e.target.value)}
        />
        {isDropdownOpen && (
          <Dropdown
            data={searchItemFilter(countries, searchValue)}
            isLoading={loading}
          />
        )}
      </div>
      <div className={styles.input_el}>
        <label htmlFor="check-in-date-input">Check in</label>
        <Input id="check-in-date-input" type="date" />
      </div>
      <div className={styles.input_el}>
        <label htmlFor="check-out-date-input">Check out</label>
        <Input id="check-out-date-input" type="date" />
      </div>
      <div className={styles.input_el}>
        <label htmlFor="add-guest-input">Guests</label>
        <Input placeholder="Add Guests" id="add-guest-input" />
      </div>
      <Button formType="round" className={styles.button}>
        <SearhIcon />
      </Button>
    </form>
  );
};
