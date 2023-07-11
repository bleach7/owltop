import * as yup from "yup";

export const reviewFormSchema = yup
  .object()
  .shape({
    name: yup.string().required("Имя является обязательным полем"),
    title: yup.string().required("Заголовок является обязательным полем"),
    description: yup
      .string()
      .required("Текст отзыва является обязательным полем"),
    rating: yup.number().max(5).required("Укажите оценку"),
  })
  .required();
