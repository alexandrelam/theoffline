import React from "react";
import Card from "../components/Card";
import { useAppSelector } from "../store/hooks";
import { selectAirline } from "../store/airlineSlice";
import Item from "../types/Item";
import { selectSelected } from "../store/luggageSlice";

const Report = () => {
  const airline: string = useAppSelector(selectAirline);
  const items: Array<Item> = useAppSelector(selectSelected);

  return (
    <div className="flex flex-col items-center bg-zinc-100 h-screen">
      <span className="block border px-4 py-2 rounded my-20 bg-white">
        {airline}
      </span>
      <Card title="My backpack" items={items} />
    </div>
  );
};

export default Report;
