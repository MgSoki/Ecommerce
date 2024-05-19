import React from "react";

const ResetFilter = ({ resetForm }) => {
  return (
    <button
      onClick={() => resetForm()}
      type="button"
      className="text-neutral-600 hover:text-neutral-800 cursor-pointer select-none underline"
    >
      reset all
    </button>
  );
};

export default ResetFilter;
