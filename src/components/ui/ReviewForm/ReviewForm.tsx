"use client";

import classNames from "classnames";
import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Rating } from "../Rating";
import { Text } from "../Text";
import { TextArea } from "../TextArea";
import { IReviewForm } from "./ReviewForm.interface";

export const ReviewForm = ({ className, ...props }: IReviewForm) => {
  const [rating, setRating] = useState(0);

  return (
    <form
      className={classNames("grid grid-cols-1 gap-y-[20px]", className)}
      {...props}
    >
      <fieldset className="grid grid-cols-1 gap-y-[20px] lg:flex lg:flex-wrap lg:items-center lg:justify-between">
        <fieldset className="grid grid-cols-1 items-center gap-x-[30px] gap-y-[20px] md:grid-cols-2 lg:flex lg:w-[466px]">
          <Input placeholder="Имя" />
          <Input placeholder="Заголовок отзыва" />
        </fieldset>
        <div className="flex items-center gap-x-[20px] gap-y-[10px]">
          <Text size="sm">Оценка:</Text>
          <Rating rating={rating} setRating={setRating} isEditable />
        </div>
      </fieldset>
      <TextArea placeholder="Текст отзыва" />
      <div className="flex flex-col items-center gap-x-[15px] gap-y-[15px] md:flex-row">
        <Button type="submit" className="w-full md:w-fit md:min-w-[150px]">
          Отправить
        </Button>
        <Text size="sm">
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </Text>
      </div>
    </form>
  );
};
