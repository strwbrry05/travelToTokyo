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
    lg:grid-cols-[repeat(11,minmax(30px,45px))] sm:mt-[1em]
    xl:grid-cols-[repeat(12,minmax(30px,45px))] xl:justify-self-center xl:scale-[1.15]
      font-(family-name:--font-text) font-bold 
      "
    >
      <img
        src={tiger}
        alt="Onitsuka Tiger Store"
        className="row-start-1 row-end-3 col-start-8 col-end-13 justify-self-center mb-[0.5em]
         object-cover w-[120px] h-[120px]
         sm:w-[130px] sm:h-[130px]
         
        xl:self-center xl:w-[150px] xl:h-[150px]"
      />
      <img
        src={muji}
        alt="Muji Store"
        className="row-start-3 row-end-5 col-start-8 col-end-13 justify-self-center mb-[0.5em]
         object-cover w-[120px] h-[120px]
         sm:w-[130px] sm:h-[130px]
         
         xl:row-end-6 xl:self-center xl:w-[150px] xl:h-[150px]"
      />
      <img
        src={uniqlo}
        alt="Uniqlo Store"
        className="row-start-5 row-end-7 col-start-8 col-end-13 justify-self-center mb-[0.5em]
         object-cover w-[120px] h-[120px]
         sm:w-[130px] sm:h-[130px]

        xl:row-end-9 xl:self-center xl:w-[150px] xl:h-[150px]"
      />
      <img
        src={westwood}
        alt="Vivienne Westwood Store"
        className="row-start-7 row-end-9 col-start-8 col-end-13 justify-self-center
         object-cover w-[120px] h-[120px]
         sm:w-[130px] sm:h-[130px]
         
         xl:row-end-12 xl:self-center xl:w-[150px] xl:h-[150px]"
      />

      <div
        className="row-start-3 row-end-5 col-start-4 col-end-8 self-center
      bg-(--color-yellow) w-[120px] h-[110px]
      
      sm:self-start sm:justify-self-end sm:w-[150px] 
      xl:row-start-2 xl:row-end-4 xl:self-end"
      ></div>
      <div
        className="row-start-5 row-end-7 col-start-1 col-end-5 self-center
      bg-(--color-light-yellow) w-[130px] h-[110px]
      
      sm:self-end sm:w-[200px] sm:h-[90px] sm:col-start-2
      xl:row-start-4 xl:row-end-6  xl:col-start-1 xl:self-start xl:h-[140px]"
      ></div>
      <img
        src={udon}
        alt="Udon"
        className="row-start-3 row-end-7 col-start-1 col-end-8 self-center
        rounded-full border-5 border-(--color-white) shadow-(--pic-shadow) justify-self-center
        w-[200px]
        
        sm:w-[250px] sm:justify-self-end
        
        xl:row-start-2 xl:row-end-6 xl:justify-self-center"
      />

      <div
        className="row-start-8 row-end-10 col-start-1 col-end-6 self-center
      bg-(--color-light-yellow) h-[90px] w-[170px]
      sm:w-[200px]
      xl:row-start-6 xl:row-end-8 xl:self-end xl:h-[125px] xl:w-[230px]"
      ></div>
      <div
        className="row-start-9 row-end-11 col-start-3 col-end-10 self-center
      bg-(--color-yellow) h-[60px] w-[200px]
      sm:w-[280px]
      xl:row-start-7 xl:row-end-9 xl:col-start-2"
      ></div>
      <div
        className="row-start-8 row-end-11 col-start-1 col-end-7
      flex flex-row items-center
      
      sm:row-start-7 sm:mt-[1em]
      xl:row-start-6 xl:row-end-9"
      >
        <img src={person} alt="" className="w-[65px] sm:w-[85px] xl:w-[75px]" />
        <img src={person} alt="" className="w-[65px] sm:w-[85px] xl:w-[75px]" />
        <img src={person} alt="" className="w-[65px] sm:w-[85px] xl:w-[75px]" />
        <img src={person} alt="" className="w-[65px] sm:w-[85px] xl:w-[75px]" />
      </div>

      <div
        className="row-start-11 row-end-13 col-start-1 col-end-13
      text-[0.85rem] 
      
      sm:text-[1rem]
      xl:col-end-9 xl:row-start-9"
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
