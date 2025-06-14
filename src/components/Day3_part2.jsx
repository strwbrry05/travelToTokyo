import React from "react";
import disney from "../assets/images/day3/day3_disney.png";
import people from "../assets/images/day3/day3_people.png";
import mochi from "../assets/images/day3/day3_mochi.png";
import disneySea from "../assets/images/day3/day3_disneySea.png";

const Day3_part2 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold 
      xl:justify-self-center
      "
    >
      <div
        className="row-start-1 row-end-4 col-start-1 col-end-6
      text-[0.85rem] mt-[2em]
      
      sm:text-[1rem] mt-[3em]"
      >
        <p>
          Maybe you chose to explore the various Disney Parks! Have fun! Both
          have incredible rides and snacks to try that you can't find anywhere
          else.
        </p>
        <br />
        <p>
          Be sure to try their popular 'Alien Mochi' which can be found in both
          parks! (Definitely Recommend!)
        </p>
      </div>
      <img
        src={disney}
        alt="Tokyo Disney"
        className="row-start-1 row-end-4 col-start-6 col-end-13 self-center justify-self-center
        object-cover w-[200px] h-[200px]
        
        sm:w-[275px] sm:h-[275px]
        xl:w-[290px] xl:h-[290px] xl:mt-[2em]"
      />

      <div
        className="row-start-4 row-end-7 col-start-1 col-end-9 self-center justify-self-center
      bg-(--color-yellow) h-[240px] w-[210px]
      
      sm:h-[225px] sm:w-[300px] sm:mt-[-2.5em]
      xl:h-[120px]"
      ></div>
      <img
        src={mochi}
        alt="Alien Mochi"
        className="row-start-4 row-end-7 col-start-4 col-end-11 self-center justify-self-center
        w-[220px] sm:mt-[-3.5em]
        xl:w-[250px]"
      />

      <div
        className="row-start-7 row-end-8 col-start-4 col-end-13 self-center justify-self-end
      bg-(--color-light-yellow) w-[250px] h-[70px] flex flex-col justify-center p-[1em] text-[0.75rem]
      
      sm:text-[0.9rem] sm:w-[300px] sm:h-[80px] sm:mt-[-7em]"
      >
        <p>Above: Tokyo Disneyland</p>
        <p>Below: Tokyo DisneySea</p>
      </div>

      <img
        src={disneySea}
        alt="Tokyo DisneySea"
        className="row-start-8 row-end-11 col-start-2 col-end-12 self-center
        xl:w-[450px]
        sm:mt-[-3em]"
      />
      <img
        src={people}
        alt=""
        className="row-start-9 row-end-11 col-start-9 col-end-12 self-center xl:w-[140px]"
      />
      <div
        className="row-start-10 row-end-12 col-start-9 col-end-12 self-center
      bg-(--color-yellow) w-[80px] h-[90px] text-[0.75rem] flex justify-center p-[1em]
      
      sm:text-[0.9rem] sm:w-[150px] sm:h-[50px]"
      >
        <p>Tokyo Only Ears!</p>
      </div>
    </div>
  );
};

export default Day3_part2;
