import { useState } from "react";

import menuIconOpen from "/images/icon-menu.svg";
import menuIconClose from "/images/icon-close.svg";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const NavLinks = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <>
      <button
        onClick={handleToggle}
        className="relative z-20 w-fit cursor-pointer"
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
        }`}
      >
        <ul className="flex h-screen w-4/6 flex-col gap-4 bg-white px-6 pt-20">
          {NavLinks.map((link) => (
            <li key={link}>
              <a href="#" className="flex font-bold">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute left-0 top-0 -z-10 h-full  w-full bg-black opacity-75"></div>
      </div>
    </>
  );
}

export default NavigationBar;
