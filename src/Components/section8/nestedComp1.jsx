import React from "react";
import Rectangle from "../../Assets/section7/rectangle.png";
import ArrowDown from "../../Assets/section6/arrowDown.png";
import Card1 from "../../Assets/section7/womanCard.png";
import Card2 from "../../Assets/section7/womanCard2.png";
import Woman from "../../Assets/section7/woman1.png";
import Card3 from "../../Assets/section7/designerCard.png";
import Star from "../../Assets/section7/star.png";

const Component1 = () => {
  return (
    <div className="relative bg-white lg:p-8 py-3  rounded-lg shadow-lg px-[58px]  lg:min-w-[1300px] lg:h-[652px] mb-5">
      <h2 className="lg:text-[54px] text-[35px] font-bold leading-[64px] mb-[37px] mt-[30px] lg:mt-[133px]">
        Onboard without the risk.
      </h2>
      <ul className="mt-4 flex flex-col gap-3  list-inside lg:w-[600px]">
        <li className="flex items-center gap-3 text-[20px] font-normal leading-[32px] text-[#202229]">
          <span>
            <img src={Rectangle} alt="Bullet 1" className="min-w-5" />
          </span>
          We pick the best for you to select.
        </li>
        <li className="flex items-center gap-3 text-[20px] font-normal leading-[32px] text-[#202229]">
          <span>
            <img src={Rectangle} alt="Bullet 2" className="min-w-5" />
          </span>
          Thousands of vetted candidates in dozens of categories.
        </li>

        <li className="flex items-center gap-3 text-[20px] font-normal leading-[32px] text-[#202229]">
          <span>
            <img src={Rectangle} alt="Bullet 3" className="min-w-5" />
          </span>
          Risk-free resource swapping for the best fit.
        </li>
      </ul>
      <button className="mt-[44px] flex items-center gap-3 mb-10">
        <img src={ArrowDown} alt="Button Icon" />
        Learn More
      </button>

      <div className=" flex flex-col gap-4 justify-center lg:space-x-0">
        <div className="flex mx-auto lg:absolute lg:top-[120px] lg:right-[190px] lg:z-20">
          <img src={Card1} alt="Woman Card" />
        </div>

        <div className="flex mx-auto lg:absolute bottom-[90px] right-[10px]">
          <img src={Card2} alt="Woman Card" />
        </div>

        <div className="flex mx-auto lg:absolute lg:top-5 lg:right-[300px]">
          <img src={Woman} alt="Woman Card" />
        </div>

        <div className="flex mx-auto lg:absolute bottom-[20px] right-[310px] z-10">
          <img src={Card3} alt="Woman Card" />
        </div>

        <div className="hidden lg:absolute  top-[90px] right-[140px] lg:flex ">
          <img src={Star} alt="Woman Card" />
        </div>
      </div>
    </div>
  );
};

export default Component1;
