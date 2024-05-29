import React from "react";
import InfoBox from "./InfoBox";
import LeftButton from "../../Assets/sector1/frame8.png";
import UX from "../../Assets/sector1/figma.png";
import Illustration from "../../Assets/sector1/illustration.png";
import Unreal from "../../Assets/sector1/unReal.png";
import Cinema from "../../Assets/sector1/cinema.png";
import Graphics from "../../Assets/sector1/graphics.png";

const CreativeBox = () => {
  const creatives = [
    { name: "UX Designer", icon: UX },
    { name: "Graphics Designer", icon: Graphics },
    { name: "Illustration Artist", icon: Illustration },
    { name: "Unreal Engine", icon: Unreal },
    { name: "Cinema 4D", icon: Cinema },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
      <InfoBox
        title="Explore Creative individuals with a keen eye for detail."
        description="Find Dev and IT professionals to scale your business."
        skills="989"
        categories="45"
        profiles="1011"
      />
      <div className="bg-white p-4 rounded-[7px] shadow-md mt-8 w-full lg:w-[850px]">
        <h2 className="font-bold text-xl mb-4">Design & Creative</h2>
        <div className="flex space-x-4 overflow-x-auto ">
          <div className="flex mt-1  justify-center min-w-[100px]">
            <img
              alt="Icon"
              src={LeftButton}
              className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
            />
          </div>
          {creatives.map((dev, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center min-w-[100px]"
            >
              <div className="text-3xl">
                <img
                  alt="Icon"
                  src={dev.icon}
                  className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
                />
              </div>
              <div className="mt-2 text-sm md:text-base">{dev.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeBox;
