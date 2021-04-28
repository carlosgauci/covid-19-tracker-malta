import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="container flex flex-col items-center text-white mt-6">
      <BiLoaderCircle className=" text-3xl animate-spin-slow mb-2" />
      <p>Loading data..</p>
    </div>
  );
};

export default Loader;
