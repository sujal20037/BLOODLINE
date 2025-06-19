// src/components/Chart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // X-axis labels (e.g., months)
    datasets: [
      {
        label: "Blood Requests",
        data: [50, 70, 80, 60, 90, 100], // Data points for each label
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
      {
        label: "Donations",
        data: [40, 65, 75, 55, 85, 95], // Data points for donations
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Blood Requests and Donations",
      },
    },
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-md" style={{ height: "400px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;
