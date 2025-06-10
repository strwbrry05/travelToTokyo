import React from "react";
import egg from "../assets/images/day5/day5_egg.svg";
import meat from "../assets/images/day5/day5_meat.svg";
import tsukiji from "../assets/images/day5/day5_tsukiji.svg";
import ginza from "../assets/images/day5/day5_ginza.svg";

const Day5_part1 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
       lg:grid-cols-[repeat(11,minmax(30px,45px))] 
       xl:grid-cols-[repeat(12,minmax(30px,45px))] xl:grid-rows-[repeat(10,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold 
      "
    >
      <div
        className="row-start-1 row-end-2 col-start-1 col-end-13 self-center justify-self-start
        font-(family-name:--font-headings) font-normal 
        mb-[0.25em]
        text-[2rem] sm:text-[2.15rem] xl:text-[2.5rem]

        xl:row-start-1 xl:row-end-2 xl:col-start-1 xl:col-end-13 xl:self-center
        xl:justify-self-start xl:mb-[-0.05em]
        "
      >
        <h2 className="mb-[-10px]">Day 05</h2>
        <h2>Tsukiji | Ginza</h2>
      </div>

      <div
        className="row-start-2 row-end-8 col-start-7 col-end-13 self-center
      text-[0.9rem]
      
      sm:text-[1rem] sm:col-start-6
      xl:col-end-12 xl:p-[1em] xl:col-start-5"
      >
        <p>
          Spend your last day like everyone should, shopping and eating. Visit
          Tsukiji Market for an abundance of market stalls selling various kinds
          of street food!
        </p>
        <br />
        <p>
          Beware! The market tends to fill up quickly so make sure you're there
          early enough to fill up before the crowds. Enjoy some premium wagyu on
          a stick, or some egg on a stick.
        </p>
        <br />
        <p>
          Once you've had your fill, head on to the shopping district, Ginza.
          Here you'll be able to find anything you want including luxury stores
          to stationary stores.
        </p>
        <br />
        <p>
          If you get to visit on a weekend, they actually close the streets for
          cars so people can walk around!
        </p>
      </div>

      <img
        src={egg}
        alt="Egg Skewer"
        className="row-start-2 row-end-4 col-start-1 col-end-6 self-center justify-self-center
        w-[160px]
        
        sm:w-[175px]
        xl:col-end-5  xl:w-[125px]
        "
      />
      <img
        src={meat}
        alt="Wagyu Skewer"
        className="row-start-4 row-end-6 col-start-1 col-end-6 self-center justify-self-center
        w-[160px]
        
        sm:w-[175px]
        xl:col-end-5 xl:w-[125px]"
      />
      <img
        src={tsukiji}
        alt="Tsukiji Market"
        className="row-start-6 row-end-8 col-start-1 col-end-6 self-center justify-self-center
        object-cover h-[160px] w-[160px]
        
        sm:w-[175px] sm:h-[175px]
        xl:col-end-5  xl:w-[125px] xl:h-[125px]"
      />
      <div
        className="row-start-8 row-end-10 col-start-6 col-end-13 self-center justify-self-center
      bg-(--color-yellow) h-[100px] w-[220px] sm:h-[125px]
       xl:mt-[0em] xl:self-start
      "
      ></div>

      <img
        src={ginza}
        alt="Ginza Shopping Street"
        className="row-start-9 row-end-12 col-start-2 col-end-12 justify-self-center 
        w-[320px]
        
        sm:w-[400px] sm:object-cover sm:h-[270px]
        xl:row-start-8 xl:row-end-11 xl:self-center
         "
      />
      <div
        className="row-start-10 row-end-12 col-start-1 col-end-5 self-center justify-self-center
      bg-(--color-light-yellow) h-[40px] w-[140px]
      
      xl:row-start-9"
      ></div>
    </div>
  );
};

export default Day5_part1;
