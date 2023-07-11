import classNames from "classnames";
import "swiper/css";
import { ReviewForm } from "../ReviewForm";
import { Reviews } from "../Reviews";
import { IProductItemFooter } from "./ProductItemFooter.interface";

export const ProductItemFooter = ({
  reviews,
  formRef,
  className,
  ...props
}: IProductItemFooter) => {
  return (
    <div className={classNames("bg-[#F9F8FF] p-[30px]", className)} {...props}>
      <Reviews reviews={reviews} />
      <ReviewForm formRef={formRef} />
    </div>
  );
};
