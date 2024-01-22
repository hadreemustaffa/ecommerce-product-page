import { useState } from "react";

import menuIconOpen from "/images/icon-menu.svg";
import menuIconClose from "/images/icon-close.svg";
import { navLinks } from "../../constants";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        onClick={handleToggle}
        className="relative z-20 w-fit cursor-pointer lg:hidden"
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

      <div
        id="navBar"
        className={`absolute left-0 top-0 z-10 w-full  transition-transform lg:static lg:h-full lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex h-screen w-4/6 flex-col gap-4 bg-white px-6 pt-20 lg:h-full lg:w-full lg:flex-row lg:justify-between lg:px-0 lg:pt-0">
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative lg:flex lg:h-full lg:flex-col lg:justify-center"
            >
              <a
                href="#"
                className="flex font-bold lg:font-normal lg:text-grayish-blue-dark lg:hover:after:absolute lg:hover:after:bottom-0 lg:hover:after:h-1 lg:hover:after:w-full lg:hover:after:bg-orange"
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
