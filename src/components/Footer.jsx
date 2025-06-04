import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="flex flex-col 
    pt-[2em] pb-[1em] bg-(--color-red) text-(--color-white) text-center
    md:flex-row md:justify-between md:items-center"
    >
      <div
        className="mb-[2em]
        md:ml-[5em] md:mt-[1em]"
      >
        <h2 className="font-(family-name:--font-titles)  text-3xl uppercase md:text-4xl">
          strwbrry05
        </h2>
        <div className="flex justify-center mt-[1em] mb-[0.5em]">
          <a href="">
            <FiGithub
              className="text-5xl bg-(--color-yellow) text-(--color-red) 
          border-4 border-(--color-white) p-1 mr-[0.25em] shadow-md/100 stroke-[2.5]"
            />
          </a>
          <a href="">
            <FiLinkedin
              className="text-5xl bg-(--color-yellow) text-(--color-red) 
          border-4 border-(--color-white) p-1 mr-[0.25em] shadow-md/100 stroke-[2.5]"
            />
          </a>
          <a href="">
            <FaRegHeart
              className="text-5xl bg-(--color-yellow) text-(--color-red)
          border-4 border-(--color-white) p-1 shadow-md/100 stroke-[3]"
            />
          </a>
        </div>
        <p
          className="font-(family-name:--font-text) font-light
        md:text-sm md:mt-[1em]"
        >
          &copy; 2025 Jacqueline Molina
        </p>
      </div>

      <div className="md:mr-[1em] md:transform md:rotate-270">
        <p className="font-(family-name:--font-text) font-light">
          $19.02 USD | $15.03 MXN
        </p>
        <p className="font-(family-name:--font-barcode) text-5xl lowercase">
          the end
        </p>
      </div>
    </div>
  );
};

export default Footer;
