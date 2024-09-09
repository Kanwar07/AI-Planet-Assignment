import React from "react";
import MainImage from "./sections/MainImage.tsx";
import Achievements from "./sections/Achievements.tsx";
import Benefits from "./sections/Benefits.tsx";
import Explore from "./sections/Explore.tsx";

function ListPage() {
  return (
    <>
      <MainImage />
      <Achievements />
      <Benefits />
      <Explore />
    </>
  );
}

export default ListPage;
