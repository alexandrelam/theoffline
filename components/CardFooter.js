import React from "react";

export default function CardFooter() {
  return (
    <>
      <div className="flex justify-between border-y px-3 py-4">
        <span>Total</span>
        <span>0g</span>
      </div>
      <div className="px-4 py-5">
        <button className="bg-gray-400 rounded w-full h-10 text-white hover:bg-gray-500 hover:shadow-lg">
          See resume
        </button>
      </div>
    </>
  );
}
