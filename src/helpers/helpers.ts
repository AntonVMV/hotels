import { IAddress } from "../types";

export const searchItemFilter = (entities: string[], value: string) => {
  return entities.filter((item) =>
    item.toLowerCase().startsWith(value.toLowerCase())
  );
};

export const parseAddress = (address: IAddress) => {
  return `${address.address}, ${address.city}, ${address.country}`;
};
