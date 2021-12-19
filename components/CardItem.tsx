import React, { useState } from "react";
import capitalize from "../utils/capitalize";
import Item from "../types/Item";
import { useAppDispatch } from "../store/hooks";
import { addSelected, removeSelected } from "../store/luggageSlice";

type Props = {
  /**item luggage from an airline */
  item: Item;
  isInventory?: boolean;
};

const CardItem: React.FC<Props> = ({
  item,
  isInventory = false,
}): React.ReactElement => {
  const dispatch = useAppDispatch();
  const [onHover, setonHover] = useState(false);

  const handleClick = (): void => {
    if (isInventory) dispatch(addSelected(item.label));
    else dispatch(removeSelected(item.label));
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
