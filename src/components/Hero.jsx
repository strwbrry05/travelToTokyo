import React from "react";
import hero1 from "../assets/images/hero1.svg";
import hero2 from "../assets/images/hero2.svg";
import redStar from "../assets/images/red-star.svg";
import yellowCircle from "../assets/images/yellow-circle.svg";

const Hero = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-12">
      <div
        className=" col-span-full row-span-full
        flex flex-col
        md:flex-row md:h-[80vh] md:w-[100%] "
      >
        <img
          src={hero1}
          alt="tokyo background"
          className="md:w-[60%] object-cover brightness-50"
        />
        <img
          src={hero2}
          alt="shibuya background"
          className="md:w-[40%] object-cover brightness-50 "
        />
      </div>
      <h2
        className="z-1 row-start-6 row-end-9 col-start-3 col-end-7
      font-(family-name:--font-titles) text-(--color-white) text-[4em] text-base/15 self-start text-end mr-[0.25em]
      sm:bg-red-800 md:bg-blue-800"
      >
        Tokyo, Japan
      </h2>
      <h2
        className="z-1 row-start-2 row-end-5 col-start-1 col-end-3 text-center text-[5em]/20 m-auto
      font-(family-name:--font-headings) text-(--color-white) font-medium"
      >
        東 <br></br> 京
      </h2>

      <div
        className="z-1 row-start-12 row-end-10 col-start-7 col-end-5 rotate-270 text-start self-end place-self-end
      scale-125"
      >
        <p
          className="
          font-(family-name:--font-headings) font-medium text-(--color-white) 
           text-[1.25rem] "
        >
          JUNE 2025
        </p>
        <p
          className="
        font-(family-name:--font-barcode) font-medium text-(--color-white)
        text-[1.5rem]"
        >
          tokyo japan
        </p>
      </div>

      <div
        className="z-1 row-start-2 row-end-4 col-start-5 col-end-7
      grid grid-cols-2 grid-rows-2"
      >
        <img
          src={redStar}
          alt=""
          className="z-2 row-start-1 row-end-3 col-start-1 col-end-3 self-end justify-self-start"
        />
        <img
          src={yellowCircle}
          alt=""
          className="z-1 col-start-1 col-end-3 row-start-1 row-end-3 self-start justify-self-end"
        />
      </div>
    </div>
  );
};

export default Hero;
