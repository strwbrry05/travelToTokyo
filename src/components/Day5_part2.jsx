import React from "react";
import muji from "../assets/images/day5/day5_muji.svg";
import westwood from "../assets/images/day5/day5_westwood.svg";
import tiger from "../assets/images/day5/day5_tiger.svg";
import uniqlo from "../assets/images/day5/day5_uniqlo.svg";
import udon from "../assets/images/day5/day5_udon.svg";
import person from "../assets/images/day5/day5_person.svg";

const Day5_part2 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(12,minmax(30px,1fr))]
       lg:grid-cols-[repeat(11,minmax(30px,45px))]
      font-(family-name:--font-text) font-bold 
      sm:bg-blue-100 lg:bg-yellow-200 xl:bg-green-100"
    >
      <img
        src={tiger}
        alt="Onitsuka Tiger Store"
        className="row-start-1 row-end-3 col-start-8 col-end-13 justify-self-center mb-[0.5em]
         object-cover w-[120px] h-[120px]
         sm:w-[130px] sm:h-[130px]"
      />
      <img
        src={muji}
        alt="Muji Store"
        className="row-start-3 row-end-5 col-start-8 col-end-13 justify-self-center mb-[0.5em]
         object-cover w-[120px] h-[120px]
         sm:w-[130px] sm:h-[130px]"
      />
      <img
        src={uniqlo}
        alt="Uniqlo Store"
        className="row-start-5 row-end-7 col-start-8 col-end-13 justify-self-center mb-[0.5em]
         object-cover w-[120px] h-[120px]
         sm:w-[130px] sm:h-[130px]"
      />
      <img
        src={westwood}
        alt="Vivienne Westwood Store"
        className="row-start-7 row-end-9 col-start-8 col-end-13 justify-self-center
         object-cover w-[120px] h-[120px]
         sm:w-[130px] sm:h-[130px]"
      />

      <div
        className="row-start-3 row-end-5 col-start-4 col-end-8 self-center
      bg-(--color-yellow) w-[120px] h-[110px]
      
      sm:self-start sm:justify-self-end sm:w-[150px] "
      ></div>
      <div
        className="row-start-5 row-end-7 col-start-1 col-end-5 self-center
      bg-(--color-light-yellow) w-[130px] h-[110px]
      
      sm:self-end sm:w-[200px] sm:h-[90px] sm:col-start-2"
      ></div>
      <img
        src={udon}
        alt="Udon"
        className="row-start-3 row-end-7 col-start-1 col-end-8 self-center
        rounded-full border-5 border-(--color-white) shadow-(--pic-shadow) justify-self-center
        w-[200px]
        
        sm:w-[250px] sm:justify-self-end"
      />

      <div
        className="row-start-8 row-end-10 col-start-1 col-end-6 self-center
      bg-(--color-light-yellow) h-[90px] w-[170px]
      sm:w-[200px]"
      ></div>
      <div
        className="row-start-9 row-end-11 col-start-3 col-end-10 self-center
      bg-(--color-yellow) h-[60px] w-[200px]
      sm:w-[280px]"
      ></div>
      <div
        className="row-start-8 row-end-11 col-start-1 col-end-7
      flex flex-row items-center
      
      sm:row-start-7 sm:mt-[1em]"
      >
        <img src={person} alt="" className="w-[65px] sm:w-[85px]" />
        <img src={person} alt="" className="w-[65px] sm:w-[85px]" />
        <img src={person} alt="" className="w-[65px] sm:w-[85px]" />
        <img src={person} alt="" className="w-[65px] sm:w-[85px]" />
      </div>

      <div
        className="row-start-11 row-end-13 col-start-1 col-end-13
      text-[0.85rem] 
      
      sm:text-[1rem]"
      >
        <p>
          End your day with a nice walk around Tokyo Station where you'll be
          able to find the famous Character Street (tons of shops with character
          merch).
        </p>
        <br />
        <p>
          When you get hungry, enjoy some fresh long udon at GoDaime Udon,
          located near Gina or Tokyo Station. Careful! You may have to wait in
          line to taste these noodles.
        </p>
      </div>
    </div>
  );
};

export default Day5_part2;
