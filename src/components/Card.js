import React from "react";
import uuid from "react-uuid";

const Card = ({ first, second, third }) => {
  return (
    <article className="bg-white w-60 rounded-md overflow-hidden mx-4 shadow-lg">
      {[first, second, third].map((data) => {
        return (
          <div className="py-3 flex flex-col items-center" key={uuid()}>
            <p className="text-4xl font-semibold mb-1">{data[0]}</p>
            <p>{data[1]}</p>
          </div>
        );
      })}
      <div className="bg-green-600 text-white text-center">date</div>
    </article>
  );
};

export default Card;
