import React from "react";
import tick from "../assets/icons/tick.svg";
import { Link } from "react-router-dom";

function HackathonCard({ hackathonName, hackathonStatus, color, imageURL }) {
  return (
    <div className="bg-[#ffffff] rounded-2xl w-fit font-poppins flex flex-col items-center">
      <img src={imageURL} alt={hackathonName} />
      <div className="w-full flex flex-col items-center justify-center gap-4 py-6 w-fit">
        <div
          className="px-3 py-1 text-[12px] font-semibold font-inter rounded-[5px]"
          style={{ backgroundColor: color }}
        >
          {hackathonStatus}
        </div>
        <div className="text-center text-[16px] font-semibold w-60">
          {hackathonName}
        </div>
        {hackathonStatus ? (
          hackathonStatus === "Upcoming" ? (
            <span className="font-medium text-[#444444] text-[14px]">
              Starts in
            </span>
          ) : hackathonStatus === "Active" ? (
            <span className="font-medium text-[#444444] text-[14px]">
              Ends in
            </span>
          ) : (
            <span className="font-medium text-[#444444] text-[14px]">
              Ended on
            </span>
          )
        ) : null}
        <div>CountDown</div>
        <Link
          to="/detail"
          className="bg-[#44924C] px-5 py-2 rounded-[10px] flex flex-row items-center gap-3 text-[#ffffff] text-[14px] font-semibold"
        >
          <img src={tick} alt="tick" />
          Participate Now
        </Link>
      </div>
    </div>
  );
}

export default HackathonCard;
