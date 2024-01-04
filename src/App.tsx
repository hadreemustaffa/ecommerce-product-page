import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

export default function App() {
  const [itemCount, setItemCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);

  function handleCount(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.target === document.querySelector("#btnAddItem")) {
      setItemCount(itemCount + 1);
    }
    if (e.target === document.querySelector("#btnRemoveItem")) {
      setItemCount(itemCount - 1);
    }
    if (itemCount > -1) {
      setIsEmpty(true);
    }
  }

  return (
    <>
      <Header isEmpty={isEmpty} itemCount={itemCount} />
      <Product />
    </>
  );
}
