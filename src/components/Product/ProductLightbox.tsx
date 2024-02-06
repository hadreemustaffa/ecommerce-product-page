import { useEffect, useState } from "react";

import { useImageURL } from "../../hooks/useImagePath";
import { ProductImageButton } from "../Button/Button";
import iconNext from "/images/icon-next.svg";
import iconPrevious from "/images/icon-previous.svg";
import { ProductThumbnails } from "./ProductThumbnails";

interface ProductLightboxProps {
  id: number[];
  index: number;
  close: () => void;
}

export const ProductLightbox = ({ id, close, index }: ProductLightboxProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const lastIndex = id.length - 1;
  const activeImagePath = useImageURL(
    `/ecommerce-product-page/images/image-product-${index + 1}.jpg`,
  );

  useEffect(() => {
    const imageThumbnailContainer = document.querySelectorAll(`lightbox`);
    const addActiveClass = () => {
      imageThumbnailContainer[imageIndex]?.classList.add("active");
    };
    addActiveClass();
  });

  const handleShowPreviousImage = () => {
    if (imageIndex === 0) {
      setImageIndex(lastIndex);
    }

    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleShowNextImage = () => {
    if (imageIndex === lastIndex) {
      setImageIndex(0);
    }

    if (imageIndex < lastIndex) {
      setImageIndex(imageIndex + 1);
    }
  };

  const handleSelectLightboxThumbnail = (
    e: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    const activeLightboxThumbnail = document.querySelector(".lightbox.active");
    activeLightboxThumbnail?.classList.remove("active");
    e.currentTarget.classList.add("active");
    setImageIndex(index);
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-75">
        <div className="flex flex-col gap-4">
          <button className="ml-auto mr-0" onClick={close}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="white"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <div className="relative w-fit">
            <ProductImageButton
              label="Show Previous Image"
              side={"-left-5"}
              padding="p-0"
              onClick={handleShowPreviousImage}
              iconPath={iconPrevious}
            />
            <img
              className="md:rounded-xl lg:max-w-md "
              src={activeImagePath}
              alt=""
            />
            <ProductImageButton
              label="Show Next Image"
              side={"-right-5"}
              padding="p-0"
              onClick={handleShowNextImage}
              iconPath={iconNext}
            />
          </div>

          <ProductThumbnails
            id={id}
            addClass="lightbox"
            onClick={handleSelectLightboxThumbnail}
          />
        </div>
      </div>
    </>
  );
};
