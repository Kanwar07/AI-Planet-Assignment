import React from "react";
import SearchBar from "../../../components/SearchBar.tsx";
import FilterDropDown from "../../../components/FilterDropDown.tsx";
import { useContextdata } from "../../../context/Context.tsx";
import cross from "../../../assets/icons/cross.svg";

function Explore() {
  const { filterList, setFilterList } = useContextdata();

  const handleRemove = (item: string) => {
    setFilterList(filterList.filter((listItem) => listItem !== item));
  };

  return (
    <div className="px-[10%] pt-20 pb-28 font-poppins bg-[#002A3B] text-[#ffffff] flex flex-col gap-16">
      <div className="w-full text-center text-[28px] font-semibold">
        Explore Challenges
      </div>
      <div className="flex flex-row items-center gap-8 max-sm:flex-col">
        <SearchBar />
        <FilterDropDown />
      </div>
      <div className="flex flex-wrap gap-4">
        {filterList.map((list, index) => {
          return (
            <div
              key={index}
              className="bg-[#F8F9FD7D] px-6 py-2 w-fit rounded-[30px] flex flex-row items-center gap-2"
            >
              <span>{list}</span>
              <img
                src={cross}
                alt="cross"
                className="size-5 cursor-pointer"
                onClick={() => handleRemove(list)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
