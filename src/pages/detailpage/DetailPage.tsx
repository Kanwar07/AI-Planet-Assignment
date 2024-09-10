import React, { useEffect } from "react";
import HackathonDescription from "./sections/HackathonDescription.tsx";
import DetailControls from "./sections/DetailControls.tsx";
import DetailDescription from "./sections/DetailDescription.tsx";

function DetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HackathonDescription />
      <DetailControls />
      <DetailDescription />
    </>
  );
}

export default DetailPage;
