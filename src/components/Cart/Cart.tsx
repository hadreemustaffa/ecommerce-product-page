import { PropsWithChildren, useState } from "react";

interface CartProps {
  count: number;
}

const Cart = ({ count, children }: PropsWithChildren<CartProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button aria-label="Cart" onClick={handleClick} className="relative">
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

      {isOpen && (
        <div className="absolute left-0 top-20 z-[1] w-full md:left-auto md:right-20 md:max-w-96">
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
