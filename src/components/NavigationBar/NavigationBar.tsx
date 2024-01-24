import { useState } from "react";

import menuIconOpen from "/images/icon-menu.svg";
import menuIconClose from "/images/icon-close.svg";
import { navLinks } from "../../constants";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isMobile && (
        <button
          onClick={handleToggle}
          className="relative z-20 w-fit cursor-pointer lg:hidden"
          aria-label="Navigation Menu"
          aria-controls="navBar"
          aria-expanded="false"
          type="button"
        >
          <img
            src={isOpen ? menuIconClose : menuIconOpen}
            width={16}
            height={16}
            alt=""
          />
        </button>
      )}

      <div
        id="navBar"
        className={`absolute left-0 top-0 z-10 w-full transition-transform md:static md:h-full md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex h-screen w-4/6 flex-col gap-4 bg-white px-6 pt-20 md:h-full md:w-full md:flex-row md:justify-between md:gap-2 md:px-0 md:pt-0">
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative lg:flex lg:h-full lg:flex-col lg:justify-center"
            >
              <a
                href="#"
                className="flex font-bold md:font-normal md:text-grayish-blue-dark md:hover:text-black lg:hover:after:absolute lg:hover:after:bottom-0 lg:hover:after:h-1 lg:hover:after:w-full lg:hover:after:bg-orange"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute left-0 top-0 -z-10 h-full w-full  bg-black opacity-75 lg:hidden"></div>
      </div>
    </>
  );
};

export default NavigationBar;
