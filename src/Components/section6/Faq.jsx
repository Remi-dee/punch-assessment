import React, { useState } from "react";
import Background from "../../Assets/sector5/background.png";
import Arrow from "../../Assets/sector5/Vector.png";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const [clickedQuestionIndex, setClickedQuestionIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClick = (questionIndex) => {
    setClickedQuestionIndex(questionIndex);
  };

  const faqItems = [
    {
      category: "General",
      questions: [
        "I want to work part-time, is that possible",
        "How long are the average projects?",
        "How does the payment works?",
        "How much can I earn?",
      ],
    },
    {
      category: "Joining Process",
      questions: [
        "I want to work part-time, is that possible",
        "How long are the average projects?",
        "How much can I earn?",
      ],
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
      }}
      className=" mx-auto w-full bg-[#F3F3F3] pt-[100px] bg-cover lg:pt-[100px]"
    >
      <h2 className="text-3xl font-bold text-center mb-6 ">
        Frequently Asked Questions
      </h2>
      <div className=" shadow-md rounded-md overflow-hidden">
        {faqItems.map((item, idx) => (
          <div key={idx}>
            <div
              className="bg-gray-100 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(idx)}
            >
              <span className="font-semibold">{item.category}</span>
              <span
                className="transform transition-transform duration-200"
                style={{
                  transform: openIndex === idx ? "rotate(90deg)" : "rotate(0)",
                }}
              >
                ▶
              </span>
            </div>
            {openIndex === idx && (
              <div className=" border-t">
                {item.questions.map((question, qIdx) => (
                  <div
                    key={qIdx}
                    className={`${
                      clickedQuestionIndex === `${idx}-${qIdx}`
                        ? "bg-[#E8E8E8] py-[44px]"
                        : (clickedQuestionIndex === `${idx}-${qIdx}`) &
                          (question !==
                            "I want to work part-time, is that possible")
                        ? ""
                        : ""
                    }py-[44px] ${
                      question === "I want to work part-time, is that possible"
                        ? "lg:flex lg:p-0 lg:space-x-[-140px] "
                        : ""
                    } ${
                      (item.category === "Joining Process") &
                      (question ===
                        "I want to work part-time, is that possible")
                        ? " lg:space-x-[-364px] "
                        : ""
                    } border-b last:border-0`}
                  >
                    <div className="flex">
                      {" "}
                      {question ===
                      "I want to work part-time, is that possible" ? (
                        <div
                          className={`${
                            item.category === "Joining Process"
                              ? "bg-[#E8E8E8] "
                              : ""
                          } hidden  border-r-2 p-8 lg:flex text-[#202229] text-center   text-[22px] font-normal leading-[24px]`}
                        >
                          General
                        </div>
                      ) : (
                        <div></div>
                      )}
                      {item.category === "Joining Process" ? (
                        <div
                          className={`hidden ${
                            question !==
                            "I want to work part-time, is that possible"
                              ? "hidden"
                              : "lg:flex"
                          } border-r-2 px-8 justify-center  py-8  text-[#202229] text-center   text-[22px] font-normal leading-[24px]`}
                        >
                          Joining Process
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div className="flex p-8 md:p-0">
                      {" "}
                      <button
                        onClick={() => handleClick(`${idx}-${qIdx}`)}
                        className={`${
                          question ===
                          "I want to work part-time, is that possible"
                            ? "my-auto "
                            : ""
                        } text-[#202229] text-center lg:text-left md:ml-[180px] lg:ml-[580px]  text-[22px] font-normal leading-[24px]`}
                      >
                        {question}
                      </button>
                      {clickedQuestionIndex === `${idx}-${qIdx}` && (
                        <img
                          src={Arrow}
                          alt="Arrow"
                          className="hidden md:flex ml-[300px] p-8 "
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
