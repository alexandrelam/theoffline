import React from "react";
import Link from "next/link";
import Item from "../types/Item";

type Props = {
  isWeightExceeded: boolean;
  airlineLabel: string;
  selectedItems: Array<Item>;
};

const CardFooterSubmit: React.FC<Props> = ({
  isWeightExceeded,
  airlineLabel,
  selectedItems,
}): React.ReactElement => {
  const isDisabled = isWeightExceeded || !selectedItems.length;
  return (
    <div className="px-4 py-5">
      <Link
        href={{
          pathname: "/report",
          query: {
            airline: airlineLabel,
            items: JSON.stringify(selectedItems),
          },
        }}
        passHref
      >
        <button
          disabled={isDisabled}
          className={`rounded w-full h-10 text-white hover:shadow-lg ${
            isDisabled
              ? "bg-zinc-400 hover:bg-zinc-500 cursor-not-allowed	"
              : "bg-zinc-900 hover:bg-zinc-800"
          }`}
        >
          See resume
        </button>
      </Link>
    </div>
  );
};
export default CardFooterSubmit;
