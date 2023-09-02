// Popup.js
"use client"
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      background: '#333',
      border: '1px solid #444',
      borderRadius: '10px', // Adjust the border radius as needed
      color: 'white',
      textAlign: 'center',
    },
  };

const Popup = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup"
      style={customStyles}
    >
                <div>
          <h1 className="feature-h1">Congratulations! 🎉</h1>
        </div>
        <div class="glass-container">
         <img src="/nft.png" alt="Showcased Image" class="showcased-image"/>
       </div>
      <button onClick={onClose} className="bg-[#8A42D8] hover:bg-blue-600 text-white py-2 px-4 rounded mt-4"
>Close</button>
    </Modal>
  );
};

export default Popup;
