import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardSection from "./CardSection";
import Chart from "./Chart";
import { readString } from "react-papaparse";
import axios from "axios";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // Get data from api
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/COVID19-Malta/COVID19-Cases/contents/COVID-19%20Malta%20-%20Aggregate%20Data%20Set.csv"
        );

        // Convert from base64 to string
        const decodedResponse = Buffer.from(response.data.content, "base64")
          .toString("ascii")
          .trim();

        // Convert string to readable data
        const jsonData = readString(decodedResponse, {
          header: true,
          dynamicTyping: true,
        });

        setData(jsonData.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {data && <CardSection data={data} />}
      {data && <Chart data={data} />}
    </>
  );
};

export default App;
