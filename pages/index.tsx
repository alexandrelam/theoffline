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
import { selectItems, setItems } from "../store/luggageSlice";

const Home: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const items2: Array<Item> = useAppSelector(selectItems);

  /**handle luggage items*/
  const [isLoading, setisLoading] = useState(true);
  const [items, setitems] = useState<Array<Item>>([]);
  const [selected, setselected] = useState<Array<Item>>([]);
  useEffect(() => {
    axios
      .get("https://weekndr.herokuapp.com/api/v2/cabin-luggage-inventory")
      .then((res) => {
        setitems(res.data.items);
        dispatch(setItems(res.data.items));
        setisLoading(false);
      })
      .catch(() => {
        notify();
        setisLoading(false);
      });
  }, []);

  const addSelected = (label: string) => {
    const movedItem: Item = items.find((item) => item.label === label);
    let itemsTmp = items;
    itemsTmp.splice(items.indexOf(movedItem), 1);
    setitems(itemsTmp);
    setselected([...selected, movedItem]);
  };

  const removeSelected = (label: string) => {
    const removeSelected: Item = selected.find((item) => item.label === label);
    let selectedTmp = selected;
    selectedTmp.splice(selected.indexOf(removeSelected), 1);
    setselected(selectedTmp);
    setitems([...items, removeSelected]);
  };

  /**handle airline */
  const [airlineLabel, setairlineLabel] = useState(airlines[0].label || "");

  /**handle weight */
  const [airlineLimit, setairlineLimit] = useState(airlines[0].limit || 0);
  const [totalWeight, settotalWeight] = useState(0);

  useEffect(() => {
    /**update total weight */
    let sum = 0;
    selected.forEach((item) => (sum += item.weight));
    settotalWeight(sum);

    /**is weight exceeded */
  }, [items, selected]);

  const isWeightExceeded = totalWeight > airlineLimit;

  return (
    <>
      <ToastContainer />

      <div className="flex flex-col items-center gap-20 bg-zinc-100 h-screen p-10">
        <Dropdown
          setairlineLabel={setairlineLabel}
          setairlineLimit={setairlineLimit}
        />
        <div className="flex gap-14">
          <Card
            className="self-start"
            isInventory={true}
            items={items2}
            isLoading={isLoading}
            addSelected={addSelected}
            removeSelected={removeSelected}
          />
          <IArrow className="-mt-36" />
          <Card
            title="Selected"
            items={selected}
            addSelected={addSelected}
            removeSelected={removeSelected}
          >
            <CardFooterTotal
              totalWeight={totalWeight}
              isWeightExceeded={isWeightExceeded}
            />
            <CardFooterSubmit
              selectedItems={selected}
              airlineLabel={airlineLabel}
              isWeightExceeded={isWeightExceeded}
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
