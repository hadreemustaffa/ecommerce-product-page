import { FormEvent, useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { CartItem } from "./components/Cart/CartItem";
import Product from "./components/Product/Product";
import { ProductFormInput } from "./components/Product/ProductFormInput";
import { DISCOUNTED_PRICE } from "./constants";

export default function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cartState, setCartState] = useState("empty");

  const TOTAL_PRICE = (DISCOUNTED_PRICE * itemCount).toFixed(2);

  const handleRemove = () => {
    setCartState("empty");
    setItemCount(0);
  };

  const handleCheckout = () => {
    setCartState("checkout");
    setItemCount(0);
    setTimeout(() => {
      setCartState("empty");
    }, 2000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget.quantityInput;
    setItemCount((prev) => prev + Number(target.value));
    setCartState("added");
  };

  return (
    <>
      <Header count={itemCount}>
        <Cart>
          <CartItem
            count={itemCount}
            price={TOTAL_PRICE}
            state={cartState}
            remove={handleRemove}
            checkout={handleCheckout}
          />
        </Cart>
      </Header>

      <Product>
        <ProductFormInput onSubmit={handleSubmit} state={cartState} />
      </Product>
    </>
  );
}
