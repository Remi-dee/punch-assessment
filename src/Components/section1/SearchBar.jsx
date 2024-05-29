import React, { useState } from "react";
import ButtonIcon from "../../Assets/sector1/buttonIcon1.png";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center  mt-5 px-4 ">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="p-2 border border-gray-300 rounded-l-[16px] w-full"
          placeholder=""
        />
        {!searchTerm && !isFocused && (
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-2">
            <span className="text-black mr-1 ">Looking for</span>
            <span className="text-gray-400"> design !</span>
          </div>
        )}

        <button
          type="submit"
          className="p-2 bg-[#FFBE2E] rounded-[15px] ml-[-24px]  text-white  px-[25px] py-[29px]"
        >
          <img alt="buttonIcon" src={ButtonIcon} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
