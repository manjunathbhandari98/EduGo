/* eslint-disable react/prop-types */
import { IoSearch } from "react-icons/io5";

import { useState } from "react";

const SearchBar = ({ className }) => {
  const [inputValue, setInputValue] = useState();
  return (
    <>
      <div
        className={`search-bar relative hidden lg:block ${className}`}
      >
        <input
          type="text"
          placeholder="Search for courses..."
          value={inputValue}
          onChange={(e) =>
            setInputValue(e.target.value)
          }
          className="hidden w-[500px] md:block p-2 my-2 outline-1 outline rounded-3xl text-gray-900 placeholder-gray-500"
        />
        <IoSearch
          className={`absolute text-[20px] right-3 top-1/2 transform -translate-y-1/2  ${
            inputValue
              ? "cursor-pointer text-black"
              : "cursor-not-allowed text-gray-500"
          } `}
        />
      </div>
      <div className="lg:hidden">
        <IoSearch className="text-[24px] text-black" />
      </div>
    </>
  );
};

export default SearchBar;
