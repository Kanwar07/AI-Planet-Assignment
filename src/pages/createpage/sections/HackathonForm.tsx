import React from "react";
import upload from "../../../assets/icons/bxs_cloud-upload.svg";
import arrowright from "../../../assets/icons/arrowright.svg";
import challengeImage from "../../../assets/icons/bi_image-fill.svg";
import { useContextdata } from "../../../context/Context.tsx";

function HackathonForm() {
  const {
    image,
    challengeName,
    setChallengeName,
    startdate,
    setStartDate,
    starttime,
    setStartTime,
    enddate,
    setEndDate,
    endtime,
    setEndTime,
    setDescription,
    description,
    level,
    setLevel,
    handleImageChange,
  } = useContextdata();

  return (
    <div className="px-[10%] w-[50%] py-10 flex flex-col gap-8 max-lg:w-[60%] max-md:w-[75%] max-sm:w-full">
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">
          Challenge Name
        </span>
        <input
          type="text"
          className="border border-[#B7B7B7] rounded-[5px] px-2 py-1"
          value={challengeName}
          onChange={(event) => setChallengeName(event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Start Date</span>
        <div className="border border-[#B7B7B7] rounded-[5px] p-1">
          <input
            type="date"
            className="bg-transparent mr-2 ml-4 cursor-pointer"
            value={startdate}
            onChange={(event) => setStartDate(event.target.value)}
          />
          <input
            type="time"
            className="bg-transparent ml-2 mr-4 cursor-pointer"
            value={starttime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">End Date</span>
        <div className="border border-[#B7B7B7] rounded-[5px] p-1">
          <input
            type="date"
            className="bg-transparent mr-2 ml-4 cursor-pointer"
            value={enddate}
            onChange={(event) => setEndDate(event.target.value)}
          />
          <input
            type="time"
            className="bg-transparent ml-2 mr-4 cursor-pointer"
            value={endtime}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Description</span>
        <textarea
          className="border border-[1px] border-[#B7B7B7] rounded-[5px] p-4"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Image</span>
        {image ? (
          <div className="bg-[#F8F9FD] rounded-[10px] border border-[#F8F9FD] p-4 flex flex-col gap-6">
            <img
              src={URL.createObjectURL(image)}
              alt="Uploaded"
              className="rounded-[10px]"
            />
            <label className="flex flex-row gap-2 items-center cursor-pointer">
              <img src={challengeImage} alt="challengeImage" />
              <span className="text-[14px] font-medium font-inter text-[#44924C]">
                Change image
              </span>
              <img src={arrowright} alt="arrowright" />
              <input
                type="file"
                onChange={(event) => handleImageChange(event)}
                className="hidden"
              />
            </label>
          </div>
        ) : (
          <label className="flex flex-row gap-2 items-center bg-[#F4F4F4] border border-[#D9D9D9] w-fit px-8 py-2 rounded-[5px] cursor-pointer">
            <span>Upload</span>
            <div>
              <img src={upload} alt="upload" />
              <input
                type="file"
                onChange={(event) => handleImageChange(event)}
                className="hidden"
              />
            </div>
          </label>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[16px] font-inter font-medium">Level Type</span>
        <select
          className="w-fit border border-[#B7B7B7] rounded-[5px] px-4 py-2"
          value={level}
          onChange={(event) => setLevel(event.target.value)}
        >
          <option value="Easy">Easy</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <button className="text-[16px] font-inter font-medium px-5 py-2 w-fit bg-[#44924C] rounded-[10px] text-[#ffffff]">
        Create Challenge
      </button>
    </div>
  );
}

export default HackathonForm;
