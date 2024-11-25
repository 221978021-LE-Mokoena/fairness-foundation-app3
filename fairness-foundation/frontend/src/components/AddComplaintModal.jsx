import React, { useState } from 'react';
import { VscClose, VscSend } from 'react-icons/vsc';
import './AddComplaintModal.css';

function AddComplaintModal({ isOpen, onClose, onAddComplaint }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }; // Format options
      const newComplaint = {
        id: Date.now(), // Unique ID using timestamp
        date: new Date().toLocaleDateString('en-US', options), // Formatted date
        title,
        description,
        user: 'current_user',
        image: '',
      };
      onAddComplaint(newComplaint);
      setTitle('');
      setDescription('');
      onClose();
    }
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>
          <VscClose />
        </button>
        <h2 className="modal-title">Add a Complaint</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title of Complaint</label>
          <input
            id="title"
            type="text"
            placeholder="Enter complaint title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="description">Complaint Description</label>
          <textarea
            id="description"
            placeholder="Enter complaint details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="add-complaint">
            Add Complaint
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

export default AddComplaintModal;
