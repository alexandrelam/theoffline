import React from "react";
import { airlines } from "../utils/airlines";

type Props = {
  setairlineLimit: (weight: number) => void;
};

const Dropdown: React.FC<Props> = ({ setairlineLimit }): React.ReactElement => {
  return (
    <select
      onChange={(e) => setairlineLimit(parseInt(e.target.value))}
      className="px-4 py-2 border-2 border-zinc-300 outline-none rounded bg-zinc-100"
    >
      {airlines.map((airline) => {
        return (
          <option value={airline.limit} key={airline.label}>
            {airline.label}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
