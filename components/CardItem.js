import React, { useState } from "react";
import capitalize from "../utils/capitalize";

export default function CardItem({ item }) {
  const [onHover, setonHover] = useState(false);
  return (
    <div className="flex justify-between">
      <span className="font-bold">{capitalize(item.label)}</span>
      <div
        onMouseEnter={() => setonHover(true)}
        onMouseLeave={() => setonHover(false)}
      >
        {onHover ? (
          <button className="text-green-400 text-sm">add</button>
        ) : (
          <span className="text-zinc-500 text-sm">{item.weight}g</span>
        )}
      </div>
    </div>
  );
}
