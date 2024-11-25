import React, { useState, useEffect } from 'react';
import { VscClose } from 'react-icons/vsc';
import './ViewComplaintModal.css';

function ViewComplaintModal({ isOpen, onClose, complaint, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (complaint) {
      setTitle(complaint.title || '');
      setDescription(complaint.description || '');
      setIsEditing(false); // Reset editing mode
    }
  }, [complaint]);

  const handleSaveEdit = () => {
    onEdit({ ...complaint, title, description });
    setIsEditing(false);
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>
          <VscClose />
        </button>
        {isEditing ? (
          <>
            <h2 className="modal-title">Edit Complaint</h2>
            <form className="modal-form">
              <label htmlFor="edit-title">Title</label>
              <input
                id="edit-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label htmlFor="edit-description">Description</label>
              <textarea
                id="edit-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <button
                type="button"
                className="add-complaint"
                onClick={handleSaveEdit}
              >
                Save
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="modal-title">{complaint?.title}</h2>
            <p className="complaint-description">{complaint?.description}</p>
            <div className="actions">
              <button
                className="add-complaint"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="delete-complaint"
                onClick={() => onDelete(complaint.id)}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  ) : null;
}

export default ViewComplaintModal;
