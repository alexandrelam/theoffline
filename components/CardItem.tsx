import React, { useState } from "react";
import capitalize from "../utils/capitalize";
import Item from "../types/Item";

type Props = {
  /**item luggage from an airline */
  item: Item;
  addSelected: (label: string) => void;
};

const CardItem: React.FC<Props> = ({
  item,
  addSelected,
}): React.ReactElement => {
  const [onHover, setonHover] = useState(false);
  return (
    <div className="flex justify-between">
      <span className="font-bold">{capitalize(item.label)}</span>
      <div
        onMouseEnter={() => setonHover(true)}
        onMouseLeave={() => setonHover(false)}
      >
        {onHover ? (
          <button
            onClick={() => addSelected(item.label)}
            className="text-green-400 text-sm"
          >
            add
          </button>
        ) : (
          <span className="text-zinc-500 text-sm">{item.weight}g</span>
        )}
      </div>
    </div>
  );
};

export default CardItem;
