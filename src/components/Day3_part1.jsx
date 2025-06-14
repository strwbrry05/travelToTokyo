import React from "react";
import national from "../assets/images/day3/day3_TokyoNational.png";
import nature from "../assets/images/day3/day3_natureScience.png";
import art from "../assets/images/day3/day3_MetropolitanArt.png";
import zoo from "../assets/images/day3/day3_UenoZoo.png";
import ramen from "../assets/images/day3/day3_ramen.png";

const Day3_part1 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold 
      
      "
    >
      <div
        className="row-start-1 row-end-2 col-start-1 col-end-13 self-center justify-self-start
        font-(family-name:--font-headings) font-normal 
        mb-[0.25em]
        text-[2.15rem] lg:text-[2.25rem]
        "
      >
        <h2 className="mb-[-15px]">Day 03</h2>
        <h2>Chiba | Ueno</h2>
      </div>

      <div
        className="row-start-2 row-end-5 col-start-3 col-end-11 self-center justify-self-center
        bg-(--color-light-yellow) 
      w-[230px] h-[180px]
      
      sm:w-[350px]"
      ></div>

      <div
        className="row-start-2 row-end-4 col-start-1 col-end-13 self-start 
      flex flex-row justify-evenly items-center sm:mt-[1em]"
      >
        <img
          src={national}
          alt="Tokyo National Museum"
          className="object-cover w-[170px] h-[115px]
          
          sm:w-[200px] sm:h-[130px]
          xl:w-[220px] xl:h-[150px]"
        />
        <img
          src={nature}
          alt="Museum of Nature and Science"
          className="object-cover w-[170px] h-[115px]
          
          sm:w-[200px] sm:h-[130px]
          xl:w-[220px] xl:h-[150px]"
        />
      </div>

      <div
        className="row-start-3 row-end-5 col-start-1 col-end-13
      flex flex-row justify-evenly items-center sm:mt-[4em] xl:mt-[4.5em]"
      >
        <img
          src={zoo}
          alt="Ueno Zoo"
          className="object-cover w-[170px] h-[115px]
          
          sm:w-[200px] sm:h-[130px]
          xl:w-[220px] xl:h-[150px]"
        />
        <img
          src={art}
          alt="Tokyo Metropolitan Art Museum"
          className="object-cover w-[170px] h-[115px]
          
          sm:w-[200px] sm:h-[130px]
          xl:w-[220px] xl:h-[150px] "
        />
      </div>
      <div
        className="row-start-5 row-end-9 col-start-6 col-end-11 self-center
      bg-(--color-light-yellow) h-[250px]"
      ></div>

      <div
        className="row-start-5 row-end-10 col-start-2 col-end-9
      text-[0.9rem] 
      
      sm:text-[1rem] sm:mt-[1.75em] xl:col-end-10 xl:mt-[3.5em]"
      >
        <p>
          Spend Day Three in one of two places, Museums or Amusement Parks.
          Depending on your personality, you'll likely enjoy one more than the
          other.
        </p>
        <br />
        <p>
          Ueno park hosts a series of museums; all walkable distance from each
          other! Including the Ueno Zoo!
        </p>
        <br />
        <p>
          Other museums you can find located in Ueno Park: The Tokyo National
          Museum, Museum of Nature and Science, Tokyo Metropolitan Art Museum,
          and Ueno Royal Museum.
        </p>
      </div>

      <div
        className="row-start-9 row-end-11 col-start-2 col-end-10 self-center
      bg-(--color-yellow) flex justify-center items-center w-[225px] h-[150px] p-[1em]
      
      sm:w-[250px] sm:h-[170px]
      xl:row-start-8"
      >
        <p
          className="row-end-9 row-end-11 col-start-2 col-end-9 
      text-[0.75rem]
      
      sm:text-[0.9rem]"
        >
          End your day, regardless of activy with a nice bowl of Ichiran ramen!
          Popular for its unqiue service practice of minimal conversation and
          individual seating!
        </p>
      </div>

      <img
        src={ramen}
        alt="Bowl of Ramen"
        className="row-start-9 row-end-12 col-start-6 col-end-13 self-end justify-self-center
        w-[200px]
        
        sm:w-[240px] xl:row-start-8 xl:self-center"
      />
    </div>
  );
};

export default Day3_part1;
