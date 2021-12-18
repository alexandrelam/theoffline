import React from "react";
import { airlines } from "../utils/airlines";

const Dropdown: React.FC = (): React.ReactElement => {
  return (
    <select className="px-4 py-2 border-2 border-zinc-300 outline-none rounded bg-zinc-100">
      {airlines.map((airline) => {
        return <option key={airline.label}>{airline.label}</option>;
      })}
    </select>
  );
};

export default Dropdown;