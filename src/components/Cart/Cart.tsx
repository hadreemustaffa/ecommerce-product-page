import { PropsWithChildren } from "react";

interface CartProps {
  checkout: () => void;
}

const Cart = ({ checkout, children }: PropsWithChildren<CartProps>) => {
  return (
    <div className="absolute left-0 top-[4.5rem] z-[1] w-full">
      <div className="m-2 overflow-hidden rounded-lg  bg-white shadow-md">
        <p className="p-6 font-bold">Cart</p>
        <div className="w-full border-b-2 border-y-grayish-blue-dark opacity-10"></div>
        <div className="flex flex-col gap-6 p-6">
          {children}

          <button
            onClick={checkout}
            className="flex w-full justify-center rounded-lg bg-orange p-4 font-bold text-white"
            type="submit"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
