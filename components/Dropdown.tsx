import React from "react";
import { airlines, Airline } from "../utils/airlines";
import { useAppDispatch } from "../store/hooks";
import { setAirline } from "../store/airlineSlice";

type Props = {
  setairlineLimit: (weight: number) => void;
};

const Dropdown: React.FC<Props> = ({ setairlineLimit }): React.ReactElement => {
  const dispatch = useAppDispatch();
  return (
    <select
      onChange={(e) => {
        const airline: Airline = JSON.parse(e.target.value);
        setairlineLimit(airline.limit);
        dispatch(setAirline(airline.label));
      }}
      className="px-4 py-2 border-2 border-zinc-300 outline-none rounded bg-zinc-100"
    >
      {airlines.map((airline) => {
        return (
          <option value={JSON.stringify(airline)} key={airline.label}>
            {airline.label}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
