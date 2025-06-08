import React from "react";
import cake from "../assets/images/day4/day4_cake.svg";
import store from "../assets/images/day4/day4_store.svg";
import skytower from "../assets/images/day4/day4_skytower.svg";
import aquarium from "../assets/images/day4/day4_aquarium.svg";

const Day4_part3 = () => {
  return (
    <div
      className="grid grid-cols-[repeat(12,minmax(30px,45px))] grid-rows-[repeat(10,minmax(30px,1fr))]
      sm:grid-rows-[repeat(9,minmax(30px,1fr))]
      lg:grid-rows-[repeat(10,minmax(30px,1fr))] lg:grid-cols-[repeat(10,minmax(30px,45px))]
      font-(family-name:--font-text) font-bold 
      sm:bg-blue-100 lg:bg-yellow-200 xl:bg-green-100"
    >
      <img
        src={skytower}
        alt="Tokyo SkyTree"
        className="row-start-2 row-end-5 col-start-2 col-end-12 self-center justify-self-center
        w-[350px]
        
        sm:w-[375px]
        lg:w-[200px] lg:col-start-2 lg:self-center lg:justify-self-center"
      />
      <div
        className="row-start-1 row-end-3 col-start-8 col-end-13 self-center
      bg-(--color-green) h-[100px]
      
      sm:h-[70px]
      lg:col-start-7 lg:h-[60px] lg:w-[110px] lg:col-end-12"
      ></div>
      <img
        src={cake}
        alt="Cake in a can"
        className="row-start-3 row-end-5 col-start-1 col-end-8 self-center
         w-[130px] h-[130px] object-cover border-5 border-(--color-white) rounded-full shadow-(--pic-shadow)
         
         sm:w-[160px] sm:h-[160px]
         lg:w-[110px] lg:h-[110px]"
      />
      <div
        className="row-start-5 row-end-8 col-start-1 col-end-13 mt-[1em]
      
        sm:mt-[2em]
        lg:row-start-5 lg:self-center lg:text-[0.9rem] lg:col-end-11 lg:mt-[0.5em]"
      >
        <p>
          Didn't score any Ghibli tickets? No worries, you can also visit Sumida
          where you'll find Tokyo SkyTree (not to be confused with Tokyo Tower)
          and the Sumida Aquarium with lots of jellyfish and penguins!
        </p>
        <br />
        <p>
          Also nearby Tokyo SkyTree is a hidden cake in a can vending machine!
          See if you can find it!
        </p>
      </div>
      <div
        className="row-start-7 row-end-9 col-start-1 col-end-13 self-center flex
      justify-center lg:self-start
      
      sm:row-start-6
      lg:row-start-8 lg:row-end-10 lg:mt-[1em] lg:mb-[1em]"
      >
        <img
          src={store}
          alt="Akihabara Shopping Mall"
          className="object-cover w-[160px] h-[160px]
          
          sm:w-[200px] sm:h-[200px]
          lg:w-[120px] lg:h-[120px] mr-[1em]
          "
        />
        <img
          src={aquarium}
          alt="Sumida Aquarium"
          className="object-cover w-[160px] h-[160px]

          sm:w-[200px] sm:h-[200px]
          lg:w-[120px] lg:h-[120px]"
        />
      </div>
      <div
        className="row-start-9 row-end-10 col-start-1 col-end-13 self-center justify-self-center
      text-[0.75rem] bg-(--color-green) w-[370px] h-[100px] flex flex-col justify-center p-[1em] text-(--color-white)
      
      sm:row-start-8 sm:text-[0.9rem] sm:w-[400px]
      lg:col-end-12 lg:row-start-10 lg:row-end-11 lg:h-[60px] lg:w-[300px] lg:text-[0.7rem] lg:self-end lg:justify-self-start"
      >
        <p className="sm:mb-[-1em]">
          Left: Akihabara's Radio Kaikan Shopping Mall
        </p>
        <br />
        <p>Right: Sumida's Tokyo SkyTree Aquarium</p>
      </div>
    </div>
  );
};

export default Day4_part3;
