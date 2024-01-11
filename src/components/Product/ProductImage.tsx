import { useState } from "react";

import iconNext from "/images/icon-next.svg";
import iconPrevious from "/images/icon-previous.svg";

interface ButtonProps {
  side: string;
  iconPath: string;
  onClick: () => void;
}

const Button = ({ side, iconPath, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute md:hidden ${side} top-0 flex h-full items-center p-4`}
    >
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white">
        <img src={iconPath} width={10} height={14} alt="" />
      </div>
    </button>
  );
};

export const ProductImage = () => {
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  const id = [1, 2, 3, 4];
  const thumbnail = id.map((id) => `/images/image-product-${id}-thumbnail.jpg`);
  const image = id.map((id) => `/images/image-product-${id}.jpg`);
  const lastIndex = id.length - 1;

  function handleShowPreviousImage() {
    if (displayImageIndex === 0) {
      setDisplayImageIndex(lastIndex);
    }

    if (displayImageIndex > 0) {
      setDisplayImageIndex(displayImageIndex - 1);
    }
  }
  function handleShowNextImage() {
    if (displayImageIndex === lastIndex) {
      setDisplayImageIndex(0);
    }

    if (displayImageIndex < lastIndex) {
      setDisplayImageIndex(displayImageIndex + 1);
    }
  }

  return (
    <div className="relative">
      <Button
        side={"left-0"}
        onClick={handleShowPreviousImage}
        iconPath={iconPrevious}
      />
      <img src={image[displayImageIndex]} alt="" />
      <Button
        side={"right-0"}
        onClick={handleShowNextImage}
        iconPath={iconNext}
      />
    </div>
  );
};
