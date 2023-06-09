"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { ButtonLink } from "../ButtonLink";
import { Divider } from "../Divider";
import { ProductItemBody } from "../ProductItemBody";
import { ProductItemFooter } from "../ProductItemFooter";
import { ProductItemHeader } from "../ProductItemHeader";
import { IProductItem } from "./ProductItem.interface";

export const ProductItem = ({ product, className, ...props }: IProductItem) => {
  const [reviewsIsOpen, setReviewsIsOpen] = useState(false);

  const productRef = useRef<HTMLDivElement>(null);
  const reviewFormRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (productRef.current) {
      const width = productRef.current.offsetWidth;

      productRef.current.style.maxWidth = `${width}px`;
    }
  }, []);

  const scrollToReview = () => {
    setReviewsIsOpen(true);

    if (reviewFormRef.current) {
      reviewFormRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <article ref={productRef} className={classNames(className)} {...props}>
      <div className="overflow-hidden rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)]">
        <div className="bg-white p-[30px]">
          <ProductItemHeader
            scrollToReview={scrollToReview}
            product={product}
          />
          <Divider className="mt-[20px]" />
          <main className="mt-[20px]">
            <ProductItemBody product={product} />
            <Divider className="mb-[20px] mt-[25px]" />
            <section className="flex flex-wrap items-center gap-x-[20px] gap-y-[10px]">
              <ButtonLink href={product.link}>Узнать подробнее</ButtonLink>
              {product.reviewCount !== 0 && (
                <Button
                  type="button"
                  appearance="secondary"
                  onClick={() => setReviewsIsOpen(!reviewsIsOpen)}
                  arrow={reviewsIsOpen ? "down" : "right"}
                  className="min-w-[150px]"
                >
                  Читать отзывы
                </Button>
              )}
            </section>
          </main>
        </div>
        <AnimatePresence initial={false} mode="wait">
          {reviewsIsOpen && (
            <motion.footer
              initial={{
                height: 0,
              }}
              animate={{
                height: "auto",
              }}
              exit={{
                height: 0,
              }}
            >
              <ProductItemFooter
                formRef={reviewFormRef}
                reviews={product.reviews}
              />
            </motion.footer>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
};
