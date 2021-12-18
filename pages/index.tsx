import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import CardFooter from "../components/CardFooter";
import IArrow from "../components/icons/IArrow";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Item from "../types/Item";
import { ToastContainer } from "react-toastify";
import notify from "../utils/notify";
import "react-toastify/dist/ReactToastify.css";

const Home: React.FC = (): React.ReactElement => {
  const [items, setitems] = useState<Array<Item>>([]);
  const [selected, setselected] = useState<Array<Item>>([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://weekndr.herokuapp.com/api/v2/cabin-luggage-inventory")
      .then((res) => {
        setitems(res.data.items);
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

  return (
    <>
      <ToastContainer />

      <div className="flex flex-col items-center gap-20 bg-zinc-100 h-screen p-10">
        <Dropdown />
        <div className="flex gap-14">
          <Card
            className="self-start"
            isInventory={true}
            items={items}
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
            <CardFooter />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
