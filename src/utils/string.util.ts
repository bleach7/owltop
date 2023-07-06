export const convertToTextQuery = (value: string): string => {
  if (value) {
    const words = value.split(" ");

    const convertValue = words.join("-");

    return convertValue;
  }

  return value;
};

export const convertToTextNormal = (value: string): string => {
  if (value) {
    const words = value.split("-");
    const convertedWords = words.join(" ");
    return convertedWords;
  }

  return value;
};
