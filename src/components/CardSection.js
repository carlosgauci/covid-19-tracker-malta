import React from "react";
import Card from "./Card";

const CardSection = ({ data }) => {
  const today = data[data.length - 1];
  const yesterday = data[data.length - 2];

  return (
    <section className="container flex justify-center py-4">
      <Card
        first={[today["New Cases"], "New Cases"]}
        second={[today.Recovered - yesterday.Recovered, "Recoveries"]}
        third={[today.Deaths - yesterday.Deaths, "Deaths"]}
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
