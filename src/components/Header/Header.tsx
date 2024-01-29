import { PropsWithChildren } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";

import brandLogo from "/images/logo.svg";
import imgAvatar from "/images/image-avatar.png";

const BrandLogo = () => {
  return (
    <>
      <a href="/" aria-label="Homepage">
        <img src={brandLogo} width={138} height={20} alt="" />
      </a>
    </>
  );
};

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className="flex flex-row justify-between p-6 md:items-center md:px-0 lg:h-28 lg:items-stretch lg:border-b-[1px] lg:border-b-grayish-blue lg:p-0">
      <div className="flex flex-row items-center gap-6 md:flex-row-reverse lg:gap-14 ">
        <NavigationBar />
        <BrandLogo />
      </div>

      <div className="flex flex-row items-center gap-6">
        {children}
        <a
          href="#"
          aria-label="Profile Page"
          className="hover:rounded-full hover:outline hover:outline-2 hover:outline-orange"
        >
          <img src={imgAvatar} className="h-6 w-6  lg:h-12 lg:w-12" alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
