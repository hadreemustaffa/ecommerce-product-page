import { useState } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";

import brandLogo from "/images/logo.svg";
import imgAvatar from "/images/image-avatar.png";
import iconCart from "/images/icon-cart.svg";

interface Content {
  count: number;
  children: React.ReactNode;
}

const BrandLogo = () => {
  return (
    <>
      <a href="/">
        <img src={brandLogo} alt="" />
      </a>
    </>
  );
};

const Header = ({ count, children }: Content) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="flex flex-row justify-between gap-12 p-6 xl:border-b-grayish-blue xl:px-0 xl:pb-8 xl:pt-7">
      <div className="flex flex-row items-center gap-6 xl:flex-row-reverse xl:gap-14 ">
        <NavigationBar />
        <BrandLogo />
      </div>

      <div className="flex flex-row gap-6">
        <button onClick={handleOpen} className="relative">
          <img src={iconCart} width={22} height={22} alt="" />

          {count === 0 ? null : (
            <p className="absolute -right-2 -top-1 rounded-2xl bg-orange px-2 text-sm text-white">
              {count}
            </p>
          )}
        </button>

        {isOpen && children}

        <img src={imgAvatar} width={22} height={22} alt="" />
      </div>
    </header>
  );
};

export default Header;
