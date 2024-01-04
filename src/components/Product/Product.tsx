import iconNext from "/images/icon-next.svg";
import iconPrevious from "/images/icon-previous.svg";

interface ButtonProps {
  side: string;
  icon: string;
}

function Button({ side, icon }: ButtonProps) {
  return (
    <button
      type="button"
      className={`absolute md:hidden ${side}-0 top-0 flex h-full items-center p-4`}
    >
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white">
        <img src={icon} width={10} height={14} alt="" />
      </div>
    </button>
  );
}

function ProductImage() {
  const id: number[] = [1, 2, 3, 4];
  const thumbnail: string[] = [];
  const image: string[] = [];

  const thumbnailMap = id.map(
    (id) => `/images/image-product-${id}-thumbnail.jpg`,
  );
  const imageMap = id.map((id) => `/images/image-product-${id}.jpg`);

  thumbnail.push(...thumbnailMap);
  image.push(...imageMap);

  return (
    <div className="relative">
      <Button side={"left"} icon={iconPrevious} />
      <img src={image[0]} alt="" />
      <Button side={"right"} icon={iconNext} />
    </div>
  );
}

function ProductDetails() {
  return <div></div>;
}

function Product() {
  return (
    <>
      <ProductImage />
      <ProductDetails />
    </>
  );
}

export default Product;
