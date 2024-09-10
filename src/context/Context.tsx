import React, { createContext, useContext, useState } from "react";

const Contextdata = createContext<any>(undefined);

export function Context({ children }: { children: React.ReactNode }) {
  let [image, setImage] = useState<File | null>(null);
  let [challengeName, setChallengeName] = useState<string>("");
  let [startdate, setStartDate] = useState<string>("");
  let [starttime, setStartTime] = useState<string>("");
  let [enddate, setEndDate] = useState<string>("");
  let [endtime, setEndTime] = useState<string>("");
  let [description, setDescription] = useState<string>("");
  const [level, setLevel] = useState<string>("Easy");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <Contextdata.Provider
      value={{
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
      }}
    >
      {children}
    </Contextdata.Provider>
  );
}

export function useContextdata() {
  return useContext(Contextdata);
}
