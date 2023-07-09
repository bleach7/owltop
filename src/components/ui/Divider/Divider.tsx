import classNames from "classnames";
import { IDivider } from "./Divider.interface";

export const Divider = ({ className, ...props }: IDivider) => {
  return (
    <hr className={classNames("border-[#EBEBEB]", className)} {...props} />
  );
};
