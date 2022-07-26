export const searchItemFilter = (entities: string[], value: string) => {
  return entities.filter((item) =>
    item.toLowerCase().startsWith(value.toLowerCase())
  );
};
