import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import { Input } from "../Input/Input";
import { searchItemFilter } from "../../helpers/helpers";
import styles from "./DropdownInput.module.css";
import { FieldError } from "react-hook-form";

interface DropdownInputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: string[];
  value: string;
  change: (value: string) => void;
  error?: FieldError;
}

export const DropdownInput: React.FC<DropdownInputProps> = ({
  data,
  value = "",
  change,
  placeholder,
  id,
  error,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeHandler = (e: MouseEvent) => {
      if (isOpen && !ref.current?.contains(e.target as HTMLElement)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeHandler);
    return () => document.removeEventListener("click", closeHandler);
  }, [isOpen]);

  const countries = searchItemFilter(data, value);

  const selectHandler = (value: string) => {
    change(value);
    setIsOpen(false);
  };

  return (
    <div ref={ref}>
      <Input
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={(e) => change(e.target.value)}
        onFocus={() => setIsOpen(true)}
        error={error}
      />
      <div
        className={cn(styles.dropdown, {
          [styles.opened]: isOpen,
        })}
      >
        {countries.length > 0 ? (
          countries.map((item, index) => {
            return (
              <p
                className={cn(styles.dropdown_item, "text-m")}
                key={index}
                onClick={() => selectHandler(item)}
              >
                {item}
              </p>
            );
          })
        ) : (
          <p className={styles.text}>No items found</p>
        )}
      </div>
    </div>
  );
};
