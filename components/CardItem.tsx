import React, { useState } from "react";
import capitalize from "../utils/capitalize";
import Item from "../types/Item";

type Props = {
  /**item luggage from an airline */
  item: Item;
  isInventory?: boolean;
  /**select an item */
  addSelected: (label: string) => void;
  /**deselect an item */
  removeSelected: (label: string) => void;
};

const CardItem: React.FC<Props> = ({
  item,
  isInventory = false,
  addSelected,
  removeSelected,
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
          isInventory ? (
            <button
              onClick={() => addSelected(item.label)}
              className="text-green-500 text-sm"
            >
              add
            </button>
          ) : (
            <button
              onClick={() => removeSelected(item.label)}
              className="text-red-500 text-sm"
            >
              remove
            </button>
          )
        ) : (
          <span className="text-zinc-500 text-sm">{item.weight}g</span>
        )}
      </div>
    </div>
  );
};

export default CardItem;
