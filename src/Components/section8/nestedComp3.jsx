import React from "react";
import ArrowDown from "../../Assets/section6/arrowDown.png";
import Face1 from "../../Assets/section7/face1.png";
import Face2 from "../../Assets/section7/face2.png";
import Face3 from "../../Assets/section7/face3.png";
import Woman from "../../Assets/section7/woman1.png";
import Time from "../../Assets/section7/activityBar.png";
import Card from "../../Assets/section7/activityBar1.png";
import Bullet from "../../Assets/section7/greenBullet.png";
import Chat from "../../Assets/section7/group.png";
const Component3 = () => {
  return (
    <div className="relative bg-white lg:p-8 py-3  rounded-lg shadow-lg px-[58px]   lg:min-w-[1300px] lg:h-[652px]">
      <h2 className="lg:text-[54px] text-[35px] font-bold leading-[64px] mb-[37px] mt-[30px] lg:mt-[133px]">
        Stay in the loop.
      </h2>
      <ul className="mt-4 flex flex-col gap-3  list-inside lg:w-[600px]">
        <li className="flex items-center gap-3 text-[20px] font-normal leading-[32px] text-[#202229]">
          <span>
            <img src={Bullet} alt="Bullet 1" className="min-w-5" />
          </span>
          Track your staff activity down to every minute with screenshots.
        </li>
        <li className="flex items-center gap-3 text-[20px] font-normal leading-[32px] text-[#202229]">
          <span>
            <img src={Bullet} alt="Bullet 2" className=" min-w-5" />
          </span>
          Comprehensive timesheet data to process payments.
        </li>

        <li className="flex items-center gap-3 text-[20px] font-normal leading-[32px] text-[#202229]">
          <span>
            <img src={Bullet} alt="Bullet 3" className=" min-w-5" />
          </span>
          Create projects to organize and assign tasks more effectively
        </li>
      </ul>
      <button className="mt-[44px] flex items-center gap-3 mb-10">
        <img src={ArrowDown} alt="Button Icon" />
        Learn More
      </button>

      <div className=" flex flex-col gap-4 justify-center text-center mx-auto my-auto lg:space-x-0">
        <div className="flex mx-auto lg:absolute top-[100px] right-[190px] z-10">
          <img src={Chat} alt="Card" />
        </div>

        <div className=" lg:flex lg:absolute top-[22px] right-[225px]">
          <img src={Time} alt="Face" />
        </div>

        <div className="hidden lg:flex lg:absolute top-[240px] right-[50px]">
          <img src={Face2} alt="Face" />
        </div>

        <div className="hidden lg:flex lg:absolute bottom-[60px] right-[530px]">
          <img src={Face3} alt="Face" />
        </div>

        <div className="flex mx-auto lg:absolute bottom-[0px] right-[115px] z-20">
          <img src={Card} alt="Progress Bar" />
        </div>

        {/* <div className="hidden lg:absolute  top-[90px] right-[140px] lg:flex mx-auto">
          <img src={Face1} alt="Woman Card" />
        </div> */}
      </div>
    </div>
  );
};

export default Component3;
