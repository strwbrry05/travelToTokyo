import React from "react";
import sensoji from "../assets/images/day2/day2_sensoji.svg";
import sushi from "../assets/images/day2/day2_sushi.svg";
import person from "../assets/images/day2/day2_mom.svg";
import curry from "../assets/images/day2/day2_curry.svg";
import animate from "../assets/images/day2/day2_animate.svg";
import misojyu from "../assets/images/day2/day2_misojyu.svg";

const Day2_part1 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold
      sm:bg-blue-100 md:bg-red-100 lg:bg-yellow-200 xl:bg-green-100"
    >
      <div
        className="row-start-1 row-end-2 col-start-1 col-end-12 self-center justify-self-start
      font-(family-name:--font-headings) font-normal text-[2rem] 
      
      sm:text-[2.15rem] lg:text-[2.25rem]"
      >
        <h2>Day 2</h2>
        <h2>Asakusa | Ikebukuro</h2>
      </div>
      <img
        src={sensoji}
        alt="sensoji temple"
        className="row-start-2 row-end-4 col-start-1 col-end-13 self-center justify-self-center
        object-cover w-[425px] h-[170px]"
      />
      <div
        className=" row-start-2 row-end-3 col-start-1 col-end-7 self-start justify-self-start
      bg-(--color-green) text-(--color-white) flex justify-center items-center
      text-[0.75rem] w-[170px] h-[35px] mt-[0.5em] ml-[1.75em] "
      >
        <p className="">Senoji Shrine, Asakusa</p>
      </div>
      <img
        src={sushi}
        alt="kura sushi"
        className="row-start-3 row-end-4 col-start-8 col-end-13 justify-self-center self-center
        w-[150px]"
      />
      <p
        className="row-start-4 row-end-6 col-start-1 col-end-13 justify-self-center
      text-[0.9rem] mt-[1.5em]
      "
      >
        Start off your second morning with some fresh onigiri and warm soup at
        Misojyu, Asakusa. Then take a 5 minute walk down to one of the most
        popular temples; Sensoji! Beautiful scenery along with an equally famous
        shopping street (Namikaedori Street). Here you can find unique
        souveniers along with sweet daifuku!
      </p>
      <p className="row-start-6 row-end-8 col-start-1 col-end-13 text-[0.9rem] self-start justify-self-center">
        Take in the sights and then hop on the train! Your next stop is
        Ikebukuro, which is a 45 minute train ride from Asakusa. Here you'll be
        able to do some more shopping (anime, pokemon center) and explore a new
        city.
      </p>
      <div
        className="row-start-7 row-end-9 col-start-2 col-end-12 self-center
      bg-(--color-green) h-[90px]"
      ></div>
      <img
        src={person}
        alt=""
        className="row-start-7 row-end-9 col-start-3 col-end-5 self-center"
      />
      <img
        src={person}
        alt=""
        className="row-start-7 row-end-9 col-start-6 col-end-8 self-center"
      />
      <img
        src={person}
        alt=""
        className="row-start-7 row-end-9 col-start-9 col-end-11 self-center"
      />
      <img
        src={misojyu}
        alt="misojyu"
        className="row-start-9 row-end-12 col-start-3 col-end-11 justify-self-center self-center
        w-[275px]"
      />
      <img
        src={curry}
        alt="curry"
        className="row-start-9 row-end-11 col-start-1 col-end-6 self-start justify-self-start
        w-[110px] ml-[1em]"
      />
      <div
        className="row-start-10 row-end-12 col-start-1 col-end-6 justify-self-center self-end
        flex flex-col justify-evenly items-center
      w-[125px] h-[130px] text-[0.65rem] p-[1em] bg-(--color-green) text-(--color-white)"
      >
        <p>Onigiri Misojyu, Asakusa</p>
        <p>Chicken Cutlet CocoCurry, Asakusa</p>
      </div>
      <img
        src={animate}
        alt="animate store"
        className=" row-start-10 row-end-12 col-start-8 col-end-12 justify-self-end self-center
        w-[115px] h-[115px] object-cover border-5 border-(--color-white) rounded-full shadow-[0px_4px_5px_rgba(0,0,0,0.75)]"
      />
    </div>
  );
};

export default Day2_part1;
