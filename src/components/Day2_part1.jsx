import React from "react";
import sensoji from "../assets/images/day2/day2_sensoji.png";
import sushi from "../assets/images/day2/day2_sushi.png";
import person from "../assets/images/day2/day2_mom.png";
import curry from "../assets/images/day2/day2_curry.png";
import animate from "../assets/images/day2/day2_animate.png";
import misojyu from "../assets/images/day2/day2_misojyu.png";

const Day2_part1 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
      xl:grid-rows-[repeat(12,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold
      xl:justify-center xl:scale-[1.1] mt-[3em]
      "
    >
      <div
        className="row-start-1 row-end-2 col-start-1 col-end-12 self-center justify-self-start
      font-(family-name:--font-headings) font-normal text-[2rem] 
      
      sm:text-[2.15rem] lg:text-[2.25rem]"
      >
        <h2 className="mb-[-15px]">Day 02</h2>
        <h2>Asakusa | Ikebukuro</h2>
      </div>
      <img
        src={sensoji}
        alt="sensoji temple"
        className="row-start-2 row-end-4 col-start-1 col-end-13 self-center justify-self-center
        object-cover w-[425px] h-[170px]
        
        sm:w-[500px] sm:h-[200px]
        xl:h-[220px] xl:row-end-5 xl:self-start"
      />
      <div
        className=" row-start-2 row-end-3 col-start-1 col-end-7 self-start justify-self-start
      bg-(--color-green) text-(--color-white) flex justify-center items-center
      text-[0.75rem] w-[170px] h-[35px] mt-[0.5em] ml-[1.75em]
      
      sm:text-[0.9rem] sm:w-[200px] sm:ml-[0]
      xl:h-[40px]"
      >
        <p className="">Senoji Shrine, Asakusa</p>
      </div>
      <img
        src={sushi}
        alt="kura sushi"
        className="row-start-3 row-end-4 col-start-8 col-end-13 justify-self-center self-center
        w-[150px]
        
        sm:w-[175px] sm:justify-self-end
        xl:w-[200px] xl:row-end-5"
      />
      <p
        className="row-start-4 row-end-6 col-start-1 col-end-13 justify-self-center
      text-[0.9rem] mt-[1.5em]

      sm:text-[1rem] sm:mt-[3em] 
      xl:mt-[4.5em]
      "
      >
        Start off your second morning with some fresh onigiri and warm soup at
        Misojyu, Asakusa. Then take a 5 minute walk down to one of the most
        popular temples; Sensoji! Beautiful scenery along with an equally famous
        shopping street (Namikaedori Street). Here you can find unique
        souveniers along with sweet daifuku!
      </p>
      <p
        className="row-start-6 row-end-8 col-start-1 col-end-13 text-[0.9rem] 
      self-start justify-self-center
      
      sm:text-[1rem]"
      >
        Take in the sights and then hop on the train! Your next stop is
        Ikebukuro, which is a 45 minute train ride from Asakusa. Here you'll be
        able to do some more shopping (anime, pokemon center) and explore a new
        city.
      </p>
      <div
        className="row-start-7 row-end-9 col-start-2 col-end-12 self-center
      bg-(--color-green) h-[90px] mb-[1em]
      xl:h-[80px] xl:mb-[2em]"
      ></div>
      <img
        src={person}
        alt=""
        className="row-start-7 row-end-9 col-start-3 col-end-5 self-center xl:w-[80px]"
      />
      <img
        src={person}
        alt=""
        className="row-start-7 row-end-9 col-start-6 col-end-8 self-center xl:w-[80px]"
      />
      <img
        src={person}
        alt=""
        className="row-start-7 row-end-9 col-start-9 col-end-11 self-center xl:w-[80px]"
      />
      <img
        src={misojyu}
        alt="misojyu"
        className="row-start-9 row-end-12 col-start-3 col-end-11 justify-self-center self-center
        w-[275px]
        sm:w-[290px]
        
        xl:row-end-13 xl:w-[320px]"
      />
      <img
        src={curry}
        alt="curry"
        className="row-start-9 row-end-11 col-start-1 col-end-6 self-start justify-self-start
        w-[110px] ml-[1em]
        
        sm:w-[125px] sm:justify-self-center lg:w-[150px]
        xl:w-[170px]"
      />
      <div
        className="row-start-10 row-end-12 col-start-1 col-end-6 justify-self-center self-end
        flex flex-col justify-evenly items-center
      w-[125px] h-[130px] text-[0.65rem] p-[1em] bg-(--color-green) text-(--color-white)
      
      sm:text-[0.75rem] sm:justify-self-start sm:w-[160px]
      xl:col-end-8 xl:w-[250px] xl:items-start xl:h-[100px]"
      >
        <p className="mb-[0.5em] xl:mb-[-1em]">Onigiri Misojyu, Asakusa</p>
        <p>Chicken Cutlet CocoCurry, Asakusa</p>
      </div>
      <img
        src={animate}
        alt="animate store"
        className=" row-start-10 row-end-12 col-start-8 col-end-12 justify-self-end self-center
        w-[115px] h-[115px] object-cover border-5 border-(--color-white) rounded-full shadow-(--pic-shadow)
        
        sm:w-[125px] sm:h-[125px] lg:w-[150px] lg:h-[150px]
        xl:w-[170px] xl:h-[170px] xl:col-end-13"
      />
    </div>
  );
};

export default Day2_part1;
