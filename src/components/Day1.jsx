import React from "react";
import meiji from "../assets/images/day1_meiji.svg";
import donqui from "../assets/images/day1_donqui.svg";
import records from "../assets/images/day1/day1_records.svg";

const Day1 = () => {
  return (
    <div className="bg-(--color-white) p-[1.25em]">
      <div
        className="grid grid-cols-12 grid-rows-12
      font-(family-name:--font-text) font-bold"
      >
        <div
          className="row-start-2 row-end-3 col-start-1 col-end-13 self-start justify-self-center
        font-(family-name:--font-headings) font-normal text-[2.15rem]"
        >
          <h2 className="mb-[-15px]">Day 01</h2>
          <h2>Shibuya | Harajuku</h2>
        </div>
        <img
          src={meiji}
          alt=""
          className="row-start-3 row-end-6 col-start-2 col-end-13 self-center justify-self-center
          w-[300px]"
        />
        <img
          src={donqui}
          alt=""
          className="row-start-4 row-end-6 col-start-1 col-end-6 self-center justify-self-center
          w-[115px] "
        />
        <div
          className="row-start-3 row-end-5 col-start-9 col-end-13 self-start justify-self-start
        bg-(--color-yellow) w-[120px] m-auto  "
        >
          <p className="text-[0.65rem] p-[0.5em]">
            meiji jingu shrine entrance. (shibuya)
          </p>
        </div>
        <p
          className="row-start-6 row-end-7 col-start-2 col-end-13
        text-[0.75rem]"
        >
          Start your day off by beating the crowds and going into the 'Mega
          Donqui' located in Shibuya (open24/7) before heading off to see their
          famous Meiji Jingu shrine and then grabbing breakfast at Blue Bottle
          Cafe.
        </p>
        <img
          src={records}
          alt=""
          className="row-start-7 row-end-9 col-start-1 col-end-5 justify-self-center self-center"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Day1;
