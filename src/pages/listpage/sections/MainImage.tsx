import React from "react";
import rocket from "../../../assets/icons/PicsArt_04-14-04.42 1.svg";
function MainImage() {
  return (
    <>
      <section className="flex flex-row items-center justify-between bg-[#003145] px-[10%] py-10 text-[#ffffff] text-poppins">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-start mr-8 max-lg:mr-0">
            <span className="h-28 mt-4 w-4 bg-[#FFCE5C] mr-10 max-[1200px]:h-48 max-[1110px]:h-64 max-lg:h-28 max-[792px]:h-48 max-[655px]:h-64 max-[450px]:h-80"></span>
            <div className="flex flex-col items-start gap-8">
              <h1 className="text-[48px] font-semibold">
                Accelerate Innovation with Global AI Challenges
              </h1>
              <p className="text-[18px] font-medium mr-10">
                AI Challenges at DPhi simulate real-world problems. It is a
                great place to put your AI/Data Science skills to test on
                diverse datasets allowing you to foster learning through
                competitions.
              </p>
              <button className="text-[#003145] font-semibold text-[18px] bg-[#ffffff] px-4 py-1 rounded-[10px]">
                Create Challenge
              </button>
            </div>
          </div>
        </div>
        <img src={rocket} alt="rocket" className="block max-lg:hidden" />
      </section>
    </>
  );
}

export default MainImage;
