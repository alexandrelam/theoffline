import React from "react";
import { airlines } from "../utils/airlines";

export default function Dropdown() {
  return (
    <select className="px-4 py-2 border-2 border-gray-300 outline-none rounded bg-gray-100">
      {airlines.map((airline) => {
        return <option key={airline.label}>{airline.label}</option>;
      })}
    </select>
  );
}
