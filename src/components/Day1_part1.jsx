import React from "react";
import meiji from "../assets/images/day1/day1_meiji.svg";
import donqui from "../assets/images/day1/day1_donqui.svg";
import records from "../assets/images/day1/day1_records.svg";
import gacha from "../assets/images/day1/day1_gacha.svg";
import purikura from "../assets/images/day1/day1_purikura.svg";
import shibuya109 from "../assets/images/day1/day1_109.svg";

const Day1_part1 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold"
    >
      <div
        className="row-start-1 row-end-2 col-start-1 col-end-13 self-center justify-self-start
        font-(family-name:--font-headings) font-normal text-[2.15rem] 
        sm:bg-blue-800 md:bg-red-800 lg:bg-green-200 xl:bg-red-100"
      >
        <h2 className="mb-[-15px]">Day 01</h2>
        <h2>Shibuya | Harajuku</h2>
      </div>
      <img
        src={meiji}
        alt=""
        className="row-start-2 row-end-5 col-start-2 col-end-13 self-center justify-self-center
          w-[375px] h-[225px] object-cover"
      />
      <img
        src={donqui}
        alt=""
        className="row-start-3 row-end-5 col-start-1 col-end-6 self-center justify-self-start
          w-[120px] h-[120px] object-cover border-5 border-(--color-white) rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.75)]"
      />
      <div
        className="row-start-2 row-end-4 col-start-8 col-end-13 self-start justify-self-start
        bg-(--color-yellow) w-[160px] m-auto  "
      >
        <p className="text-[0.75rem] p-[0.5em]">
          meiji jingu shrine entrance. (shibuya)
        </p>
      </div>
      <p
        className="row-start-5 row-end-6 col-start-2 col-end-13
        text-[0.9rem]"
      >
        Start your day off by beating the crowds and going into the 'Mega
        Donqui' located in Shibuya (open24/7) before heading off to see their
        famous Meiji Jingu shrine and then grabbing breakfast at Blue Bottle
        Cafe.
      </p>
      <img
        src={records}
        alt=""
        className="row-start-6 row-end-8 col-start-1 col-end-5 justify-self-center self-center
          border-5 border-(--color-white) w-[170px] rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.75)]"
      />
      <div
        className="row-start-6 row-end-8 col-start-5 col-end-8 justify-self-center self-center 
        bg-(--color-yellow) w-[75px] h-[115px]"
      ></div>
      <img
        src={gacha}
        alt=""
        className="row-start-6 row-end-8 col-start-5 col-end-10 justify-self-end self-center
          w-[125px] h-[90px] object-cover"
      />
      <img
        src={purikura}
        alt=""
        className="row-start-6 row-end-8 col-start-9 col-end-13 justify-self-center self-center
          w-[100px]"
      />
      <img
        src={shibuya109}
        alt=""
        className="row-start-8 row-end-11 col-start-1 col-end-11 justify-self-start self-center
          object-cover h-[175px] w-[325px]"
      />
      <div
        className="row-start-8 row-end-9 col-start-7 col-end-13 justify-self-end self-end
        bg-(--color-yellow) w-[175px] h-[60px] m-auto"
      >
        <p className="text-[0.75rem] p-[0.75em] ">
          shibuya 109, located in front of shibuya crossing
        </p>
      </div>
      <p
        className="row-start-10 row-end-12 col-start-1 col-end-13 justify-self-center self-center
        text-[0.9rem] mt-[3em]"
      >
        Cant forget to see the famous Shibuya crossing, where thousands cross
        each day! Also located in Shibuya are shops, shops, shops! Lots of
        stores, some familiar, some new! Don't forget to visit Tower Records if
        you like music!
      </p>
    </div>
  );
};

export default Day1_part1;
