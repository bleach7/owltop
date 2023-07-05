import { Logo } from "../Logo";
import { IHeader } from "./Header.inteface";

export const Header = ({ ...props }: IHeader) => {
  return (
    <header {...props}>
      <div className="container">
        <div className="flex items-center justify-between py-[20px]">
          <Logo />
        </div>
      </div>
    </header>
  );
};
