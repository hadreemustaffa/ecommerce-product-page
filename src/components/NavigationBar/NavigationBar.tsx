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
        className="relative z-20 w-fit cursor-pointer xl:hidden"
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
        className={`absolute left-0 top-0 z-10 w-full  transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } xl:static xl:translate-x-0 `}
      >
        <ul className="flex h-screen w-4/6 flex-col gap-4 bg-white px-6 pt-20 xl:h-fit xl:w-full xl:flex-row xl:justify-between xl:px-0 xl:pt-0">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="flex font-bold xl:font-normal xl:text-grayish-blue-dark"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute left-0 top-0 -z-10 h-full w-full  bg-black opacity-75 xl:hidden"></div>
      </div>
    </>
  );
};

export default NavigationBar;
