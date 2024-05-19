import React from "react";

const FilterButton = ({ isOpen, handleToggleFilter }) => {
  return (
    <button
      type="button"
      onClick={handleToggleFilter}
      className={`fixed ${
        isOpen ? "hidden" : "inline-flex"
      } top-32 bg-neutral-600 left-0 z-[1005] box-shadow-blog py-3 px-2 hover:bg-neutral-700 active:scale-95  items-center rounded-r-full text-white`}
    >
      <div className="pe-1">Filter </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        />
      </svg>
    </button>
  );
};

export default FilterButton;
