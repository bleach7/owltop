"use client";

import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider } from "../Divider";
import { Review } from "../Review";
import { IReviews } from "./Reviews.interface";

export const Reviews = ({ reviews, ...props }: IReviews) => {
  return (
    <div {...props}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <Review review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Divider className="mb-[30px] mt-[20px]" />
    </div>
  );
};
