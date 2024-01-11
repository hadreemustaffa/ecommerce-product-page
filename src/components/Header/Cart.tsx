import productImg from "/images/image-product-1-thumbnail.jpg";
import iconDelete from "/images/icon-delete.svg";

interface CartProps {
  itemCount: number;
}

function Cart({ itemCount }: CartProps) {
  return (
    <div className="absolute left-0 top-[4.5rem] z-[1] w-full">
      <div className="m-2 h-64 overflow-hidden rounded-lg  bg-white shadow-md">
        <p className="p-6 font-bold">Cart</p>
        <div className="w-full border-b-2 border-y-grayish-blue-dark opacity-10"></div>
        <div className="flex flex-col gap-6 p-6">
          <div className="flex w-full flex-row justify-between ">
            <img
              src={productImg}
              width={52}
              height={52}
              className="rounded-md"
              alt=""
            />
            <div className="flex flex-col text-grayish-blue-dark">
              <p>Fall Limited Edition Sneakers</p>
              <div className="flex flex-row gap-2">
                <p>$125.00 x {itemCount}</p>
                <p className="font-bold text-dark-blue">$375.00</p>
              </div>
            </div>
            <button>
              <img src={iconDelete} alt="" />
            </button>
          </div>

          <button
            className="flex w-full justify-center rounded-lg bg-orange p-4 font-bold text-white"
            type="submit"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
