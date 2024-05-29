import React from "react";

import Background from "../../Assets/section7/background.png";
import Component1 from "./nestedComp1";
import Component2 from "./nestedComp2";

const Section8 = () => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:space-x-[15px] items-center justify-center px-4 py-8 bg-cover w-full"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="p-8  min-w-[300px]">
        <h2 className="text-[54px] font-bold leading-[64px]">
          Why choose Zwilt?
        </h2>
        <p className="mt-4 ">
          We take complex hiring processes and simplify them. Connecting you to
          the world’s highly qualified talent pool.
        </p>
      </div>

      <div className="lg:flex flex-col lg:flex-row lg:overflow-x-scroll space-x-4 w-full pb-8">
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
};

export default Section8;
