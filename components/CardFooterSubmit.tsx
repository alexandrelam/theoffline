import React from "react";

type Props = {
  isWeightExceeded: boolean;
};

const CardFooterSubmit: React.FC<Props> = ({
  isWeightExceeded,
}): React.ReactElement => (
  <div className="px-4 py-5">
    <button
      disabled={isWeightExceeded}
      className={`rounded w-full h-10 text-white hover:shadow-lg ${
        isWeightExceeded
          ? "bg-zinc-400 hover:bg-zinc-500 cursor-not-allowed	"
          : "bg-zinc-900 hover:bg-zinc-800"
      }`}
    >
      See resume
    </button>
  </div>
);

export default CardFooterSubmit;
