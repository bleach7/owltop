"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { ButtonLink } from "../ButtonLink";
import { Divider } from "../Divider";
import { Heading } from "../Heading";
import { ProductItemFooter } from "../ProductItemFooter";
import { Text } from "../Text";
import { IProductItem } from "./ProductItem.interface";

export const ProductItem = ({ product, className, ...props }: IProductItem) => {
  const [reviewsIsOpen, setReviewsIsOpen] = useState(false);

  const productRef = useRef<HTMLDivElement>(null);

  const productResize = new ResizeObserver((entries) => {
    const rect = entries[0].contentRect;

    const width = rect.width;

    if (productRef.current) {
      productRef.current.style.width = `${width}px`;
    }
  });

  useLayoutEffect(() => {
    if (productRef) {
      productResize.observe(productRef.current as any);
    }

    return () => productResize.unobserve(productRef.current as any);
  }, []);

  return (
    <article ref={productRef} className={classNames(className)} {...props}>
      <div className="overflow-hidden rounded-[5px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)]">
        <div className="bg-white p-[30px]">
          <header>
            <Heading as="h3" size="sm">
              {product.title}
            </Heading>
          </header>
          <Divider className="mt-[20px]" />
          <main className="mt-[20px]">
            {product.description && (
              <Text size="md">{product.description}</Text>
            )}
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
              <ProductItemFooter reviews={product.reviews} />
            </motion.footer>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
};
