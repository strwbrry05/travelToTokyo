import React, { useState } from "react";
import { LuCirclePlus } from "react-icons/lu";

const Faq = () => {
  const [isActive, setIsActive] = useState(true);

  const openAnswer = () => {
    console.log(isActive);
    setIsActive(!isActive);
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
        <div className="flex flex-col justify-center items-start pb-[0.5em] ">
          <div
            className="z-1 flex justify-between items-center pb-[1em] border-b-2 w-full
          bg-(--color-red)"
          >
            <p className="text-[1rem] ">
              How to get around Tokyo? (Mode of Transport?)
            </p>
            <LuCirclePlus
              className="text-[2.75rem] ml-[0.5em]"
              onClick={openAnswer}
            />
          </div>

          <div
            className={` 
            ${
              isActive
                ? "translate-y-[0vh] transition duration-500 ease-in "
                : "translate-y-[-80px] transition duration-1000 ease-in "
            }`}
          >
            <p
              className={`z-0 font-(family-name:--font-text) text-[0.75rem] p-[1em] border-b-2 
            ${
              isActive
                ? "transition duration-500 ease-in-out"
                : "transition duration-500 ease-in-out"
            }`}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start pb-[0.5em] border-b-2">
          <div className="flex justify-between items-center pb-[1em] border-b-2 mt-[1em] w-full">
            <p className="text-[1rem] mr-[2em]">Packing essentials?</p>
            <LuCirclePlus className="text-[1.5rem]" />
          </div>

          <p className="font-(family-name:--font-text) text-[0.75rem] p-[1em]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
        </div>

        <div className="flex flex-col justify-center items-start pb-[0.5em] border-b-2">
          <div className="flex justify-between items-center pb-[1em] border-b-2 mt-[1em] w-full">
            <p className="text-[1rem] mr-[2em]">
              When to buy flights/accomadations?
            </p>
            <LuCirclePlus className="text-[2rem]" />
          </div>

          <p className="font-(family-name:--font-text) text-[0.75rem] p-[1em]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
        </div>

        <div className="flex flex-col justify-center items-start pb-[0.5em] border-b-2">
          <div className="flex justify-between items-center pb-[1em] border-b-2 mt-[1em] w-full">
            <p className="text-[1rem] mr-[3em]">
              Do I need to know Japanese to go to Japan?
            </p>
            <LuCirclePlus className="text-[2.5rem]" />
          </div>

          <p className="font-(family-name:--font-text) text-[0.75rem] p-[1em]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
