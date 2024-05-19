import React, { useState } from "react";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="flex justify-end py-3">
      <button className=" border-2 border-neutral-600 bg-neutral-600 border-e-0 px-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 stroke-white h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
      <input
        value={keyword}
        onChange={(e) => handleChange(e)}
        id="min"
        type="text"
        placeholder="Search Product"
        className=" focus:border-neutral-950 rounded-none border-s-0 border-2 border-neutral-600 p-2 bg-white outline-none"
      />
    </div>
  );
};

export default SearchBox;
