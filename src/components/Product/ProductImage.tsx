import { useEffect, useState } from "react";

import { ProductImageButton } from "../Button/Button";

import iconNext from "/images/icon-next.svg";
import iconPrevious from "/images/icon-previous.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface ImageThumbnailCollectionProps {
  id: number[];
  onClick: (e: React.MouseEvent<HTMLElement>, index: number) => void;
}

const ImageThumbnailCollection = ({
  id,
  onClick,
}: ImageThumbnailCollectionProps) => {
  return (
    <>
      <ul className={`hidden md:flex md:flex-row md:justify-between`}>
        {id.map((id, index) => (
          <li
            key={index}
            className="overflow-hidden rounded-xl"
            onClick={(e) => onClick(e, index)}
          >
            <img
              width={90}
              height={90}
              src={`/images/image-product-${id}-thumbnail.jpg`}
              alt=""
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export const ProductImage = () => {
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const id = [1, 2, 3, 4];
  const lastIndex = id.length - 1;
  const activeImagePath = `/images/image-product-${displayImageIndex + 1}.jpg`;
  const activeThumbnailPath = `/images/image-product-${
    displayImageIndex + 1
  }-thumbnail.jpg`;

  useEffect(() => {
    const addActiveClass = () => {
      const activeImageThumbnail = document.querySelector(
        `li > img[src="${activeThumbnailPath}"]`,
      );

      activeImageThumbnail?.parentElement?.classList.add("active");
    };

    window.addEventListener("resize", () => {
      addActiveClass();
    });
    window.addEventListener("load", () => {
      addActiveClass();
    });

    return () => {
      window.removeEventListener("resize", addActiveClass);
      window.removeEventListener("load", addActiveClass);
    };
  }, [activeThumbnailPath]);

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

  return (
    <>
      <div className="relative flex justify-center md:flex-col md:gap-8 lg:max-w-fit">
        {isMobile ? (
          <>
            <ProductImageButton
              label="Show Previous Image"
              side={"left-0"}
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
              side={"right-0"}
              onClick={handleShowNextImage}
              iconPath={iconNext}
            />
          </>
        ) : (
          <>
            <img
              className="md:rounded-xl lg:max-w-md "
              src={activeImagePath}
              alt=""
            />
            <ImageThumbnailCollection
              id={id}
              onClick={handleSelectImageThumbnail}
            />
          </>
        )}
      </div>
    </>
  );
};
