import React from "react";
import search from "../assets/icons/search.svg";

function SearchBar() {
  return (
    <div className="flex flex-row items-center bg-[#ffffff] px-10 py-3 rounded-lg w-full h-full">
      <img src={search} alt="search" className="mr-3 size-4" />
      <input
        type="text"
        className="h-full bg-transparent focus:outline-none text-[#000000]"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
