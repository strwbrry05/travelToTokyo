import React from "react";
import robot from "../assets/images/day4/day4_robot.svg";
import people from "../assets/images/day4/day4_people.svg";
import park from "../assets/images/day4/day4_park.svg";
import ghibli from "../assets/images/day4/day4_ghibli.svg";

const Day4_part1 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
       lg:grid-cols-[repeat(11,minmax(30px,45px))]
      font-(family-name:--font-text) font-bold 
      "
    >
      <div
        className="row-start-1 row-end-2 col-start-1 col-end-13 self-center justify-self-start
        font-(family-name:--font-headings) font-normal 
        mb-[0.25em]
        text-[1.5rem] sm:text-[2rem] lg:text-[1.5rem] xl:text-[1.55rem]
        "
      >
        <h2 className="mb-[-10px] xl:mb-[-15px]">Day 04</h2>
        <h2>Mitaka | Akihabra | Sumida</h2>
      </div>

      <img
        src={ghibli}
        alt="Ghibli Museum"
        className="row-start-2 row-end-6 col-start-2 col-end-11
        
        sm:w-[350px] sm:justify-self-center
        lg:self-center lg:justify-self-center lg:w-[200px]
        xl:w-[250px]"
      />
      <img
        src={park}
        alt="Mitaka Park"
        className="row-start-5 row-end-7 col-start-1 col-end-6 self-center justify-self-center
        w-[130px] mr-[1em]
        
        sm:w-[150px]
        lg:w-[100px] lg:row-start-4"
      />
      <img
        src={robot}
        alt=""
        className="row-start-4 row-end-7 col-start-7 col-end-13
        
        sm:col-start-6 sm:col-end-12
        lg:w-[150px] 
        xl:w-[275px]"
      />

      <div
        className="row-start-7 row-end-10 col-start-1 col-end-12 text-[0.9rem]
      
        sm:text-[1rem] sm:col-start-2
      lg:row-start-6 lg:self-center
      "
      >
        <p className="mt-[1em] sm:mt-[2em] xl:mt-[3.5em]">
          If you're lucky you'll be able to score Ghibli Museum tickets online
          and then you can visit the wonderfully magestic museum yourself! Take
          some time to visit the park right next door!
        </p>
        <br />
        <p>Located just an hour train ride away from the center of Tokyo.</p>
      </div>

      <div
        className="row-start-9 row-end-12 col-start-1 col-end-13 self-center justify-self-center
      bg-(--color-light-green) w-[400px] h-[100px] 
      
      sm:w-[450px]
      lg:w-[200px] lg:h-[80px]
      xl:mt-[3em]"
      ></div>
      <div
        className="row-start-9 row-end-12 col-start-1 col-end-13 self-center justify-self-center      
        flex flex-row justify-center w-[110px]
        
        sm:w-[130px]
        lg:w-[85px]
        xl:w-[100px] xl:mt-[3em]"
      >
        <img src={people} alt="" />
        <img src={people} alt="" />
        <img src={people} alt="" />
      </div>
    </div>
  );
};

export default Day4_part1;
