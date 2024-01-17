import { FormEvent, useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { CartItem } from "./components/Cart/CartItem";
import Product from "./components/Product/Product";
import { ProductFormInput } from "./components/Product/ProductFormInput";
import { DISCOUNTED_PRICE } from "./constants";

export default function App() {
  const [isEmpty, setIsEmpty] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const TOTAL_PRICE = (DISCOUNTED_PRICE * itemCount).toFixed(2);

  const handleRemove = () => {
    setIsEmpty(true);
    setItemCount(0);
  };

  const handleCheckout = () => {
    setIsEmpty(true);
    setItemCount(0);
  };

  interface CustomElement extends HTMLFormElement {
    quantityInput: HTMLInputElement;
  }

  const handleSubmit = (e: FormEvent<CustomElement>) => {
    e.preventDefault();
    const target = e.currentTarget.quantityInput;

    setItemCount((prev) => prev + Number(target.value));
    if (itemCount !== -1) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <>
      <Header count={itemCount}>
        <Cart>
          <CartItem
            count={itemCount}
            price={TOTAL_PRICE}
            isEmpty={isEmpty}
            remove={handleRemove}
            checkout={handleCheckout}
          />
        </Cart>
      </Header>

      <Product>
        <ProductFormInput onSubmit={handleSubmit} />
      </Product>
    </>
  );
}
