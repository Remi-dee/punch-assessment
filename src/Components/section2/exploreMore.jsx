import React from "react";
import Explore from "../../Assets/sector1/explore.png";

const ExploreMore = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-[180px] px-4 items-center mt-[14px] space-y-4 sm:space-y-0">
      <button className="flex items-center space-x-2 p-3 ">
        <img
          src={Explore}
          alt="Explore"
          className="w-[60px] h-[60px] sm:w-[74px] sm:h-[74px]"
        />
        <span className="text-sm sm:text-base">Explore More</span>
      </button>
      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 p-3 text-center sm:text-left">
        <span className="text-lg sm:text-xl text-gray-900">30 More</span>
        <span className="text-gray-500">to explore</span>
      </div>
    </div>
  );
};

export default ExploreMore;
