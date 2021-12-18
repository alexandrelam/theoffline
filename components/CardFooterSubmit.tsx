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
      className="bg-zinc-400 rounded w-full h-10 text-white hover:bg-zinc-500 hover:shadow-lg"
    >
      See resume
    </button>
  </div>
);

export default CardFooterSubmit;
