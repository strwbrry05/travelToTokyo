import React from "react";
import hero1 from "../assets/images/hero1.svg";
import hero2 from "../assets/images/hero2.svg";
import redStar from "../assets/images/red-star.svg";
import yellowCircle from "../assets/images/yellow-circle.svg";
import seeMore from "../assets/images/hero_seeMore.svg";
import redSpiky from "../assets/images/red-spiky-star.svg";
import greenStar from "../assets/images/green-star.svg";
import heroLink from "../assets/images/hero_spiky_sticker.svg";

const Hero = () => {
  return (
    <div
      className="grid grid-cols-6 grid-rows-12
    md:grid md:grid-cols-12 md:grid-rows-12"
    >
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
      font-(family-name:--font-titles) text-(--color-white)  self-start text-end mr-[0.25em]
      
      text-[4rem] text-base/18 mr-[0.5em] sm:text-[5rem] sm:text-base/25 sm:mr-[0.75em]
      
      md:row-start-4 md:row-end-6 md:col-start-6 md:col-end-13 md:text-[3.5rem] md:leading-none 
      md:self-center md:justify-self-center
      
      lg:text-[4.25rem] xl:text-[5.5rem]"
      >
        Tokyo, Japan
      </h2>
      <h2
        className="z-1 row-start-2 row-end-5 col-start-1 col-end-3 text-center m-auto
      font-(family-name:--font-headings) text-(--color-white) font-medium
     
      text-[5rem] text-base/20 sm:text-[6rem] sm:text-base/30

      md:row-start-2 md:row-end-10 md:col-start-1 md:col-end-4 md:text-[10rem] 
      md:text-base/45 md:self-center md:justify-self-center
      
      lg:text-[11rem] lg:text-base/50"
      >
        東 <br></br> 京
      </h2>

      <div
        className="z-1 row-start-12 row-end-10 col-start-7 col-end-5 rotate-270 text-start self-end place-self-end
      scale-125
       
      
      md:rotate-0 md:scale-100 md:row-start-11 md:row-end-13 md:col-start-1 md:col-end-5 
      md:self-end md:justify-self-start md:ml-[2em]"
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
        text-[1.5rem] sm:text-[1.75rem] md:text-[2.5rem] "
        >
          tokyo japan
        </p>
      </div>

      <div
        className="z-1 row-start-2 row-end-4 col-start-5 col-end-7
      grid grid-cols-2 grid-rows-2
      
      md:row-start-1 md:row-end-4 md:col-start-10 md:col-end-13
      "
      >
        <img
          src={redStar}
          alt=""
          className="z-2 row-start-1 row-end-3 col-start-1 col-end-3 
          self-center justify-self-center mr-[2.5em] mt-[2.5em] 
          md:mr-[0] md:mt-[4em]
          
          "
        />
        <img
          src={yellowCircle}
          alt=""
          className="z-1 col-start-1 col-end-3 row-start-1 row-end-3 
          
          self-start justify-self-end mt-[2em] mr-[2em]
          xl:mr-[4em]"
        />
      </div>

      <img
        src={seeMore}
        alt=""
        className="z-1 row-start-11 row-end-13 col-start-3 col-end-5 self-end justify-self-center
        sm:w-[130px]
        md:row-start-10 md:row-end-13 md:col-start-6 md:col-end-8
        "
      />

      <img
        src={redSpiky}
        alt=""
        className="hidden md:inline 
        z-0 md:row-start-1 md:row-end-10 md:col-start-2 md:col-end-4 opacity-70"
      />
      <img
        src={greenStar}
        alt=""
        className="hidden md:inline 
        z-0 md:row-start-2 md:row-end-10 md:col-start-3 md:col-end-5 opacity-70"
      />

      <a
        href=""
        className="hidden md:block 
        z-0 md:row-start-6 md:row-end-10 md:col-start-8 md:col-end-11 lg:w-[255px]"
      >
        <img src={heroLink} alt="" />
      </a>
    </div>
  );
};

export default Hero;
