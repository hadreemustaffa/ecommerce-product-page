import { PropsWithChildren } from "react";

const Cart = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute left-0 top-[4.5rem] z-[1] w-full">
      <div className="m-2 flex flex-col gap-6 overflow-hidden rounded-lg bg-white px-6 py-8 shadow-md">
        <p className="font-bold">Cart</p>
        <div className="w-full border-b-2 border-y-grayish-blue-dark opacity-10"></div>
        {children}
      </div>
    </div>
  );
};

export default Cart;
