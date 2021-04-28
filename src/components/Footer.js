import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="container flex flex-col items-center bg-gray-900 rounded-b-md rounded-l-mb py-4 mb-4 text-white">
      <a
        href="https://github.com/carlosgauci/covid-19-tracker-malta-v2"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub className="mb-2 text-3xl" />
      </a>
      <p className="text-xs">Powered by React & Chart.js</p>
    </footer>
  );
};

export default Footer;
