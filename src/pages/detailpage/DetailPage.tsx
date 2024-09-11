import React, { useEffect } from "react";
import HackathonDescription from "./sections/HackathonDescription.tsx";
import { useLocation } from "react-router-dom";

function DetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { id, hackathonName, hackathonStatus, imageURL, skill } =
    location.state;
  console.log(id);
  return (
    <>
      <HackathonDescription
        {...{ id, hackathonName, hackathonStatus, imageURL, skill }}
      />
    </>
  );
}

export default DetailPage;
