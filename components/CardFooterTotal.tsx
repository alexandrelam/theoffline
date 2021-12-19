import React from "react";
import gram2kilo from "../utils/unitConverter";

type Props = {
  /**weight displayed in the component */
  totalWeight: number;
  isWeightExceeded?: boolean;
};

const CardFooterTotal: React.FC<Props> = ({
  totalWeight,
  isWeightExceeded = false,
}): React.ReactElement => (
  <div className="flex justify-between border-y px-3 py-4">
    <span>Total</span>
    <span className={isWeightExceeded && "text-red-500"}>
      {gram2kilo(totalWeight)}kg
    </span>
  </div>
);

export default CardFooterTotal;
