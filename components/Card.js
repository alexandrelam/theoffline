import React, { Children } from "react";

export default function Card({ title = "Inventory", className, children }) {
  return (
    <div className={`w-80 bg-white rounded-lg border shadow-lg ${className}`}>
      <h2 className="font-bold text-lg border-b text-center py-4">{title}</h2>
      <div className="h-96"></div>
      {children}
    </div>
  );
}
