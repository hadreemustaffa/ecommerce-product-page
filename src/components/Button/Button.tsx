import { MouseEventHandler } from "react";

interface ButtonProps {
  side?: string;
  disabled?: boolean;
  label: string;
  padding: string;
  iconPath: string;
  onClick: () => void | MouseEventHandler<HTMLButtonElement>;
}

export const ProductImageButton = ({
  side,
  iconPath,
  label,
  padding,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`absolute ${side} top-0 flex h-full items-center ${padding}`}
    >
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white">
        <img src={iconPath} width={10} height={14} alt="" />
      </div>
    </button>
  );
};

export const ItemCountButton = ({
  iconPath,
  onClick,
  label,
  disabled,
}: ButtonProps) => {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      type="button"
      disabled={disabled}
      className="disabled:opacity-50"
    >
      <img src={iconPath} alt="" />
    </button>
  );
};
