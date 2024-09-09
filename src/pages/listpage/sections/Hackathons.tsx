import React from "react";
import gradedDatathon from "../../../assets/cardimage/Group 1000002771.png";
import butterflyIdentification from "../../../assets/cardimage/Group 1000002766.png";
import weatherRecognition from "../../../assets/cardimage/Group 1000002767.png";
import airlinePassengerSatisfaction from "../../../assets/cardimage/Group 1000002772.png";
import engineeringGraduatesEmploymentOutcomes from "../../../assets/cardimage/Group 1000002773.png";
import travelInsuranceClaimPrediction from "../../../assets/cardimage/Group 1000002466.png";
import HackathonCard from "../../../components/HackathonCard.tsx";

function Hackathons() {
  const hackathonlist = [
    {
      id: 1,
      hackathonName: "Data Science Bootcamp - Graded Datathon",
      hackathonStatus: "Upcoming",
      color: "#F2C94C40",
      imageURL: gradedDatathon,
    },
    {
      id: 2,
      hackathonName: "Data Sprint 72 - Butterfly Identification",
      hackathonStatus: "Upcoming",
      color: "#F2C94C40",
      imageURL: butterflyIdentification,
    },
    {
      id: 3,
      hackathonName: "Data Sprint 71 - Weather Recognition",
      hackathonStatus: "Active",
      color: "#44924C3D",
      imageURL: weatherRecognition,
    },
    {
      id: 4,
      hackathonName: "Data Sprint 70-Airline Passenger Satisfaction",
      hackathonStatus: "Active",
      color: "#44924C3D",
      imageURL: airlinePassengerSatisfaction,
    },
    {
      id: 5,
      hackathonName: "Engineering Graduates Employment Outcomes",
      hackathonStatus: "Past",
      color: "#FF3C002B",
      imageURL: engineeringGraduatesEmploymentOutcomes,
    },
    {
      id: 6,
      hackathonName: "Travel Insurance Claim Prediction",
      hackathonStatus: "Past",
      color: "#FF3C002B",
      imageURL: travelInsuranceClaimPrediction,
    },
  ];
  return (
    <div className="flex justify-center items-center px-[10%] py-20 bg-[#003145] w-full">
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {hackathonlist.map((hackathon) => {
          const { id, hackathonName, hackathonStatus, color, imageURL } =
            hackathon;
          return (
            <div key={id}>
              <HackathonCard
                {...{ hackathonName, hackathonStatus, color, imageURL }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hackathons;
