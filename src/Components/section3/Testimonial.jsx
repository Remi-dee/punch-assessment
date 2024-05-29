import React from "react";
import ProfilePic from "../../Assets/section2/avatar2.png";
import GrooveLogo from "../../Assets/section2/groove.png"; // Replace with actual path to groove logo
import Groove2 from "../../Assets/section2/groove2.png";
import Quote from "../../Assets/sector1/quote.png";
import RightButton from "../../Assets/section2/rightIcon.png";
import LeftButton from "../../Assets/section2/rightIcon.png";

const TestimonialSection = () => {
  return (
    <div className="relative bg-[#202229] text-white p-8 md:p-16 overflow-hidden -mt-5 -z-10">
      <div className="absolute  bg-[#202229] transform -skew-y-[400px] origin-top-right"></div>

      <div className="">
        <div className="md:flex items-end md:space-x-[192px]">
          <div className="mt-[170px]">
            <h2 className="text-4xl font-bold mb-4 relative w-[280px]">
              How it worked for <span className="text-[#E60023]">Jason</span>{" "}
              <img
                src={ProfilePic}
                alt="Jason"
                className="inline-block  h-10 rounded-full ml-2"
              />{" "}
              at
            </h2>
            <div>
              <img src={GrooveLogo} alt="Groove" className="mb-4 " />
            </div>
          </div>
          <div className="flex mt-[50px] md:mt-0 space-x-[10px]">
            <div>
              <img src={Groove2} alt="Groove" className="mb-4 " />
            </div>{" "}
            <div>
              {" "}
              <h3 className="text-xl font-bold">Jason Makki</h3>
              <p className="text-gray-600">
                Engineer at GROOVE
                <br />
                San Francisco
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex lg:space-x-[230px] mt-[20px] md:mt-[16px] text-gray-400 ">
          <div>
            <p className="text-lg">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since.
              <div className="flex mt-[44px] space-x-[16px]">
                <img src={RightButton} alt="Icon" />
                <img src={LeftButton} alt="Icon" />
              </div>
            </p>
          </div>
          <div>
            {" "}
            <p className="text-gray-400 mt-[40px] lg:mt-0">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters
              in our corner since. Zwilt enabled us to deliver on time and
              they’ve been heavy hitters in our corner since. Zwilt enabled us
              to deliver on time and they’ve been heavy hitters in our corner.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-5">
        <img src={Quote} alt="Icon" />
      </div>
    </div>
  );
};

export default TestimonialSection;
