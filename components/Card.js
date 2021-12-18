import React from "react";
import CardItem from "./CardItem";
import ClipLoader from "react-spinners/ClipLoader";

export default function Card({
  title = "Inventory",
  items,
  isLoading,
  isInventory,
  className,
  children,
}) {
  return (
    <div className={`w-80 bg-white rounded-lg border shadow-lg ${className}`}>
      <h2 className="font-bold text-lg border-b text-center py-4">{title}</h2>
      <div
        className={`p-4 flex flex-col gap-1 ${!isInventory && "h-96"} ${
          isLoading && "items-center justify-center h-96"
        }`}
      >
        {isLoading ? (
          <ClipLoader size={30} />
        ) : items?.length ? (
          items.map((item, index) => <CardItem key={index} item={item} />)
        ) : (
          <span className="text-zinc-500 text-sm">No items available...</span>
        )}
      </div>
      {children}
    </div>
  );
}
