import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ data }) => {
  // State to detemine which chart to show (30, 180, 365 days)
  const [chart, setChart] = useState(30);

  // Get dates for chart labels
  const dates = data.map((data) => data.Date);

  // New cases
  const newCases = data.map((data) => data["New Cases"]);

  // Deaths & Recoveries
  // Subtract each entry in the array by the one before it to get daily data, since api only provides totals
  const deaths = data.map((data) => data.Deaths);
  for (let i = deaths.length - 1; i >= 0; i--) {
    deaths[i] = deaths[i] - deaths[i - 1];
  }
  const recoveries = data.map((data) => data.Recovered);
  for (let i = recoveries.length - 1; i >= 0; i--) {
    recoveries[i] = recoveries[i] - recoveries[i - 1];
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
    labels: determineDataSlice(dates),
    datasets: [
      {
        label: "New Cases",
        fill: false,
        tension: 0.1,
        borderColor: "#2b4575",
        data: determineDataSlice(newCases),
      },
      {
        label: "Recoveries",
        fill: false,
        tension: 0,
        borderColor: "#00d37b",
        data: determineDataSlice(recoveries),
      },
      {
        label: "Deaths",
        fill: false,
        tension: 0,
        borderColor: "#951313",
        data: determineDataSlice(deaths),
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
