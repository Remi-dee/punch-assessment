import React from "react";
import Icon2 from "../../Assets/sector3/icon2.png";
import Icon1 from "../../Assets/sector3/icon1.png";

const Features = () => {
  return (
    <div className="bg-[#FFFFFF] p-8 md:p-16 overflow-hidden">
      <div className="flex flex-col mt-[70px] lg:mt-[149px]">
        <h1 className="text-[54px] font-bold leading-[64px] md:w-[570px] mb-[30px]">
          {" "}
          How we ensure you're in good hands
        </h1>
        <p1 className="text-[22px] font-normal leading-[32px] md:w-[634px]">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p1>
      </div>

      <div className="flex items-center bg-[#FFFFFF] space-x-5 w-[400px] mt-[30px] md:w-[635px] rounded-[7px] px-[20px] py-[32px] border border-solid border-[#F0F0F0]">
        <div className="flex items-center space-x-5 ">
          <div className="">
            <img src={Icon2} alt="icon" />
          </div>
          <div>
            <span className="text-[16px] font-semibold leading-[17.83px]">
              Step 1:
            </span>
            <span className="ml-1 text-[16px] font-normal leading-[17.83px]">
              Video Interview
            </span>
          </div>
        </div>
      </div>
      <div className="w-[400px] bg-[#FFFFFF] shadow-lg shadow-slate-200  mt-[5px] md:w-[635px] rounded-[7px] px-[20px] py-[19px] border border-solid border-[#F0F0F0]">
        <div className="flex items-center space-x-5 mb-[16px]">
          <div className="">
            <img src={Icon1} alt="icon" />
          </div>
          <div>
            <span className="text-[16px] font-semibold leading-[17.83px]">
              Step 2:
            </span>
            <span className="ml-1 text-[16px] font-normal leading-[17.83px]">
              Video Interview
            </span>
          </div>
        </div>

        <p className="text-[#202229]">
          Candidates are assessed through skill based questions in a virtual
          setting. Allowing you to gauge personality and cultural fit.
        </p>
      </div>

      <div className="flex bg-transparent items-center space-x-5 w-[400px] mt-[5px] md:w-[635px] rounded-[7px] px-[20px] py-[32px] border border-solid border-[#F0F0F0]">
        <div className="flex items-center space-x-5 ">
          <div className="">
            <img src={Icon2} alt="icon" />
          </div>
          <div>
            <span className="text-[16px] font-semibold leading-[17.83px]">
              Step 3:
            </span>
            <span className="ml-1 text-[16px] font-normal leading-[17.83px]">
              Technical Interview
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-transparent space-x-5 w-[400px] mt-[5px] md:w-[635px] rounded-[7px] px-[20px] py-[32px] border border-solid border-[#F0F0F0]">
        <div className="flex items-center space-x-5 ">
          <div className="">
            <img src={Icon2} alt="icon" />
          </div>
          <div>
            <span className="text-[16px] font-semibold leading-[17.83px]">
              Step 4:
            </span>
            <span className="ml-1 text-[16px] font-normal leading-[17.83px]">
              Application Review
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-transparent space-x-5 w-[400px] mt-[5px] md:w-[635px] rounded-[7px] px-[20px] py-[32px] border border-solid border-[#F0F0F0]">
        <div className="flex items-center space-x-5 ">
          <div className="">
            <img src={Icon2} alt="icon" />
          </div>
          <div>
            <span className="text-[16px] font-semibold leading-[17.83px]">
              Step 5:
            </span>
            <span className="ml-1 text-[16px] font-normal leading-[17.83px]">
              Lets get to work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
