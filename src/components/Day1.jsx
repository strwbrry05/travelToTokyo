import React from "react";
import Day1_part1 from "./Day1_part1";

const Day1 = () => {
  return (
    <div
      className="flex flex-col md:flex-row 
    bg-(--color-white) p-[1em] xl:w-[1150px] mx-auto pt-[5em]"
    >
      <div className="mx-auto">
        <Day1_part1 />
      </div>
      <div className="mx-auto">
        <Day1_part1 />
      </div>
    </div>
  );
};

export default Day1;
