import React from "react";
import One from "../../Assets/section4/one.png";
import Two from "../../Assets/section4/two.png";
import Three from "../../Assets/section4/three.png";
import Explore from "../../Assets/sector1/explore.png";
import FirstBackground from "../../Assets/section4/bgSection1.png";
import SecondBackground from "../../Assets/section4/bgSection2.png";
import ThirdBackground from "../../Assets/section4/bgSection3.png";
import FirstPerson from "../../Assets/section4/person1.png";
import SecondPerson from "../../Assets/section4/person2.png";
import FourthPerson from "../../Assets/section4/person4.png";
import ThirdPerson from "../../Assets/section4/person3.png";
import Group1 from "../../Assets/section4/Group1.png";
import Group2 from "../../Assets/section4/Group2.png";
import Avatar from "../../Assets/section4/womanAvatar.png";
import Avatar2 from "../../Assets/section4/avatar2.png";
import Tick from "../../Assets/section4/tick.png";
import TenX from "../../Assets/section4/10x.png";

const JourneySection = () => {
  return (
    <div className="relative overflow-hidden">
      <h2 className="text-center text-3xl font-bold mt-[40px] md:mt-9  -mb-20 md:mb-5">
        Start your journey today.
      </h2>
      <div className=" md:absolute z-20 -mb-4 w-full md:h-9 skew-x-3  bg-white"></div>
      <div
        className="relative md:mb-0 -mb-[120px]  text-black py-[95px] px-6 md:px-16 bg-cover"
        style={{
          backgroundImage: `url(${FirstBackground})`,
        }}
      >
        <div className="relative flex flex-col md:space-y-0 space-y-9 md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 ml-10 md:ml-0 md:mr-8 flex-1 md:pt-0 pt-[80px]">
            <div className="flex items-center space-x-[16px]">
              <img src={One} alt="One" />
              <h3 className="text-2xl font-bold w-[300px]">
                Find your next star performer.
              </h3>
            </div>
            <p className="text-lg mt-4 w-[407px]">
              Explore the vast Zwilt marketplace to find the candidate that
              meets your needs.
            </p>
            <div className="flex items-center mt-8 space-x-3">
              <button className="text-white rounded-full">
                <img src={Explore} alt="Explore" />
              </button>
              <div>
                <p className="text-2xl font-bold w-[300px]">Join Now</p>
              </div>
            </div>
          </div>
          <div className=" lg:absolute top-[-80px] right-[250px] flex z-0">
            <div className="rounded-[22px] flex-col bg-[#FFFFFFA6]">
              <img
                src={FirstPerson}
                alt="Developer"
                className="rounded-bl-[22px] bg-[#FFDACE]"
              />
              <div className="flex-col py-[19px] px-[24px]">
                <h4 className="mt-[12.59px]">Ruby Developer</h4>
                <p className="text-xs mt-[28px] font-normal leading-[18px] tracking-negative-0.02em text-left w-[150px]">
                  Redwood City, California 7 years experience
                </p>
              </div>
            </div>
          </div>

          <div className="lg:absolute top-[-60px] right-[5px] flex z-0">
            <div className="rounded-[22px] flex-col bg-[#FFFFFFA6]  ">
              <img
                src={SecondPerson}
                alt="Developer"
                className="rounded-bl-[22px] shadow-lg bg-[#C8EFC4]"
              />
              <div className="flex-col py-[19px] px-[24px]">
                <h4 className="mt-[12.59px] ">System ops engineer</h4>
                <p className="text-xs mt-[28px]  font-normal leading-[18px] tracking-negative-0.02em text-left w-[150px]">
                  Abu Dhabi, UAE 5 years experience
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:absolute bottom-[-90px] right-[250px] md:flex z-0">
            <div className="rounded-[22px] flex-col bg-[#FFFFFFA6]  ">
              <img
                src={FourthPerson}
                alt="Developer"
                className="rounded-t-[22px] shadow-lg bg-[#C5C5C5]"
              />
            </div>
          </div>

          <div className="hidden lg:absolute bottom-[-90px] right-[5px] md:flex">
            <div className="rounded-[22px] flex-col bg-[#FFFFFFA6]  ">
              <img
                src={ThirdPerson}
                alt="Developer"
                className="rounded-t-[22px] shadow-lg bg-[#FDDD8B]"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative md:mb-0 -mb-[50px] text-black py-[95px] px-6 md:px-16 overflow-hidden bg-cover "
        style={{
          backgroundImage: `url(${SecondBackground})`,
        }}
      >
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 ml-10 md:ml-0 md:mb-0 md:mr-8 flex-1 md:pt-0 pt-[100px]">
            <div className="flex items-center space-x-[16px]">
              <img src={Two} alt="Two" />
              <h3 className="text-2xl font-bold w-[300px]">
                Evaluate to your heart’s content.
              </h3>
            </div>

            <p className="text-lg mt-4 w-[407px]">
              Assess the candidate through work history, transparent tests, and
              video interviews.
            </p>

            <div className="flex items-center mt-8 space-x-3 ">
              <button className=" text-white rounded-full">
                <img src={Explore} alt="Explore" />
              </button>
              <div>
                <p className="text-2xl font-bold w-[300px]">Browse More</p>
              </div>{" "}
            </div>
          </div>
          <div className="lg:absolute top-[-90px] right-[-17px] md:flex">
            <img src={Group1} alt="Developer" className="" />
          </div>

          <div className="lg:absolute top-[200px] right-[-16px] md:flex">
            <img src={Group2} alt="Developer" className="" />
          </div>

          <div className="lg:absolute top-[0px] right-[230px] md:flex">
            <img src={Group1} alt="Developer" className="" />
          </div>

          <div className="lg:absolute top-[200px] right-[215px] md:flex">
            <img src={Tick} alt="Developer" className="" />
          </div>
        </div>
      </div>

      <div
        className="relative md:h-[480px]  text-black py-[95px] px-6 md:px-16 overflow-hidden bg-cover "
        style={{
          backgroundImage: `url(${ThirdBackground})`,
        }}
      >
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8  md:mb-0 md:mr-8 flex-1 md:pt-0 pt-[40px]">
            <div className="flex items-center space-x-[16px]">
              <img src={Three} alt="Three" />
              <h3 className="text-2xl font-bold w-[300px]">
                Start building your team.
              </h3>
            </div>

            <p className="text-lg mt-4">
              Onboard your candidate right away and start creating the next big
              thing.
            </p>

            <div className="flex items-center mt-8 space-x-3 ">
              <button className=" text-white rounded-full">
                <img src={Explore} alt="Explore" />
              </button>
              <div>
                <p className="text-2xl font-bold w-[300px]">Join Now</p>
              </div>{" "}
            </div>
          </div>
          <div className="lg:absolute top-[-30px]  right-[300px] flex items-center justify-center">
            <div className="rounded-[22px] w-[230px] flex flex-col bg-[#D8D2FF] ">
              <div className="flex items-center text-left">
                <img src={Avatar} alt="Developer" className="w-20 h-20 mt-5" />
                <span className=" font-semibold ">
                  Alison <br /> Parker
                </span>
              </div>
              <div className="flex-col py-[19px] px-[24px] text-left">
                <h4 className="mt-[12.59px] text-lg ">Ruby Developer</h4>
                <p className="text-xs mt-[12px] font-normal leading-[18px] tracking-negative-0.02em">
                  Redwood City, California
                  <br />7 years experience
                </p>
                <p className="text-xs mt-[12px] font-bold leading-[18px] tracking-negative-0.02em">
                  LEELAR
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:absolute top-[-70px]  right-[8px] md:flex items-center justify-center">
            <img src={Avatar2} alt="Advert" />
          </div>
          <div className="hidden lg:absolute top-[250px]  right-[-30px] md:flex items-center justify-center">
            <img src={TenX} alt="advert" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
