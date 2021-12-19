import axios from "axios";
import React, { useState, useEffect } from "react";

import Item from "../types/Item";
import { airlines } from "../utils/airlines";

import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import CardFooterTotal from "../components/CardFooterTotal";
import CardFooterSubmit from "../components/CardFooterSubmit";
import IArrow from "../components/icons/IArrow";

import notify from "../utils/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  getTotalWeight,
  selectItems,
  selectSelected,
  setItems,
} from "../store/luggageSlice";

const Home: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  /**handle luggage items*/
  const items: Array<Item> = useAppSelector(selectItems);
  const selected: Array<Item> = useAppSelector(selectSelected);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (items.length) {
      setisLoading(false);
      return;
    }

    axios
      .get("https://weekndr.herokuapp.com/api/v2/cabin-luggage-inventory")
      .then((res) => {
        dispatch(setItems(res.data.items));
        setisLoading(false);
      })
      .catch(() => {
        notify();
        setisLoading(false);
      });
  }, []);

  /**handle weight */
  const [airlineLimit, setairlineLimit] = useState(airlines[0].limit || 0);
  const totalWeight = useAppSelector(getTotalWeight);

  const isWeightExceeded = totalWeight > airlineLimit;

  return (
    <>
      <ToastContainer />

      <div className="flex flex-col items-center gap-20 bg-zinc-100 h-screen p-10">
        <Dropdown setairlineLimit={setairlineLimit} />
        <div className="flex items-start gap-14">
          <Card
            className="self-start"
            isInventory={true}
            items={items}
            isLoading={isLoading}
          />
          <IArrow className="-mt-36" />
          <Card title="Selected" items={selected}>
            <CardFooterTotal
              totalWeight={totalWeight}
              isWeightExceeded={isWeightExceeded}
            />
            <CardFooterSubmit
              selectedItems={selected}
              isWeightExceeded={isWeightExceeded}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
