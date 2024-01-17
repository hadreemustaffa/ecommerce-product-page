import productImg from "/images/image-product-1-thumbnail.jpg";
import iconDelete from "/images/icon-delete.svg";
import { DISCOUNTED_PRICE } from "../../constants";

interface CartItemProps {
  count: number;
  price: string;
  isEmpty: boolean;
  remove: () => void;
  checkout: () => void;
}

export const CartItem = ({
  count,
  price,
  isEmpty,
  remove,
  checkout,
}: CartItemProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 ">
      {isEmpty ? (
        <>
          <p id="cartMessage">Your cart is empty</p>
        </>
      ) : (
        <>
          <div className="flex w-full flex-row justify-between gap-3">
            <img
              src={productImg}
              width={52}
              height={52}
              className="rounded-md"
              alt=""
            />
            <div className="flex flex-col text-grayish-blue-dark">
              <p>Fall Limited Edition Sneakers</p>
              <div className="flex flex-row gap-2">
                <p>
                  ${DISCOUNTED_PRICE.toFixed(2)} x {count}
                </p>
                <p className="font-bold text-dark-blue">${price}</p>
              </div>
            </div>
            <button onClick={remove}>
              <img src={iconDelete} alt="" />
            </button>
          </div>
          <button
            onClick={checkout}
            className="flex w-full justify-center rounded-lg bg-orange p-4 font-bold text-white"
            type="submit"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};
