import { UserIcon } from "@/imgs/icons";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Rating } from "../Rating";
import { Text } from "../Text";
import { IReview } from "./Review.interface";

export const Review = ({ review, ...props }: IReview) => {
  const rating = Math.round(review.rating);

  const date = format(new Date(review.createdAt), "dd MMMM yyyy", {
    locale: ru,
  });

  return (
    <article {...props}>
      <header className="flex flex-wrap items-center justify-between gap-y-[10px]">
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <UserIcon className="h-auto w-[30px] text-[#7653FC]" />
            <Text as="span" size="sm" className="font-bold">
              {review.name}
            </Text>
          </div>
          <Text size="sm">{review.title}</Text>
        </div>
        <div className="flex flex-wrap items-center gap-[20px]">
          <time className="text-[14px] leading-[19px]">{date}</time>
          <Rating rating={rating} />
        </div>
      </header>
      <main className="mt-[10px]">
        <Text
          size="sm"
          className="inline-block max-h-[100px] min-h-[100px] w-full overflow-y-scroll"
        >
          {review.description}
        </Text>
      </main>
    </article>
  );
};
