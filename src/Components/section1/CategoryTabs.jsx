import React, { useState } from "react";

const categories = {
  "IT & Development": [
    "Python Developer",
    "Shopify Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Frontend Developer",
    "Shopify Developer",
    "Python Developer",

    "Shopify Developer",
    "Python Developer",
    "Full Stack Developer",
    "Explore More",
  ],
  "Design and Creative": [
    "Graphic Designer",
    "UI/UX Designer",
    "Product Designer",
  ],
};

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("IT & Development");

  return (
    <div className="flex flex-col items-center rounded-[15px] mt-5 px-4 py-[15px] bg-gray-100">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        {["IT & Development", "Design and Creative"].map((category) => (
          <button
            key={category}
            className={`rounded-[15px] px-[30px] py-[10px] ${
              category === activeCategory ? "bg-green-200" : "bg-gray-200"
            } ${category === "IT & Development" ? "md:mr-[-38px] " : ""}`}
            onClick={() => setActiveCategory(category)}
            style={{
              position: "relative",
              zIndex: category === activeCategory ? 2 : 1, // Higher z-index for the first button (IT & Development)
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        className="md:flex justify-between mt-[23px] lg:w-[800px] text-gray-600
"
      >
        <div>
          {categories[activeCategory].slice(0, 4).map((job, index) => (
            <div
              key={index}
              className={`${
                job === "MERN Stack Developer"
                  ? "text-gray-900 font-medium"
                  : ""
              } m-2`}
            >
              {job}
            </div>
          ))}
        </div>
        <div>
          {categories[activeCategory].slice(4, 8).map((job, index) => (
            <div key={index} className="m-2">
              {job}
            </div>
          ))}
        </div>
        <div>
          {categories[activeCategory].slice(8, 12).map((job, index) => (
            <div
              key={index}
              className={`${
                job === "Explore More" ? "text-gray-900 font-medium" : ""
              } m-2`}
            >
              {job}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
