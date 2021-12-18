import React from "react";
import CardItem from "./CardItem";
import ClipLoader from "react-spinners/ClipLoader";

export default function Card({
  title = "Inventory",
  items,
  isLoading,
  className,
  children,
}) {
  return (
    <div className={`w-80 bg-white rounded-lg border shadow-lg ${className}`}>
      <h2 className="font-bold text-lg border-b text-center py-4">{title}</h2>
      <div
        className={`h-96 p-4 flex flex-col gap-1 ${
          isLoading && "items-center justify-center"
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
