import React from "react";
import HackathonCard from "../../../components/HackathonCard.tsx";
import { useContextdata } from "../../../context/Context.tsx";

function Hackathons() {
  const { hackathonlist } = useContextdata();
  return (
    <div className="flex justify-center items-center px-[10%] py-20 bg-[#003145] w-full">
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {hackathonlist.map((hackathon) => {
          const {
            id,
            hackathonName,
            hackathonStatus,
            color,
            imageURL,
            skill,
            description,
          } = hackathon;

          return (
            <div key={id}>
              <HackathonCard
                {...{
                  id,
                  hackathonName,
                  hackathonStatus,
                  color,
                  imageURL,
                  skill,
                  description,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hackathons;
