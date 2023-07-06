import * as yup from "yup";

export const searchSchema = yup
  .object()
  .shape({
    searchQuery: yup
      .string()
      .max(30, "Максимальная длина поиска 30 символов")
      .required("Поле поиска не может быть пустым"),
  })
  .required();
