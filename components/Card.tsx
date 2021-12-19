import React from "react";
import CardItem from "./CardItem";
import ClipLoader from "react-spinners/ClipLoader";
import Item from "../types/Item";

type Props = {
  title?: string;
  items: Array<Item>;
  isLoading?: boolean;
  isInventory?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({
  title = "Inventory",
  items,
  isLoading = false,
  isInventory = false,
  className = "",
  children,
}): React.ReactElement => {
  return (
    <div className={`w-80 bg-white rounded-lg border shadow-lg ${className}`}>
      <h2 className="font-bold text-lg border-b text-center py-4">{title}</h2>
      <div
        className={`p-4 flex flex-col gap-1 ${!items.length && "h-96"} ${
          isLoading && "items-center justify-center h-96"
        }`}
      >
        {isLoading ? (
          <ClipLoader size={30} />
        ) : items?.length ? (
          items.map((item, index) => (
            <CardItem key={index} item={item} isInventory={isInventory} />
          ))
        ) : (
          <span className="text-zinc-500 text-sm">
            {`no items ${isInventory ? "available" : "selected"}...`}
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
