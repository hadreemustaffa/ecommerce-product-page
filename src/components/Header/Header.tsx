import { useState } from "react";

import NavigationBar from "../NavigationBar/NavigationBar";

import brandLogo from "/images/logo.svg";
import imgAvatar from "/images/image-avatar.png";

interface HeaderProps {
  count: number;
  children: React.ReactNode;
}

const BrandLogo = () => {
  return (
    <>
      <a href="/" aria-label="Homepage">
        <img src={brandLogo} width={138} height={20} alt="" />
      </a>
    </>
  );
};

const Header = ({ count, children }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="flex flex-row justify-between p-6 md:items-center md:px-0 lg:h-28 lg:items-stretch lg:border-b-[1px] lg:border-b-grayish-blue lg:p-0">
      <div className="flex flex-row items-center gap-6 md:flex-row-reverse lg:gap-14 ">
        <NavigationBar />
        <BrandLogo />
      </div>

      <div className="flex flex-row items-center gap-6">
        <button aria-label="Cart" onClick={handleOpen} className="relative">
          <svg
            className="fill-grayish-blue-dark hover:fill-black"
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>

          {count > 0 && (
            <p className="absolute -right-2 -top-1 rounded-2xl bg-orange px-2 text-sm text-white">
              {count}
            </p>
          )}
        </button>

        {isOpen && children}

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
