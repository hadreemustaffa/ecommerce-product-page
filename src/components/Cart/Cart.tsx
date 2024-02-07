import { PropsWithChildren, useEffect, useState } from "react";

import cartIcon from "/images/icon-cart.svg";
interface CartProps {
  count: number;
}

const Cart = ({ count, children }: PropsWithChildren<CartProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const el = document.getElementById("cartIcon");

    if (!isOpen) {
      return el?.setAttribute("aria-expanded", `${!isOpen.toString()}`);
    }
    el?.setAttribute("aria-expanded", `${isOpen.toString()}`);
  });

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        id="cartIcon"
        aria-label="Cart"
        onClick={handleClick}
        aria-controls="cartContainer"
        aria-expanded="false"
        className="relative"
      >
        <img aria-hidden="true" src={cartIcon} width={22} height={22} alt="" />

        {count > 0 && (
          <p className="absolute -right-2 -top-1 rounded-2xl bg-orange px-2 text-sm text-white">
            {count}
          </p>
        )}
      </button>

      {isOpen && (
        <div
          id="cartContainer"
          className="absolute left-0 top-20 z-[1] w-full md:left-auto md:right-20 md:max-w-96"
        >
          <div className="m-2 flex flex-col gap-6 overflow-hidden rounded-lg bg-white px-6 py-8 shadow-md">
            <p className="font-bold">Cart</p>
            <div className="w-full border-b-2 border-y-grayish-blue-dark opacity-10"></div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
