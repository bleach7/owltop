export const formatPrice = (price: number): string => {
  const value = price.toLocaleString().replace(/,/g, " ");

  return value;
};
