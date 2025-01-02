/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  IoSearch,
  IoClose,
} from "react-icons/io5";

const SearchBar = ({ className }) => {
  const [inputValue, setInputValue] =
    useState("");
  const [
    isMobileSearchOpen,
    setIsMobileSearchOpen,
  ] = useState(false);

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop View */}
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
          className="w-[500px] p-2 my-2 outline-1 outline rounded-3xl text-gray-900 placeholder-gray-500"
        />
        <IoSearch
          className={`absolute text-[20px] right-3 top-1/2 transform -translate-y-1/2 ${
            inputValue
              ? "cursor-pointer text-black"
              : "cursor-not-allowed text-gray-500"
          } `}
        />
      </div>

      {/* Mobile View */}
      <div className="lg:hidden relative">
        {isMobileSearchOpen ? (
          <div className="fixed top-0 left-0 w-full h-full bg-white p-4 z-50">
            <div className="flex justify-between items-center mb-4">
              <input
                type="search"
                placeholder="Search for courses..."
                value={inputValue}
                onChange={(e) =>
                  setInputValue(e.target.value)
                }
                className="flex-grow p-2 border border-gray-300 rounded-lg"
              />
              <IoClose
                className="text-[24px] text-black ml-2 cursor-pointer"
                onClick={toggleMobileSearch}
              />
            </div>
          </div>
        ) : (
          <IoSearch
            className="text-[24px] text-black cursor-pointer"
            onClick={toggleMobileSearch}
          />
        )}
      </div>
    </>
  );
};

export default SearchBar;
