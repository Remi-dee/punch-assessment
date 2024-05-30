import React from "react";
import Logo from "../../Assets/sector1/logo.png";
import Background from "../../Assets/section6/background.png";
import ArrowDown from "../../Assets/section6/arrowDown.png";
const CTA = () => {
  return (
    <div className="bg-[#0C0C0C] text-white px-[70px] w-full ">
      {/* Call-to-Action Section */}
      <div
        className="flex relative flex-col items-center justify-center text-center  h-[481px] md:h-[481px] px-6 md:py-0 py-[-50px] md:px-0 bg-cover"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <h1 className=" text-3xl sm:text-4xl md:text-5xl md:font-bold font-semibold mb-4">
          Need a job done, and done well? Get started
        </h1>
        <button className="">
          <img
            src={ArrowDown}
            alt="Arrow Icon"
            className="w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
          />
        </button>
      </div>

      {/* Footer Section */}
      <footer className="mt-5 py-10 px-4   ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-[160px]  mx-auto">
          {/* Branding and Links */}
          <div className="mb-8 lg:mb-0 ">
            <img src={Logo} alt="Zwilt Logo" className=" mb-4" />
            <p className="text-gray-400 ">
              We take complex hiring processes - and simplify them. Connecting
              you to the world's highly qualified talent pool.
            </p>{" "}
            <p className="text-[14px] font-semibold leading-[32px]  mt-[80px] mb-[16px] opacity-40">
              LINKS AND REDIRECTS
            </p>
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:space-x-4">
              <button className="px-6 py-4 bg-[#292B34] rounded-[26px]">
                Hire now
              </button>
              <button className="px-6 py-4 bg-[#292B34] rounded-[28px]">
                Apply now
              </button>
            </div>
          </div>

          {/* Link Columns */}
          <div className="flex flex-col ">
            <h1 className="lg:text-[48px] text-[24px] font-semibold leading-[64px]  lg:w-[700px]">
              Connecting the right people to the right businesses.
            </h1>{" "}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-[49px]">
              <div>
                <h3 className="text-lg font-semibold mb-4 opacity-40 ">
                  Platform
                </h3>
                <ul className="space-y-2">
                  <li>Find Work</li>
                  <li>Find Talent</li>
                  <li>Categories</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 opacity-40">
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>Data Science</li>
                  <li>IT & Networking</li>
                  <li>Web & Mobile</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 opacity-40">Help</h3>
                <ul className="space-y-2">
                  <li>FAQ's</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 opacity-40">
                  Get in touch @
                </h3>
                <ul className="space-y-2">
                  <li>Instagram</li>
                  <li>LinkedIn</li>
                  <li>Twitter</li>
                </ul>
              </div>
            </div>{" "}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between py-[9px] border-gray-400 border-opacity-50 text-gray-400 border-t-[1px]">
          <p className="mb-5 lg:mb-0 text-white">
            All rights reserved by Zwilt
          </p>
          <div className="flex space-x-4">
            <div className="lg:underline">
              <a href="#">Privacy Policy</a>
            </div>
            <div className="lg:underline">
              <a href="#">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CTA;
