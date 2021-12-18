import React from "react";
import Item from "../types/Item";

type Props = {
  totalWeight: number;
};

const CardFooterTotal: React.FC<Props> = ({
  totalWeight,
}): React.ReactElement => (
  <div className="flex justify-between border-y px-3 py-4">
    <span>Total</span>
    <span>{totalWeight}g</span>
  </div>
);

export default CardFooterTotal;
