import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import CardFooter from "../components/CardFooter";
import IArrow from "../components/icons/IArrow";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [items, setitems] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://weekndr.herokuapp.com/api/v2/cabin-luggage-inventory")
      .then((res) => {
        setitems(res.data.items);
        setisLoading(false);
      })
      .catch(() => console.log("fail to fetch"));
  }, []);

  return (
    <div className="flex flex-col items-center gap-20 bg-zinc-100 h-screen p-10">
      <Dropdown />
      <div className="flex gap-14">
        <Card className="self-start" items={items} isLoading={isLoading} />
        <IArrow className="-mt-36" />
        <Card title="Selected">
          <CardFooter />
        </Card>
      </div>
    </div>
  );
}
