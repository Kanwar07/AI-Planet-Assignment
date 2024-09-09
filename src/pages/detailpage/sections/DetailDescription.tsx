import React from "react";

function DetailDescription() {
  return (
    <div className="px-[10%] py-20">
      <p className="text-[18px] font-medium text-[#64607D] mr-60 max-md:mr-28 max-sm:mr-0">
        Butterflies are the adult flying stage of certain insects belonging to
        an order or group called Lepidoptera. The word "Lepidoptera" means
        "scaly wings" in Greek. This name perfectly suits the insects in this
        group because their wings are covered with thousands of tiny scales
        overlapping in rows.
        <br />
        <br /> An agency of the Governmental Wildlife Conservation is planning
        to implement an automated system based on computer vision so that it can
        identify butterflies based on captured images. As a consultant for this
        project, you are responsible for developing an efficient model.
        <br />
        <br /> Your Task is to build an Image Classification Model using CNN
        that classifies to which class of weather each image belongs to.
      </p>
    </div>
  );
}

export default DetailDescription;
