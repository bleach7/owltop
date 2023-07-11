import { declOfNum, formatPrice } from "@/utils";
import classNames from "classnames";
import Image from "next/image";
import { Badge } from "../Badge";
import { Heading } from "../Heading";
import { Rating } from "../Rating";
import { Text } from "../Text";
import { IProductItemHeader } from "./ProductItemHeader.interface";

export const ProductItemHeader = ({
  product,
  className,
  scrollToReview,
  ...props
}: IProductItemHeader) => {
  if (!product) {
    return null;
  }

  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${product.image}`;

  const reviewCount = `${product.reviewCount}
  ${declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}`;

  return (
    <header
      className={classNames(
        "grid items-center gap-y-[20px] 2xl:grid-cols-2",
        className
      )}
      {...props}
    >
      <div className="flex gap-x-[30px]">
        <div className="relative inline-block h-[70px] max-h-[70px] min-h-[70px] w-[70px] min-w-[70px] max-w-[70px] overflow-hidden rounded-[5px] bg-[#EBEBEB]">
          <Image
            src={imageSrc}
            width={70}
            height={70}
            alt={product.title}
            className="h-auto w-full"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="pt-[5px]">
          <Heading as="h3" size="sm">
            {product.title}
          </Heading>
          {product?.categories.length !== 0 && (
            <ul className="mt-[5px] flex flex-wrap items-center gap-[5px]">
              {product.categories.map((category) => (
                <li key={category} className="flex">
                  <Badge size="sm" appearance="gray-outline">
                    {category}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-[20px] gap-y-[10px] xl:gap-x-[40px] 2xl:justify-end">
        <div className="flex flex-col gap-y-[5px]">
          <span className="flex items-center gap-[10px]">
            <span className="text-[20px] font-medium leading-[27px]">
              {`${formatPrice(product.price)} ₽`}
            </span>
            <Badge size="sm" appearance="green">{`- ${formatPrice(
              product.oldPrice
            )}`}</Badge>
          </span>
          <Text size="sm" as="span">
            цена
          </Text>
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <span>
            <span className="text-[20px] font-medium leading-[27px]">
              {`${formatPrice(product.credit)} ₽`}
            </span>
            <Text size="sm" as="span">
              /мес
            </Text>
          </span>
          <Text size="sm" as="span">
            в кредит
          </Text>
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <div className="h-[27px]">
            <Rating
              className="pt-[3px]"
              rating={Math.ceil(product.initialRating)}
            />
          </div>
          <button
            onClick={scrollToReview}
            type="button"
            className="inline-block transition-colors duration-300 ease-in-out focus:outline-none focus-visible:outline-[#7653FC] active:text-[#7653FC] md:hover:text-[#7653FC]"
          >
            <Text size="sm" as="span">
              {reviewCount}
            </Text>
          </button>
        </div>
      </div>
    </header>
  );
};
