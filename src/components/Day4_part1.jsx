import React from "react";
import robot from "../assets/images/day4/day4_robot.svg";
import people from "../assets/images/day4/day4_people.svg";
import park from "../assets/images/day4/day4_park.svg";
import ghibli from "../assets/images/day4/day4_ghibli.svg";

const Day4_part1 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold 
      sm:bg-blue-100 lg:bg-yellow-200 xl:bg-green-100"
    >
      <div
        className="row-start-1 row-end-2 col-start-1 col-end-13 self-center justify-self-start
        font-(family-name:--font-headings) font-normal 
        mb-[0.25em]
        text-[1.5rem] lg:text-[2.25rem]
        "
      >
        <h2 className="mb-[-10px] lg:mb-[-15px]">Day 04</h2>
        <h2>Mitaka | Akihabra | Sumida</h2>
      </div>

      <img
        src={ghibli}
        alt="Ghibli Museum"
        className="row-start-2 row-end-6 col-start-2 col-end-11"
      />
      <img
        src={park}
        alt="Mitaka Park"
        className="row-start-5 row-end-7 col-start-1 col-end-6 self-center justify-self-center
        w-[130px]"
      />
      <img
        src={robot}
        alt=""
        className="row-start-4 row-end-7 col-start-7 col-end-13"
      />

      <div className="row-start-7 row-end-9 col-start-1 col-end-12 text-[1rem]">
        <p className="mt-[0.5em]">
          If you're lucky you'll be able to score Ghibli Museum tickets online
          and then you can visit the wonderfully magestic museum yourself! Take
          some time to visit the park right next door!
        </p>
        <br />
        <p>Located just an hour train ride away from the center of Tokyo.</p>
      </div>

      <div
        className="row-start-9 row-end-12 col-start-1 col-end-13 self-center justify-self-center
      bg-(--color-light-green) w-[400px] h-[100px]"
      ></div>
      <div
        className="row-start-9 row-end-12 col-start-1 col-end-13 self-center justify-self-center      
        flex flex-row justify-center w-[110px]"
      >
        <img src={people} alt="" />
        <img src={people} alt="" />
        <img src={people} alt="" />
      </div>
    </div>
  );
};

export default Day4_part1;
