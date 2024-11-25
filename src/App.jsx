import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ContentSection from './components/ContentSection';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <div className="dashboard">
              <Sidebar />
              <div className="main-content">
                <TopBar />
                <ContentSection />
              </div>
            </div>
          }
        />
        {/* Redirect unknown paths to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
