import { useState } from "react";

import { ItemCountButton } from "../Button/Button";
import iconMinus from "/images/icon-minus.svg";
import iconPlus from "/images/icon-plus.svg";

interface ProductFormInputProps {
  onSubmit: (e) => void;
}

export const ProductFormInput = ({ onSubmit }: ProductFormInputProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="flex flex-col justify-center gap-4"
    >
      <label htmlFor="quantityInput" className="sr-only">
        Quantity:
      </label>
      <div className="flex flex-row justify-between rounded-lg bg-grayish-blue bg-opacity-10 px-6 py-4">
        <ItemCountButton
          disabled={count === 0}
          iconPath={iconMinus}
          onClick={decrement}
        />
        <input
          type="number"
          id="quantityInput"
          aria-describedby="product quantity to add to cart"
          className="bg-[transparent] text-center"
          placeholder="0"
          min={1}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          required
        />
        <ItemCountButton iconPath={iconPlus} onClick={increment} />
      </div>
      <button
        className="flex cursor-pointer flex-row justify-center gap-2 rounded-lg bg-orange p-4 font-bold text-white transition-all disabled:pointer-events-none disabled:bg-grayish-blue"
        disabled={count === 0}
        type="submit"
      >
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="currentColor"
            fillRule="nonzero"
          />
        </svg>
        Add To Cart
      </button>
    </form>
  );
};