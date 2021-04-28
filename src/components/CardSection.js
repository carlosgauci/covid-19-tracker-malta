import React from "react";
import Card from "./Card";

const CardSection = ({ data }) => {
  const today = data[data.length - 1];
  const yesterday = data[data.length - 2];

  return (
    <section className="container flex flex-col xs:flex-row items-center justify-center py-4">
      <Card
        first={[today["New Cases"], "New Cases"]}
        second={[today.Recovered - yesterday.Recovered, "New Recoveries"]}
        third={[today.Deaths - yesterday.Deaths, "New Deaths"]}
        date={today.Date}
      />

      <Card
        first={[today["Active Cases"], "Total Active Cases"]}
        second={[today.Recovered, "Total Recoveries"]}
        third={[today.Deaths, "Total Deaths"]}
        date={`${today.Date}`}
      />
    </section>
  );
};

export default CardSection;
