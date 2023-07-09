import classNames from "classnames";
import parse from "html-react-parser";
import { IProductAbout } from "./ProductAbout.interface";
import styles from "./ProductAbout.module.css";

export const ProductAbout = ({ about, className, ...props }: IProductAbout) => {
  if (!about) {
    return null;
  }

  if (about.length === 0) {
    return null;
  }

  const parsingText = parse(about);

  return (
    <section className={classNames(styles.about, className)} {...props}>
      {parsingText}
    </section>
  );
};
