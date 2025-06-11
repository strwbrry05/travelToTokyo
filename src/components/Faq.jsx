import React, { useState, useRef, useEffect } from "react";
import greenStar from "../assets/images/green-star.svg";
import yellowCircle from "../assets/images/yellow-circle.svg";

const Faq = () => {
  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(elem);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

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
    <div className=" z-1 bg-(--color-white) pt-[4em] pb-[4em]">
      <div
        className="relative bg-(--color-red) w-[85%] md:w-[70%] xl:w-[875px] m-auto rounded-lg 
      font-(family-name:--font-headings) text-(--color-white) p-[2em] pb-[7em]"
        ref={ref}
      >
        <img
          src={greenStar}
          alt=""
          className={`z-1 absolute w-[100px] bottom-[-50px] top-[${dimensions.height}px] left-[10px] `}
        />
        <img
          src={yellowCircle}
          alt=""
          className={`z-0 absolute w-[100px] bottom-[-18px] top-[${dimensions.height}px] left-[-25px]`}
        />
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
                  <p
                    className="text-[2.5rem] cursor-pointer rotate-180 transition-all duration-300 ease-out
                  hover:scale-[1.4]"
                  >
                    -
                  </p>
                ) : (
                  <p
                    className="text-[2.25rem] cursor-pointer rotate-90 transition-all duration-400 ease-in-out
                  hover:scale-[1.4]"
                  >
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
