import React from "react";
import SearchBar from "../../../components/SearchBar.tsx";
import dropdown from "../../../assets/icons/dropdown.svg";

function Explore() {
  return (
    <div className="px-[10%] pt-20 pb-28 font-poppins bg-[#002A3B] text-[#ffffff] flex flex-col gap-16">
      <div className="w-full text-center text-[28px] font-semibold">
        Explore Challenges
      </div>
      <div className="flex flex-row items-center gap-8 max-sm:flex-col">
        <SearchBar />
        <button className="flex flex-row w-fit items-center gap-2 bg-[#ffffff] text-[#000000] px-6 py-3 rounded-xl">
          Filter <img src={dropdown} alt="dropdown" className="size-3" />
        </button>
      </div>
    </div>
  );
}

export default Explore;
