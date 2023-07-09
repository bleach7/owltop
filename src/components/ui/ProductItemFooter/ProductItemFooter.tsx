"use client";

import classNames from "classnames";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { IProductItemFooter } from "./ProductItemFooter.interface";

export const ProductItemFooter = ({
  reviews,
  className,
  ...props
}: IProductItemFooter) => {
  return (
    <div className={classNames("bg-[#F9F8FF] p-[30px]", className)} {...props}>
      <div>
        <Swiper spaceBetween={50} slidesPerView={3}>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <article>
                <h4>{review.name}</h4>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <form>Форма</form>
    </div>
  );
};
