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

  const handleClick = (): void => {
    if (isInventory) addSelected(item.label);
    else removeSelected(item.label);
  };

  return (
    <button
      className="flex justify-between"
      onMouseEnter={() => setonHover(true)}
      onMouseLeave={() => setonHover(false)}
      onClick={handleClick}
    >
      <span className="font-bold">{capitalize(item.label)}</span>
      <div>
        {onHover ? (
          isInventory ? (
            <span className="text-green-500 text-sm">add</span>
          ) : (
            <span className="text-red-500 text-sm">remove</span>
          )
        ) : (
          <span className="text-zinc-500 text-sm">{item.weight}g</span>
        )}
      </div>
    </button>
  );
};

export default CardItem;
