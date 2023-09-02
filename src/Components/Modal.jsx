import React from 'react';

const Modals = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 ${isOpen ? '' : 'hidden'} flex items-center justify-center z-50`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container bg-white w-96 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-close absolute top-2 right-3 cursor-pointer" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="modal-content p-4 text-left">
          <h1 className="text-xl font-bold mb-4">Modal Title</h1>
          <p className="mb-4">Modal content goes here.</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modals;
