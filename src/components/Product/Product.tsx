import { PropsWithChildren } from "react";
import { DISCOUNT, DISCOUNTED_PRICE, ORIGINAL_PRICE } from "../../constants";
import { ProductImage } from "./ProductImage";

const Product = ({ children }: PropsWithChildren) => {
  return (
    <main className="md:max-w-xl lg:flex lg:max-w-none  lg:flex-row lg:justify-between lg:gap-16 lg:px-10 lg:py-20 lg:pt-20 xl:gap-32">
      <ProductImage />

      <div className="flex flex-col justify-center gap-4 p-6 md:px-0 lg:basis-1/2">
        <div className="flex flex-col gap-4">
          <p className="font-bold text-orange">SNEAKER COMPANY</p>
          <h1 className="text-xl font-bold">Fall Limited Edition Sneakers</h1>
          <p className="text-grayish-blue-dark">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="flex flex-row items-center justify-between lg:flex-col lg:items-start">
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
