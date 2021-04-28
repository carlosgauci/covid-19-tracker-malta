import React from "react";

const Card = () => {
  return (
    <article className="bg-white w-60 rounded-md overflow-hidden mx-4 shadow-lg">
      <div className="py-3 flex flex-col items-center">
        <p className="text-4xl font-semibold">15</p>
        <p>New Cases</p>
      </div>

      <div className="py-3 flex flex-col items-center">
        <p className="text-4xl font-semibold">10</p>
        <p>Recoveries</p>
      </div>

      <div className="py-3 flex flex-col items-center">
        <p className="text-4xl font-semibold">1</p>
        <p>Deaths</p>
      </div>

      <div className="bg-green-600 text-white text-center">date</div>
    </article>
  );
};

export default Card;
