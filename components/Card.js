import React from "react";
import CardItem from "./CardItem";

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
      <div className="h-96 p-4 flex flex-col gap-1">
        {isLoading ? (
          <span>is loading...</span>
        ) : (
          items &&
          items.map((item, index) => <CardItem key={index} item={item} />)
        )}
      </div>
      {children}
    </div>
  );
}
