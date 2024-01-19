import { useState } from "react";

import { ProductImageButton } from "../Button/Button";

import iconNext from "/images/icon-next.svg";
import iconPrevious from "/images/icon-previous.svg";

export const ProductImage = () => {
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  const id = [1, 2, 3, 4];
  const lastIndex = id.length - 1;
  const images = id.map((id) => `/images/image-product-${id}.jpg`);
  const thumbnails = id.map(
    (id) => `/images/image-product-${id}-thumbnail.jpg`,
  );

  const handleShowPreviousImage = () => {
    if (displayImageIndex === 0) {
      setDisplayImageIndex(lastIndex);
    }

    if (displayImageIndex > 0) {
      setDisplayImageIndex(displayImageIndex - 1);
    }
  };

  const handleShowNextImage = () => {
    if (displayImageIndex === lastIndex) {
      setDisplayImageIndex(0);
    }

    if (displayImageIndex < lastIndex) {
      setDisplayImageIndex(displayImageIndex + 1);
    }
  };

  return (
    <>
      <div className="relative mx-auto">
        <ProductImageButton
          side={"left-0"}
          onClick={handleShowPreviousImage}
          iconPath={iconPrevious}
        />
        <img src={images[displayImageIndex]} alt="" />
        <ProductImageButton
          side={"right-0"}
          onClick={handleShowNextImage}
          iconPath={iconNext}
        />
      </div>
      <ul className={`hidden md:flex md:flex-row md:justify-between`}>
        {thumbnails.map((thumbnail, index) => (
          <li key={index} onClick={() => setDisplayImageIndex(index)}>
            <img src={thumbnail} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
};
