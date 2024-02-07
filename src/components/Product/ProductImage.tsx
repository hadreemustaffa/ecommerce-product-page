import { useEffect, useState } from "react";

import { ProductImageButton } from "../Button/Button";

import iconNext from "/images/icon-next.svg";
import iconPrevious from "/images/icon-previous.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useImageURL } from "../../hooks/useImagePath";
import { ProductThumbnails } from "./ProductThumbnails";
import { ProductLightbox } from "./ProductLightbox";

export const ProductImage = () => {
  const [displayImageIndex, setDisplayImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const id = [1, 2, 3, 4];
  const lastIndex = id.length - 1;
  const activeImagePath = useImageURL(
    `/ecommerce-product-page/images/image-product-${displayImageIndex + 1}.jpg`,
  );

  useEffect(() => {
    const imageThumbnailContainer = document.querySelectorAll(`.image`);

    const addActiveClass = () => {
      imageThumbnailContainer[displayImageIndex]?.classList.add("active");
    };

    addActiveClass();
  });

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

  const handleSelectImageThumbnail = (
    e: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    const activeImageThumbnail = document.querySelector(".active");
    activeImageThumbnail?.classList.remove("active");
    e.currentTarget.classList.add("active");
    setDisplayImageIndex(index);
  };

  const handleOpen = () => {
    if (isDesktop) {
      setIsOpen(true);
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex justify-center md:flex-col md:gap-8 lg:max-w-fit">
        {isMobile ? (
          <>
            <ProductImageButton
              label="Show Previous Image"
              side={"left-0"}
              padding="p-4"
              onClick={handleShowPreviousImage}
              iconPath={iconPrevious}
            />
            <img
              className="md:rounded-xl lg:max-w-md"
              src={activeImagePath}
              alt=""
            />
            <ProductImageButton
              label="Show Next Image"
              side={"right-0"}
              padding="p-4"
              onClick={handleShowNextImage}
              iconPath={iconNext}
            />
          </>
        ) : (
          <>
            <img
              className="hover:cursor-pointer md:rounded-xl lg:max-w-md"
              src={activeImagePath}
              alt=""
              onClick={handleOpen}
            />
            <ProductThumbnails
              id={id}
              addClass="image"
              onClick={handleSelectImageThumbnail}
            />
          </>
        )}
      </div>

      {isOpen && isDesktop && (
        <ProductLightbox
          id={id}
          index={displayImageIndex}
          close={handleClose}
        />
      )}
    </>
  );
};
