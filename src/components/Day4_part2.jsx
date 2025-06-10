import React from "react";
import akihabara from "../assets/images/day4/day4_akihabara.svg";
import donut from "../assets/images/day4/day4_donut.svg";
import katsu from "../assets/images/day4/day4_katsu.svg";

const Day4_part2 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold 
      "
    >
      <div
        className="row-start-1 row-end-5 col-start-1 col-end-13 text-[0.85rem]
      
      sm:text-[1rem] lg:text-[0.9rem]"
      >
        <p>
          Next stop, Akihabara! Electric Town or Anime Central (depending on who
          you ask).Here you can explore the various shops for gadgets and gizmos
          as well as character merchandise from your favorite shows!
        </p>
        <br />
        <p>
          Also located in Akihabara, we have some delicious treats and dinner
          spots! Visit a Gyukatsu Motomura location and enjoy a Steak Katsu
          (where you get to cook it yourself)!
        </p>
        <br />
        <p>
          Or if you're feeling like you need something sweet, get a donut at a
          chain Mister Donut location.
        </p>
      </div>

      <div
        className="row-start-5 row-end-7 col-start-1 col-end-9 self-center
      bg-(--color-light-green) h-[90px]
      
      sm:row-start-4
      lg:h-[70px] lg:row-start-5"
      ></div>

      <img
        src={katsu}
        alt="Gyukatsu Motomura Cutlet"
        className="row-start-5 row-end-8 col-start-7 col-end-13 self-start justify-self-center
        w-[120px] h-[120px] object-cover border-5 border-(--color-white) rounded-full shadow-(--pic-shadow)

        sm:w-[160px] sm:h-[160px] sm:row-start-4 sm:mt-[1em]
        
        lg:row-start-5 lg:w-[100px] lg:h-[100px]
        xl:w-[130px] xl:h-[130px] xl:row-start-4 xl:self-center xl:mb-[2em]
        "
      />

      <img
        src={akihabara}
        alt="Akihabara"
        className="row-start-7 row-end-12 col-start-1 col-end-10 self-center

        sm:w-[400px]
        
        "
      />
      <img
        src={donut}
        alt="Mister Donut"
        className="row-start-6 row-end-9 col-start-4 col-end-9 self-center justify-self-end
        w-[115px] h-[115px] object-cover border-5 border-(--color-white) rounded-full shadow-(--pic-shadow)

        sm:w-[160px] sm:h-[160px] sm:row-start-5
        lg:w-[100px] lg:h-[100px] lg:row-start-6
        xl:w-[120px] xl:h-[120px]
        "
      />
      <div
        className="row-start-8 row-end-10 col-start-8 col-end-13 self-end
      text-[0.75rem] bg-(--color-green) text-(--color-white) flex justify-center p-[1em] h-[90px]
      
      sm:items-center sm:text-[0.9rem] 
      lg:text-[0.75rem]
      xl:row-start-9 xl:row-end-11"
      >
        <p>Akihabara is known for selling various kinds of technology!</p>
      </div>
    </div>
  );
};

export default Day4_part2;
