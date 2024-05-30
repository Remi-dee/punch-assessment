import React from "react";
import ArrowDown from "../../Assets/section6/arrowDown.png";
import Face1 from "../../Assets/section7/face1.png";
import Face2 from "../../Assets/section7/face2.png";
import Card2 from "../../Assets/section7/womanCard2.png";
import Woman from "../../Assets/section7/woman1.png";
import Card3 from "../../Assets/section7/designerCard.png";
import Card from "../../Assets/section7/card.png";
import Bullet from "../../Assets/section7/yellowBuet.png";
import Chat from "../../Assets/section7/Chatbar.png";
const Component2 = () => {
  return (
    <div className="relative bg-white lg:p-8 py-3  rounded-lg shadow-lg px-[58px]   lg:min-w-[1300px] lg:h-[652px]">
      <h2 className="lg:text-[54px] text-[35px] font-bold leading-[64px] mb-[37px] mt-[30px] lg:mt-[133px]">
        An open book.
      </h2>
      <ul className="mt-4 flex flex-col gap-3  list-inside lg:w-[600px]">
        <li className="flex items-center gap-3 text-[20px] font-normal leading-[32px] text-[#202229]">
          <span>
            <img src={Bullet} alt="Bullet 1" className="min-w-5" />
          </span>
          Easy and transparent one-to-one chat with candidates.
        </li>
        <li className="flex items-center gap-3 text-[20px] font-normal leading-[32px] text-[#202229]">
          <span>
            <img src={Bullet} alt="Bullet 2" className=" min-w-5" />
          </span>
          Simple and convenient payment methods.
        </li>

        <li className="flex items-center gap-3 text-[20px] font-normal leading-[32px] text-[#202229]">
          <span>
            <img src={Bullet} alt="Bullet 3" className=" min-w-5" />
          </span>
          Review past ratings.
        </li>
      </ul>
      <button className="mt-[44px] flex items-center gap-3 mb-10">
        <img src={ArrowDown} alt="Button Icon" />
        Learn More
      </button>

      <div className=" flex flex-col gap-4 justify-center text-center my-auto lg:space-x-0">
        <div className="flex mx-auto lg:absolute top-[100px] right-[190px] z-10">
          <img src={Chat} alt="Woman Card" />
        </div>

        <div className="hidden lg:flex lg:absolute top-[10px] right-[600px]">
          <img src={Face1} alt="Face" />
        </div>

        <div className="hidden lg:flex lg:absolute top-[210px] right-[100px]">
          <img src={Face2} alt="Face" />
        </div>

        <div className="flex mx-auto lg:absolute top-[150px] right-[190px] z-20">
          <img src={Card} alt="Woman Card" />
        </div>

        {/* <div className="hidden lg:absolute  top-[90px] right-[140px] lg:flex mx-auto">
          <img src={Face1} alt="Woman Card" />
        </div> */}
      </div>
    </div>
  );
};

export default Component2;
