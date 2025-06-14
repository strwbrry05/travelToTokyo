import React from "react";
import takeshita from "../assets/images/day1/day1_takeshita.png";
import crepe from "../assets/images/day1/day1_crepe.png";
import crossing from "../assets/images/day1/day1_crossing.png";
import udon from "../assets/images/day1/day1_udon.png";
import waffle from "../assets/images/day1/day1_waffle.png";
import katsudon from "../assets/images/day1/day1_katsudon.png";

const Day1_part2 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold
      "
    >
      <img
        src={takeshita}
        alt="famous shopping street (takeshita street)"
        className="row-start-1 row-end-4 col-start-2 col-end-12 justify-self-center self-center
        object-cover w-[325px] h-[150px]
        
        sm:w-[400px] sm:h-[200px] lg:w-[600px] lg:h-[270px]"
      />
      <img
        src={crepe}
        alt="crepe"
        className=" row-start-2 row-end-4 col-start-1 col-end-5
        w-[120px] h-[120px] object-cover border-5 border-(--color-white) rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.75)]
        
        sm:w-[135px] sm:h-[135px] justify-self-start
        xl:w-[155px] xl:h-[155px]"
      />
      <div
        className="row-start-1 row-end-4 col-start-2 col-end-7 self-end justify-self-center
      bg-(--color-light-yellow) w-[170px] h-[25px] flex justify-center items-center
      
      sm:w-[200px] sm:h-[33px] "
      >
        <p className="text-[0.75rem] p-[0.5em] sm:text-[0.9rem]">
          marion crepes, harajuku
        </p>
      </div>
      <div
        className="row-start-1 row-end-3 col-start-10 col-end-13 self-start justify-self-center
      bg-(--color-yellow) w-[100px] h-[100px] flex justify-center items-center
      
      sm:w-[170px] sm:h-[70px] sm:self-end"
      >
        <p className="text-[0.75rem] p-[0.5em] m-auto sm:text-[0.9rem] ">
          Harajuku's famous Takeshita street!
        </p>
      </div>
      <p
        className="row-start-4 row-end-7 col-start-2 col-end-12 self-start justify-self-center
      text-[0.85rem] mt-[1.25em]
      
      sm:text-[1rem] xl:mt-[2em]"
      >
        Head down Harajuku's infamous shopping street, Takeshita st, and stop by
        Marion's Crepes for a sweet treat! Also located in Takeshita street are
        tons of gacha machines and some purikura machines (photobooths)!
      </p>
      <div
        className="row-start-6 row-end-8 col-start-8 col-end-13
      bg-(--color-light-yellow) h-[100px] 
      
      sm:h-[160px] sm:row-start-5 sm:self-end lg:self-center"
      ></div>
      <img
        src={crossing}
        alt=""
        className="row-start-6 row-end-8 col-start-1 col-end-13 self-start justify-self-center
        object-cover w-[450px] h-[65px] mt-[1em]
        
        sm:w-[550px] sm:h-[100px] sm:mt-[0em] lg:h-[125px]"
      />

      <img
        src={udon}
        alt="menchirashi udon"
        className="row-start-7 row-end-11 col-start-2 col-end-6 self-center justify-self-end
        w-[115px] mb-[2.5em]
        
        sm:w-[135px] lg:w-[150px]
        xl:w-[155px]"
      />
      <p
        className="row-start-8 row-end-9 col-start-6 col-end-12 self-center justify-self-center
       text-[0.75rem] 
       
       sm:text-[1rem]"
      >
        Menchirashi, Harajuku
      </p>
      <img
        src={waffle}
        alt="menchirashi udon"
        className="row-start-9 row-end-11 col-start-7 col-end-12 self-start justify-self-center
        w-[115px]
        
        sm:w-[135px] lg:w-[150px] xl:w-[155px]"
      />
      <p
        className="row-start-9 row-end-11 col-start-1 col-end-7 text-[0.75rem] ml-[2em]
      self-center justify-self-center
      
      sm:text-[1rem]"
      >
        Blue Bottle Cafe, Shibuya
      </p>
      <img
        src={katsudon}
        alt="menchirashi udon"
        className="row-start-10 row-end-12 col-start-2 col-end-6 self-end justify-self-end
        w-[115px] object-cover h-[115px] mt-[0.75em]
        
        sm:w-[135px] sm:h-[135px] sm:mt-[1.25em] lg:w-[150px] lg:h-[150px]
        xl:w-[155px] xl:h-[155px]"
      />
      <p
        className="row-start-10 row-end-12 col-start-6 col-end-13 text-[0.75rem] mt-[3em]
      self-center justify-self-center
      
      sm:text-[1rem]"
      >
        Katsudon Ya-Zuicho, Shibuya
      </p>
    </div>
  );
};

export default Day1_part2;
