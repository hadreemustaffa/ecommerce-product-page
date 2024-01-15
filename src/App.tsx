import { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { CartContent } from "./components/Cart/CartContent";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemCount((prev) => prev + Number(e.target.quantityInput.value));
    if (itemCount !== -1) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <>
      <Header count={itemCount}>
        <Cart checkout={handleCheckout}>
          <CartContent
            count={itemCount}
            price={TOTAL_PRICE}
            isEmpty={isEmpty}
            onClick={handleRemove}
          />
        </Cart>
      </Header>

      <Product>
        <ProductFormInput onSubmit={handleSubmit} />
      </Product>
    </>
  );
}
