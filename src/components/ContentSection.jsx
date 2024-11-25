import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'; // Import icon from react-icons
import AddComplaintModal from './AddComplaintModal'; // Import the modal component
import ViewComplaintModal from './ViewComplaintModal';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
import user4 from '../assets/user4.jpg';
import user5 from '../assets/user5.jpg';

import './ContentSection.css';

function ContentSection() {
  const [cards, setCards] = useState([
    // Sample initial complaints
    {
      id: 1,
      date: 'Nov 19, 2024',
      title: 'Understanding Civil Rights Laws',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sapien auctor, lacinia metus nec, ultricies velit.',
      user: 'jdoe_lawyer',
      image: user1,
    },
    {
      id: 2,
      date: 'Nov 18, 2024',
      title: 'How to Report Workplace Discrimination',
      description:
        'Quisque blandit magna id risus vehicula, ut sollicitudin elit tempus. Integer eget tortor ut nulla mollis aliquam.',
      user: 'legal_ace123',
      image: user2,
    },
    {
      id: 3,
      date: 'Nov 17, 2024',
      title: 'The Role of Mediation in Justice',
      description:
        'Aenean congue leo at tellus scelerisque, sed fringilla elit malesuada. Sed at lorem vitae libero congue placerat.',
      user: 'peacekeeper_legal',
      image: user3,
    },
    {
      id: 4,
      date: 'Nov 19, 2024',
      title: 'Navigating Property Disputes',
      description:
        'Fusce vulputate, justo eu suscipit laoreet, elit lectus volutpat urna, in venenatis odio lectus in velit.',
      user: 'property_advocate',
      image: user4,
    },
    {
      id: 5,
      date: 'Nov 18, 2024',
      title: 'Legal Aid for Underprivileged Communities',
      description:
        'Nam pharetra purus id nulla aliquet, ac bibendum eros interdum. Proin vel velit consequat, laoreet urna id, facilisis ligula.',
      user: 'justice_for_all',
      image: user5,
    },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleAddComplaint = (newComplaint) => {
    setCards((prevCards) => [
      ...prevCards,
      { ...newComplaint, id: Date.now() }, // Add unique ID
    ]);
  };

  const handleViewComplaint = (complaint) => {
    setSelectedComplaint(complaint);
    setIsViewModalOpen(true);
  };

  const handleEditComplaint = (updatedComplaint) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === updatedComplaint.id ? updatedComplaint : card
      )
    );
  };

  const handleDeleteComplaint = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    setIsViewModalOpen(false); // Close the modal after deleting
  };

  return (
    <div className="content-section">
      <div className="subtitle">
        <h2>Recent Legal Insights</h2>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-top">
              <span className="card-date">{card.date}</span>
              <button
                className="view-button"
                onClick={() => handleViewComplaint(card)}
              >
                View
              </button>
            </div>
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
            <div className="card-bottom">
              <div className="user-profile">
                <img
                  src={card.image}
                  alt="user profile"
                  className="profile-picture"
                />
                <span className="user-name">{card.user}</span>
              </div>
            </div>
          </div>
        ))}
        <button className="add-button" onClick={() => setIsAddModalOpen(true)}>
          <AiOutlinePlus /> Add Complaint
        </button>
      </div>

      <AddComplaintModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddComplaint={handleAddComplaint}
      />

      <ViewComplaintModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        complaint={selectedComplaint}
        onEdit={handleEditComplaint}
        onDelete={handleDeleteComplaint}
      />
    </div>
  );
}

export default ContentSection;
