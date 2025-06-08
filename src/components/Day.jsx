import React from "react";

const Day = (props) => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center
    bg-(--color-white) p-[1em] xl:w-[1150px] mx-auto pt-[5em]"
    >
      <div className="mx-auto">{props.firstHalf}</div>
      <div className="mx-auto">{props.secondHalf}</div>
      {props.isThird && <div className="mx-auto">{props.thirdHalf}</div>}
    </div>
  );
};

export default Day;
