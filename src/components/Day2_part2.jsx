import React from "react";
import conbini from "../assets/images/day2/day2_conbini.svg";
import daifuku from "../assets/images/day2/day2_daifuku.svg";
import pokemon from "../assets/images/day2/day2_pokemon.svg";
import aquarium from "../assets/images/day2/day2_aquarium.svg";
import ikebukuro from "../assets/images/day2/day2_ikebukuro.svg";
import "../index.css";

const Day2_part2 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(11,minmax(30px,1fr))]
      font-(family-name:--font-text) font-bold
      sm:bg-blue-100 md:bg-red-100 lg:bg-yellow-200 xl:bg-green-100"
    >
      <div
        className="row-start-1 row-end-2 col-start-6 col-end-13 justify-self-start self-center 
      bg-(--color-light-green) w-[190px] h-[30px]"
      ></div>
      <div
        className="row-start-2 row-end-6 col-start-6 col-end-13
      text-[0.85rem]"
      >
        <p>
          Spend a portion of your day in the beautiful aquarium located
          suprisingly in a mall! The sunshine aquarium has lots to offer and
          much to see.
        </p>
        <br />
        <p>
          Come back down to Asaklusa for dinner where you have the option to
          pick such (Kura Sushi), curry (CocoCurry), or if you're feeling tired,
          a 7/11 meal.
        </p>
        <br />
        <p>
          Be sure to take advantage of the quiet nightlife in Asakusa where
          you'll be able to see the beautifully lit temple at night OR visit
          another 24/7 Donqui (not pictured).
        </p>
      </div>
      <div
        className="row-start-3 row-end-5 col-start-1 col-end-5 self-center
      bg-(--color-green) h-[150px]"
      ></div>
      <img
        src={conbini}
        alt="seven eleven store"
        className="row-start-2 row-end-4 col-start-1 col-end-6 self-center
        object-cover w-[125px] h-[125px] border-5 border-(--color-white) rounded-full shadow-(--pic-shadow)"
      />
      <img
        src={daifuku}
        alt="strawberry daifuku"
        className="row-start-4 row-end-6 col-start-2 col-end-6 self-start
        object-cover w-[125px] h-[125px] border-5 border-(--color-white) rounded-full shadow-(--pic-shadow)"
      />
      <img
        src={pokemon}
        alt="pokemon store"
        className="row-start-6 row-end-8 col-start-1 col-end-7 self-center justify-self-center
        object-cover border-5 border-(--color-white) shadow-(--pic-shadow) rounded-sm
        w-[200px] h-[110px]"
      />
      <img
        src={aquarium}
        alt="sunshine aquarium"
        className="row-start-6 row-end-8 col-start-7 col-end-13 self-center justify-self-center
        object-cover border-5 border-(--color-white) shadow-(--pic-shadow) rounded-sm
        w-[200px] h-[110px]"
      />
      <img
        src={ikebukuro}
        alt="city of ikebukuro"
        className="row-start-8 row-end-12 col-start-2 col-end-12 self-center justify-self-center
        w-[400px]"
      />
      <div
        className="row-start-8 row-end-10 col-start-8 col-end-12 self-center
      bg-(--color-light-green) text-(--color-white) text-[0.75rem] flex justify-center items-center
      w-[155px] h-[75px] p-[1em]"
      >
        <p>Pokemon Center & Sunshine Aquarium, Ikebukuro</p>
      </div>
    </div>
  );
};

export default Day2_part2;
