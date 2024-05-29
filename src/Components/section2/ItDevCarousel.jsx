import React from "react";
import InfoBox from "./InfoBox";
import Shopify from "../../Assets/sector1/shopify.png";
import Magneto from "../../Assets/sector1/magento.png";
import Data from "../../Assets/sector1/dataScientist.png";
import WebFlow from "../../Assets/sector1/webFlow.png";
import Dot from "../../Assets/sector1/dotNet.png";
import RightButton from "../../Assets/sector1/frame6.png";

const DevelopmentBox = () => {
  const developers = [
    { name: "Shopify Developer", icon: Shopify },
    { name: "Magento Developer", icon: Magneto },
    { name: "Data Scientist", icon: Data },
    { name: "Webflow Developer", icon: WebFlow },
    { name: "Dot Net Developer", icon: Dot },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
      <InfoBox
        title="Find Dev and IT professionals to scale your business."
        description="Explore Creative individuals with a keen eye for detail."
        skills="989"
        categories="45"
        profiles="1011"
      />

      <div className="bg-white p-4 rounded-[7px] shadow-md mt-8 w-full lg:w-[850px]">
        <h2 className="font-bold text-xl mb-4">IT & Development</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {developers.map((dev, index) => (
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
          <div className="flex  justify-center min-w-[100px]">
            <img
              alt="Icon"
              src={RightButton}
              className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentBox;
