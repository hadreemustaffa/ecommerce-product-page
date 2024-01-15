import productImg from "/images/image-product-1-thumbnail.jpg";
import iconDelete from "/images/icon-delete.svg";
import { DISCOUNTED_PRICE } from "../../constants";

interface CartContentProps {
  count: number;
  price: string;
  isEmpty: boolean;
  onClick: () => void;
}

export const CartContent = ({
  count,
  price,
  isEmpty,
  onClick,
}: CartContentProps) => {
  return (
    <div className="flex w-full flex-row justify-between ">
      {isEmpty ? (
        <>
          <p id="cartMessage">Your cart is empty</p>
        </>
      ) : (
        <>
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
                ${DISCOUNTED_PRICE} x {count}
              </p>
              <p className="font-bold text-dark-blue">${price}</p>
            </div>
          </div>
          <button onClick={onClick}>
            <img src={iconDelete} alt="" />
          </button>
        </>
      )}
    </div>
  );
};
