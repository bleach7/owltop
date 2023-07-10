"use client";

import { RatingStarIcon } from "@/imgs/icons";
import classNames from "classnames";
import { Fragment, useEffect, useState } from "react";
import { IRating } from "./Rating.interface";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: IRating) => {
  const [ratingItems, setRatingItems] = useState<React.JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const handleDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const handleChangeRating = (i: number) => {
    if (!isEditable || !setRating) {
      return null;
    }

    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updatedItems = ratingItems.map((ratingItem, i) => (
      <li key={i} className="flex">
        <button
          type="button"
          className="inline-block focus:outline-none focus-visible:outline-[#7653FC]"
          disabled={isEditable === true ? false : true}
          onMouseEnter={() => handleDisplay(i + 1)}
          onMouseLeave={() => handleDisplay(rating)}
          onClick={() => handleChangeRating(i + 1)}
        >
          <RatingStarIcon
            className={classNames(
              "h-auto w-[20px] transition-colors duration-300 ease-in-out",
              {
                ["text-[#7653FC]"]: i < currentRating,
              }
            )}
          />
        </button>
      </li>
    ));

    setRatingItems(updatedItems);
  };

  return (
    <ul
      className={classNames(
        "flex flex-wrap items-center gap-[5px] text-[#E2E2E2]",
        className
      )}
      {...props}
    >
      {ratingItems.map((rating, i) => (
        <Fragment key={i}>{rating}</Fragment>
      ))}
    </ul>
  );
};
