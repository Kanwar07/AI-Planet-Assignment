import React from "react";
import notebook from "../../../assets/icons/carbon_notebook-reference.svg";
import people from "../../../assets/icons/Vector.svg";
import robot from "../../../assets/icons/Robot.svg";
import IdentificationCard from "../../../assets/icons/IdentificationCard.svg";
import BenefitCard from "../../../components/BenefitCard.tsx";

function Benefits() {
  const list = [
    {
      id: 1,
      title: "Prove your skills",
      description:
        "Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.",
      imageURL: notebook,
    },
    {
      id: 2,
      title: "Learn from community",
      description:
        "One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.",
      imageURL: people,
    },
    {
      id: 3,
      title: "Challenge yourself",
      description:
        "There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.",
      imageURL: robot,
    },
    {
      id: 4,
      title: "Earn recognitions",
      description:
        "You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.",
      imageURL: IdentificationCard,
    },
  ];
  return (
    <div className="px-[10%] py-20">
      <div className="text-[32px] font-semibold font-poppins pb-10 w-full text-center">
        Why Participate in{" "}
        <span className="text-[#44924c]">AI Challenges?</span>
      </div>
      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        {list.map((item) => {
          const { id, title, description, imageURL } = item;
          return (
            <div key={id}>
              <BenefitCard {...{ title, description, imageURL }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Benefits;
