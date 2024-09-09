import React from "react";
import HackathonDescription from "./sections/HackathonDescription.tsx";
import DetailControls from "./sections/DetailControls.tsx";
import DetailDescription from "./sections/DetailDescription.tsx";

function DetailPage() {
  return (
    <>
      <HackathonDescription />
      <DetailControls />
      <DetailDescription />
    </>
  );
}

export default DetailPage;
