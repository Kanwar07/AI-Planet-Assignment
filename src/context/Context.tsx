import React, { createContext, useContext, useEffect, useState } from "react";
import gradedDatathon from "../assets/cardimage/Group 1000002771.png";
import butterflyIdentification from "../assets/cardimage/Group 1000002766.png";
import weatherRecognition from "../assets/cardimage/Group 1000002767.png";
import airlinePassengerSatisfaction from "../assets/cardimage/Group 1000002772.png";
import engineeringGraduatesEmploymentOutcomes from "../assets/cardimage/Group 1000002773.png";
import travelInsuranceClaimPrediction from "../assets/cardimage/Group 1000002466.png";

const Contextdata = createContext<any>(undefined);

export function Context({ children }: { children: React.ReactNode }) {
  const list = [
    {
      id: 1,
      hackathonName: "Data Science Bootcamp - Graded Datathon",
      hackathonStatus: "Upcoming",
      color: "#F2C94C40",
      imageURL: gradedDatathon,
      skill: "Easy",
    },
    {
      id: 2,
      hackathonName: "Data Sprint 72 - Butterfly Identification",
      hackathonStatus: "Upcoming",
      color: "#F2C94C40",
      imageURL: butterflyIdentification,
      skill: "Easy",
    },
    {
      id: 3,
      hackathonName: "Data Sprint 71 - Weather Recognition",
      hackathonStatus: "Active",
      color: "#44924C3D",
      imageURL: weatherRecognition,
      skill: "Medium",
    },
    {
      id: 4,
      hackathonName: "Data Sprint 70-Airline Passenger Satisfaction",
      hackathonStatus: "Active",
      color: "#44924C3D",
      imageURL: airlinePassengerSatisfaction,
      skill: "Hard",
    },
    {
      id: 5,
      hackathonName: "Engineering Graduates Employment Outcomes",
      hackathonStatus: "Past",
      color: "#FF3C002B",
      imageURL: engineeringGraduatesEmploymentOutcomes,
      skill: "Easy",
    },
    {
      id: 6,
      hackathonName: "Travel Insurance Claim Prediction",
      hackathonStatus: "Past",
      color: "#FF3C002B",
      imageURL: travelInsuranceClaimPrediction,
      skill: "Easy",
    },
  ];

  type Hackathon = {
    id: number;
    hackathonName: string;
    hackathonStatus: string;
    color: string;
    imageURL: string;
    skill: string;
  };

  let [hackathonlist, sethackathonlist] = useState<Hackathon[]>([]);
  let [filterList, setFilterList] = useState<string[]>([]);
  let [fulllist, setFullList] = useState<Hackathon[]>([]);
  let [image, setImage] = useState<File | null>(null);
  let [challengeName, setChallengeName] = useState<string>("");
  let [startdate, setStartDate] = useState<string>("");
  let [starttime, setStartTime] = useState<string>("");
  let [enddate, setEndDate] = useState<string>("");
  let [endtime, setEndTime] = useState<string>("");
  let [description, setDescription] = useState<string>("");
  let [level, setLevel] = useState<string>("Easy");
  let [filteropen, setFilterOpen] = useState<boolean>(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  useEffect(() => {
    sethackathonlist(list);
    setFullList(list);
  }, []);

  useEffect(() => {
    filterByStatus();
  }, [filterList]);

  const filterByStatus = () => {
    if (filterList.length > 0) {
      const filteredByStatus = fulllist.filter((item) =>
        filterList.includes(item.hackathonStatus)
      );

      const filteredBySkill = fulllist.filter((item) =>
        filterList.includes(item.skill)
      );

      const combinedFilters = [...filteredByStatus, ...filteredBySkill];
      const uniqueFilteredItems = combinedFilters.reduce(
        (accumulator: Hackathon[], currentItem: Hackathon) => {
          if (!accumulator.some((item) => item.id === currentItem.id)) {
            accumulator.push(currentItem);
          }
          return accumulator;
        },
        []
      );
      sethackathonlist(uniqueFilteredItems);
    } else {
      sethackathonlist([...list]);
    }
  };

  return (
    <Contextdata.Provider
      value={{
        hackathonlist,
        image,
        setImage,
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
        filteropen,
        setFilterOpen,
        filterList,
        setFilterList,
      }}
    >
      {children}
    </Contextdata.Provider>
  );
}

export function useContextdata() {
  return useContext(Contextdata);
}
