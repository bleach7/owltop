"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider } from "../Divider";
import { Review } from "../Review";
import { IReviews } from "./Reviews.interface";

export const Reviews = ({ reviews, ...props }: IReviews) => {
  return (
    <section {...props}>
      <Swiper spaceBetween={30} autoplay={{ delay: 3000 }} slidesPerView={1}>
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Divider className="mb-[30px] mt-[20px]" />
    </section>
  );
};
