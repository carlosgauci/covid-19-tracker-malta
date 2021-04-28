import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <section className="container flex justify-center py-4">
      <Card />
      <Card />
    </section>
  );
};

export default CardSection;
