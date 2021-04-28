import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ data }) => {
  const [chart, setChart] = useState(30);

  const newCasesData = data.map((data) => data["New Cases"]);
  const dateData = data.map((data) => data.Date);

  // subtracting each entry in the array by the one before it to get daily deaths/recoveries, since api only provides totals
  const deathsData = data.map((data) => data.Deaths);
  for (let i = deathsData.length - 1; i >= 0; i--) {
    deathsData[i] = deathsData[i] - deathsData[i - 1];
  }

  const recoveriesData = data.map((data) => data.Recovered);
  for (let i = recoveriesData.length - 1; i >= 0; i--) {
    recoveriesData[i] = recoveriesData[i] - recoveriesData[i - 1];
  }

  const determineDataSlice = (data) => {
    if (chart === 30) {
      return data.slice(data.length - 30, data.length);
    } else if (chart === 180) {
      return data.slice(data.length - 180, data.length);
    } else {
      return data.slice(data.length - 365, data.length);
    }
  };

  const lineChartData = {
    labels: determineDataSlice(dateData),
    datasets: [
      {
        label: "New Cases",
        fill: false,
        tension: 0.1,
        borderColor: "#2b4575",
        data: determineDataSlice(newCasesData),
      },
      {
        label: "Recoveries",
        fill: false,
        tension: 0,
        borderColor: "#00d37b",
        data: determineDataSlice(recoveriesData),
      },
      {
        label: "Deaths",
        fill: false,
        tension: 0,
        borderColor: "#951313",
        data: determineDataSlice(deathsData),
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: true,
  };

  const chartDaySelect = [30, 180, 365];
  return (
    <section className="container bg-white rounded-lg my-4">
      <div className="py-2 flex justify-center">
        {chartDaySelect.map((day) => (
          <button
            onClick={() => setChart(day)}
            key={day}
            className={`bg-gray-50 border border-gray-200 rounded-md w-14 py-1 mx-1 focus:outline-none ${
              chart === day && "bg-gray-300 border-gray-400 font-semibold"
            }`}
          >
            {day}d
          </button>
        ))}
      </div>
      <Line data={lineChartData} options={chartOptions} />
    </section>
  );
};

export default Chart;
