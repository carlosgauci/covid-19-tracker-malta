import React from "react";
import uuid from "react-uuid";

const Card = ({ first, second, third, date }) => {
  return (
    <article className="bg-white w-60 rounded-md overflow-hidden my-2 xs:mb-0 xs:mx-4 shadow-lg">
      {[first, second, third].map((data) => {
        return (
          <div className="py-3 flex flex-col items-center" key={uuid()}>
            <p className="text-4xl font-semibold mb-1">
              {data[0].toLocaleString()}
            </p>
            <p>{data[1]}</p>
          </div>
        );
      })}
      <div className="bg-green-500 text-white text-center text-xs font-semibold py-1">
        {date}
      </div>
    </article>
  );
};

export default Card;
