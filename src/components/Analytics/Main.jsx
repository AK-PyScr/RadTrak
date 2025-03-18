// import Chart from "./Chart/Chart";
// import Header from "./Headers/Haeder";

import "./main.css";
import { Link } from "react-router-dom";

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

const options = {
  aspectRatio: 1,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "#a9aaac",
      },
    },
    x: {
      beginAtZero: true,
      grid: {
        color: "#a9aaac",
      },
    },
  },
};
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Радиация (mR/hr)",
      data: [12, 19, 3, 5, 2, 3], // Начальные данные для графика
      borderColor: "#598775",
      borderWidth: 4,
      lineTension: 0.4,
      pointBackgroundColor: "#d3f59599",
      pointBorderColor: "white",
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverBackgroundColor: "rgba(255, 99, 132, 0.8)",
      pointHoverBorderColor: "rgba(255, 99, 132, 1)",
      pointHoverRadius: 6,
      showLine: true,
      spanGaps: false,
    },
  ],
};

export default function M() {
  return (
    <main>
      <header>
        <h2>RadTrak</h2>
        <div className="header-nav">
          <img className="change-theme" src="/icon/dark-theme.svg" alt="change-theme" />
          <img className="settings" src="/icon/settings-black.svg" alt="settings" />
        </div>
      </header>

      <section>
        <div className="board-data">
          <div>
            <p>Current Radiation Level</p>
            <p>Live</p>
          </div>
          <h2>127.34 µSv/h</h2>
          <p>Updated 2 min ago</p>
        </div>

        <div className="containerChart">
          <Line options={options} data={data} />
          <div className="Duration-Chart">
            <button id="Duration-1">24h</button>
            <button id="Duration-2">7d</button>
            <button id="Duration-3">30d</button>
          </div>
        </div>
        <div className="mode-container">
          <div className="nav-mode">
            <div className="mode">
              <img src="/icon/radioactive.svg" alt="radioactive" />
              <p>Radiation</p>

            </div>
            <div className="mode">
              <img src="/icon/temperature.svg" alt="temperature" />
              <p>Temperature</p>

            </div>
            <div className="mode">
              <img src="/icon/wind.svg" alt="pressure" />
              <p>Pressure</p>

            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-nav">
          <nav>
            <ul>
              <li>
                <img
                  className="nav-icon"
                  src="/icon/graph-black.svg"
                  alt="Graph icon"
                />
                <Link to="/">Analytics</Link>
              </li>
              <li>
                <img className="nav-icon" src="/icon/map.svg" alt="Map icon" />
                <Link to="/">Map</Link>
              </li>
              <li>
                <img
                  className="nav-icon"
                  src="/icon/notifications.svg"
                  alt="Alerts"
                />
                <Link to="/">Alerts</Link>
              </li>
              <li>
                <img
                  className="nav-icon"
                  src="/icon/user.svg"
                  alt="user icon"
                />
                <Link to="/">Profile</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  );
}
