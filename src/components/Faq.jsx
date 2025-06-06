import React, { useState } from "react";
import { LuCirclePlus } from "react-icons/lu";

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: "How to get around Tokyo? (Mode of Transport?)",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit.Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
      active: true,
    },
    {
      question: "Packing essentials?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. ",
      active: false,
    },
    {
      question: "When to buy flights/accommodations?",
      answer:
        "In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. ",
      active: false,
    },
    {
      question: "Do I need to know Japanese to go to Japan?",
      answer:
        "Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. ",
      active: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaq(
      faq.map((qa, i) => {
        if (i === index) {
          qa.active = !qa.active;
        }
        return qa;
      })
    );
  };

  return (
    <div className="bg-(--color-white) pt-[4em] pb-[4em]">
      <div
        className="bg-(--color-red) w-[85%] md:w-[70%] xl:w-[875px] m-auto rounded-lg 
      font-(family-name:--font-headings) text-(--color-white) p-[2em] pb-[7em]"
      >
        <h2 className="text-center text-[1.5rem] mb-[1em]">
          Frequently Asked Q's
        </h2>

        {faq.map((qa, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-start pb-[0.5em]"
            >
              <div
                className="z-1 flex justify-between items-center pb-[0.75em] border-b-2 mt-[0.5em] w-full 
          bg-(--color-red)"
                onClick={() => toggleFAQ(index)}
              >
                <p className="md:text-[1.25rem] lg:text-[1.5rem]">
                  {qa.question}
                </p>
                {qa.active ? (
                  <p className="text-[2.5rem] cursor-pointer rotate-180 transition-all duration-300 ease-out">
                    -
                  </p>
                ) : (
                  <p className="text-[2.25rem] cursor-pointer rotate-90 transition-all duration-400 ease-in-out">
                    +
                  </p>
                )}
              </div>

              <div
                className={` 
            ${
              qa.active
                ? "max-h-[1000px] opacity-100 transition-all duration-500 ease-in-out "
                : "max-h-[0px] opacity-0 overflow-hidden transform transition-all duration-300 ease-in-out"
            }`}
              >
                <p className="font-(family-name:--font-text) text-[1rem] p-[1em] border-b-2 lg:text-[1.25rem]">
                  {qa.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
