import React from "react";
import time from "../../../assets/icons/time.svg";
import level from "../../../assets/icons/carbon_skill-level-basic.svg";
import back from "../../../assets/icons/back.svg";
import { Link } from "react-router-dom";

function HackathonDescription() {
  return (
    <div className="px-[10%] py-20 font-poppins flex flex-col gap-8 bg-[#003145] text-[#ffffff]">
      <Link to="/" className="flex flex-row items-center gap-4">
        <img src={back} alt="back" className="size-8" />
        Back
      </Link>
      <div className="flex flex-row items-center gap-2 text-[14px] text-[#000000] font-inter font-semibold bg-[#FFCE5C] pl-4 pr-12 py-1 rounded-[5px] w-fit">
        <img src={time} alt="time" />
        Starts on 17th Jun'22 09:00 PM (India Standard Time)
      </div>
      <div className="text-[40px] font-semibold">
        Data Sprint 72 - Butterfly Identification
      </div>
      <div className="text-[18px] font-inter font-medium">
        Identify the class to which each butterfly belongs to
      </div>
      <button className="text-[#003145] text-[14px] bg-[#F8F9FD] font-semibold font-inter w-fit flex flex-row gap-2 rounded-[5px] px-4 py-2">
        <img src={level} alt="level" />
        Easy
      </button>
    </div>
  );
}

export default HackathonDescription;
