import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiGaugeLight } from 'react-icons/pi';
import { CiBullhorn } from 'react-icons/ci';
import { IoChatbubblesOutline } from 'react-icons/io5';
import {
  AiOutlineInfoCircle,
  AiOutlineFileText,
  AiOutlineSafety,
} from 'react-icons/ai';
import { MdOutlineSupport } from 'react-icons/md';
import './Sidebar.css';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page on logout
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" className="logo-image" />
      </div>
      <ul className="menu">
        <li
          className={activeItem === 'Dashboard' ? 'active' : ''}
          onClick={() => setActiveItem('Dashboard')}
        >
          <PiGaugeLight className="icon" /> Dashboard
        </li>
        <li
          className={activeItem === 'Campaigns' ? 'active' : ''}
          onClick={() => setActiveItem('Campaigns')}
        >
          <CiBullhorn className="icon" /> Campaigns
        </li>
        <li
          className={activeItem === 'Chat' ? 'active' : ''}
          onClick={() => setActiveItem('Chat')}
        >
          <IoChatbubblesOutline className="icon" /> Chat
        </li>
        <li
          className={activeItem === 'Support Center' ? 'active' : ''}
          onClick={() => setActiveItem('Support Center')}
        >
          <MdOutlineSupport className="icon" /> Support Center
        </li>
        <li
          className={activeItem === 'Important Rules' ? 'active' : ''}
          onClick={() => setActiveItem('Important Rules')}
        >
          <AiOutlineSafety className="icon" /> Important Rules
        </li>
        <li
          className={activeItem === 'Legal Resources' ? 'active' : ''}
          onClick={() => setActiveItem('Legal Resources')}
        >
          <AiOutlineFileText className="icon" /> Legal Resources
        </li>
        <li
          className={activeItem === 'Complaint Guidelines' ? 'active' : ''}
          onClick={() => setActiveItem('Complaint Guidelines')}
        >
          <AiOutlineInfoCircle className="icon" /> Complaint Guidelines
        </li>
      </ul>
      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
