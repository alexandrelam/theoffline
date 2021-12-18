import React from "react";
import gram2kilo from "../utils/unitConverter";

type Props = {
  /**weight displayed in the component */
  totalWeight: number;
};

const CardFooterTotal: React.FC<Props> = ({
  totalWeight,
}): React.ReactElement => (
  <div className="flex justify-between border-y px-3 py-4">
    <span>Total</span>
    <span>{gram2kilo(totalWeight)}kg</span>
  </div>
);

export default CardFooterTotal;
