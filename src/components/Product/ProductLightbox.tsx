import { useEffect, useState } from "react";
import { useImageURL } from "../../hooks/useImagePath";
import { ProductThumbnails } from "./ProductThumbnails";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ProductImage } from "./ProductImage";

export const ProductLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  const id = [1, 2, 3, 4];
  const activeImagePath = useImageURL(
    `/ecommerce-product-page/images/image-product-${displayImageIndex + 1}.jpg`,
  );
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    const addActiveClass = () => {
      const imageThumbnailContainer = document.querySelectorAll(`li.lightbox`);

      console.log(imageThumbnailContainer);
      imageThumbnailContainer[displayImageIndex]?.classList.add("active");
    };

    if (isOpen) {
      addActiveClass();
    }
  }, [isOpen, displayImageIndex]);

  const handleSelectLightboxThumbnail = (
    e: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    const activeLightboxThumbnail = document.querySelector(".lightbox.active");
    activeLightboxThumbnail?.classList.remove("active");
    e.currentTarget.classList.add("active");
    setDisplayImageIndex(index);
  };

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <ProductImage onClick={handleOpen} />
      {isDesktop && isOpen ? (
        <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-75">
          <div className="flex flex-col gap-4">
            <button className="ml-auto mr-0" onClick={handleClose}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="white"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <img
              className="md:rounded-xl lg:max-w-md "
              src={activeImagePath}
              alt=""
            />
            <ProductThumbnails
              id={id}
              onClick={handleSelectLightboxThumbnail}
              addClass="lightbox"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
