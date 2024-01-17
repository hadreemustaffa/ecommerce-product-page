import { PropsWithChildren } from "react";
import { ProductImage } from "./ProductImage";
import { DISCOUNT, DISCOUNTED_PRICE, ORIGINAL_PRICE } from "../../constants";

const Product = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <ProductImage />

      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-orange">SNEAKER COMPANY</p>
          <h2 className="text-xl font-bold">Fall Limited Edition Sneakers</h2>
          <p className="text-grayish-blue-dark">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <h2 className="text-xl font-bold">
              ${DISCOUNTED_PRICE.toFixed(2)}
            </h2>
            <p className="rounded-md bg-pale-orange px-2 font-bold text-orange">
              {DISCOUNT * 100}%
            </p>
          </div>
          <p className="font-bold text-grayish-blue line-through">
            ${ORIGINAL_PRICE.toFixed(2)}
          </p>
        </div>
        {children}
      </div>
    </main>
  );
};

export default Product;
