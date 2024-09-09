import React from "react";

function DetailControls() {
  return (
    <div className="px-[10%] py-4 shadow-custom flex flex-row justify-between">
      <button className="text-[18px] font-inter text-[#000000] font-bold border-b-4 border-[#44924C] h-full">
        Overview
      </button>
      <div className="flex flex-row gap-4 max-sm:flex-col">
        <button className="bg-[#44924C] text-[#ffffff] rounded-[10px] px-8 py-1">
          Edit
        </button>
        <button className="border border-[#DC1414] bg-[#ffffff] text-[#DC1414] rounded-[10px] px-4 py-1">
          Delete
        </button>
      </div>
    </div>
  );
}

export default DetailControls;
