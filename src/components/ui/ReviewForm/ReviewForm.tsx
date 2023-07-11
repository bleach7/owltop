"use client";

import { SearchResetIcon } from "@/imgs/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";
import { Rating } from "../Rating";
import { Text } from "../Text";
import { TextArea } from "../TextArea";
import { IReviewForm, IReviewFormFields } from "./ReviewForm.interface";
import { reviewFormSchema } from "./ReviewForm.schema";

export const ReviewForm = ({ className, formRef, ...props }: IReviewForm) => {
  const [isSucess, setIsSucess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReviewFormFields>({
    resolver: yupResolver(reviewFormSchema),
  });

  const onSubmit = (data: IReviewFormFields) => {
    console.table(data);
    reset();
    setIsSucess(true);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className={classNames("grid grid-cols-1 gap-y-[30px]", className)}
      {...props}
    >
      <fieldset className="grid grid-cols-1 gap-y-[30px] lg:flex lg:flex-wrap lg:items-center lg:justify-between">
        <legend className="sr-only">Форма оставить отзыв</legend>
        <div className="grid grid-cols-1 items-center gap-x-[30px] gap-y-[30px] md:grid-cols-2 lg:flex lg:w-[466px]">
          <div className="relative w-full">
            <Input placeholder="Имя" {...register("name")} />
            {errors.name?.message && (
              <Text
                size="sm"
                as="span"
                className="absolute bottom-[-20px] left-0 w-max text-[#DE0000]"
              >
                {errors.name.message}
              </Text>
            )}
          </div>
          <div className="relative w-full">
            <Input placeholder="Заголовок отзыва" {...register("title")} />
            {errors.title?.message && (
              <Text
                size="sm"
                as="span"
                className="absolute bottom-[-20px] left-0 w-max text-[#DE0000]"
              >
                {errors.title.message}
              </Text>
            )}
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center gap-x-[20px] gap-y-[10px]">
            <Text size="sm">Оценка:</Text>
            <Controller
              control={control}
              name="rating"
              render={({ field }) => (
                <Rating
                  rating={field.value}
                  isEditable
                  setRating={field.onChange}
                  error={errors.rating}
                />
              )}
            />
          </div>
          {errors.rating?.message && (
            <Text
              size="sm"
              as="span"
              className="absolute bottom-[-20px] left-0 w-max text-[#DE0000]"
            >
              {errors.rating.message}
            </Text>
          )}
        </div>
      </fieldset>
      <div className="relative w-full">
        <TextArea placeholder="Текст отзыва" {...register("description")} />
        {errors.description?.message && (
          <Text
            size="sm"
            as="span"
            className="absolute bottom-[-20px] left-0 w-max text-[#DE0000]"
          >
            {errors.description.message}
          </Text>
        )}
      </div>
      <div className="flex flex-col items-center gap-x-[15px] gap-y-[15px] md:flex-row">
        <Button type="submit" className="w-full md:w-fit md:min-w-[150px]">
          Отправить
        </Button>
        <Text size="sm">
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </Text>
      </div>
      {isSucess && (
        <div className="rounded-[5px] bg-[#C8F8E4] p-[30px]">
          <div className="grid grid-cols-[1fr_20px] items-center gap-[5px]">
            <Text size="lg" className="mb-[10px] font-bold">
              Ваш отзыв был отправлен
            </Text>
            <button
              onClick={() => setIsSucess(false)}
              type="button"
              aria-label="Закрыть успешный статус отправки отзыва"
              className="inline-block text-[#1DC37E] transition-colors duration-300  ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#DE0000] md:hover:text-[#DE0000]"
            >
              <SearchResetIcon className="h-auto w-[20px]" />
            </button>
          </div>
          <Text>Спасибо, ваш отзыв будет опубликован после проверки.</Text>
        </div>
      )}
    </form>
  );
};
