import { ReactNode } from "react";

interface ProductLightboxProps {
  imagePath: string;
  close: () => void;
  children: ReactNode;
}

export const ProductLightbox = ({
  imagePath,
  close,
  children,
}: ProductLightboxProps) => {
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
          <img className="md:rounded-xl lg:max-w-md " src={imagePath} alt="" />
          {children}
        </div>
      </div>
    </>
  );
};
