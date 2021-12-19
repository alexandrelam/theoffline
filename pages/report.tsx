import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Card from "../components/Card";

const Report = () => {
  const router = useRouter();
  const { airline, items } = router.query;
  const parsedItems = JSON.parse(items);

  return (
    <div className="flex flex-col items-center bg-zinc-100 h-screen">
      <span className="block border px-4 py-2 rounded my-20 bg-white">
        {airline}
      </span>
      <Card title="My backpack" items={parsedItems} />
    </div>
  );
};

export default Report;
