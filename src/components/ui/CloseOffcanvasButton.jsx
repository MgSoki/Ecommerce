import React from "react";

const CloseOffcanvasButton = ({ onClose }) => {
  return (
    <div className="flex justify-end">
      <button
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={onClose}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CloseOffcanvasButton;
