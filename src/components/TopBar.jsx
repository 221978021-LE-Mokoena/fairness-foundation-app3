import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import './TopBar.css';

// Register necessary Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

function TopBar() {
  const stats = [
    {
      name: 'New Reports',
      value: '1,245',
      change: 'up',
      percentage: '12',
      caption: 'Compared to last week',
      data: [200, 400, 600, 800, 1245],
      roundedCorners: 'rounded-left',
      areaColor: 'rgba(76, 175, 80, 0.2)', // Green fill
    },
    {
      name: 'Resolved Cases',
      value: '893',
      change: 'down',
      percentage: '5',
      caption: 'Compared to last week',
      data: [700, 750, 800, 850, 893],
      roundedCorners: '',
      areaColor: 'rgba(244, 67, 54, 0.2)', // Red fill
    },
    {
      name: 'Active Users',
      value: '4,503',
      change: 'up',
      percentage: '20',
      caption: 'Compared to last week',
      data: [3500, 3800, 4200, 4500, 4503],
      roundedCorners: 'rounded-right',
      areaColor: 'rgba(33, 150, 243, 0.2)', // Blue fill
    },
  ];

  return (
    <div className="top-section">
      <div className="top-bar">
        <div className="search-bar-container">
          <FiSearch className="search-icon" />
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="project-heading">
          <h1>Project</h1>
          <div className="filter">
            <FiFilter className="filter-icon" /> Filter
          </div>
        </div>
      </div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`stat-card ${stat.roundedCorners} ${
              index === 1 ? 'middle-stat-card' : ''
            }`}
          >
            <div className="stat-content">
              <h3 className="stat-name">{stat.name}</h3>
              <div className="stat-header">
                <p className="stat-value">{stat.value}</p>
                <div className="stat-percentage-container">
                  <span
                    className="stat-change-icon"
                    style={{ color: stat.change === 'up' ? 'green' : 'red' }}
                  >
                    {stat.change === 'up' ? (
                      <AiOutlineArrowUp />
                    ) : (
                      <AiOutlineArrowDown />
                    )}
                  </span>
                  <span
                    className="stat-percentage"
                    style={{
                      color: stat.change === 'up' ? 'green' : 'red',
                      marginLeft: '5px',
                    }}
                  >
                    {stat.percentage}%
                  </span>
                </div>
              </div>
              <p className="stat-caption">{stat.caption}</p>
            </div>
            <div className="stat-chart">
              <Line
                data={{
                  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                  datasets: [
                    {
                      data: stat.data,
                      borderColor: stat.change === 'up' ? '#4caf50' : '#f44336',
                      backgroundColor: stat.areaColor, // Use the areaColor for the fill
                      fill: true, // Enables the area chart
                      tension: 0.4,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { display: false },
                    y: { display: false },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
