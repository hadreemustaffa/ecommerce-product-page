import { useImageURL } from "../../hooks/useImagePath";

interface ImageThumbnailCollectionProps {
  id: number[];
  addClass?: "lightbox";
  onClick: (e: React.MouseEvent<HTMLElement>, index: number) => void;
}

export const ProductThumbnails = ({
  id,
  onClick,
  addClass,
}: ImageThumbnailCollectionProps) => {
  const ThumbnailPath = (thumbnailId: number) =>
    useImageURL(
      `/ecommerce-product-page/images/image-product-${thumbnailId}-thumbnail.jpg`,
    );

  return (
    <>
      <ul className={`hidden md:flex md:flex-row md:justify-between`}>
        {id.map((id, index) => (
          <li
            key={index}
            className={`${addClass} thumbnail-container overflow-hidden rounded-xl`}
            onClick={(e) => onClick(e, index)}
          >
            <img width={90} height={90} src={ThumbnailPath(id)} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
};
