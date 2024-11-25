// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Ensure the CSS file path is correct

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      <p>This is the central hub for your activities and updates.</p>
      <div className="dashboard-links">
        <button className="dashboard-btn">View Reports</button>
        <button className="dashboard-btn">Access Resources</button>
        <button className="dashboard-btn">Log Out</button>
      </div>
    </div>
  );
}

export default Dashboard;
