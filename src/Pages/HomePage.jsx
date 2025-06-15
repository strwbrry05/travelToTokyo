import React from "react";
import Day from "../components/Day";
import Hero from "../components/Hero.jsx";
import Day1_part1 from "../components/Day1_part1";
import Day1_part2 from "../components/Day1_part2";
import Day2_part1 from "../components/Day2_part1";
import Day2_part2 from "../components/Day2_part2";
import Day3_part1 from "../components/Day3_part1";
import Day3_part2 from "../components/Day3_part2";
import Day4_part1 from "../components/Day4_part1";
import Day4_part2 from "../components/Day4_part2";
import Day4_part3 from "../components/Day4_part3";
import Day5_part1 from "../components/Day5_part1";
import Day5_part2 from "../components/Day5_part2";
import { Element } from "react-scroll";

const HomePage = () => {
  return (
    <>
      <Element name="hero">
        <Hero />
      </Element>
      <div className="bg-(--color-white) overflow-x-hidden">
        <Element name="day1">
          <Day firstHalf={<Day1_part1 />} secondHalf={<Day1_part2 />} />
        </Element>
        <Element name="day2">
          <Day
            firstHalf={<Day2_part1 />}
            leftPercent={60}
            secondHalf={<Day2_part2 />}
            rightPercent={40}
          />
        </Element>
        <Element name="day3">
          <Day firstHalf={<Day3_part1 />} secondHalf={<Day3_part2 />} />{" "}
        </Element>
        <Element name="day4">
          <Day
            firstHalf={<Day4_part1 />}
            secondHalf={<Day4_part2 />}
            thirdHalf={<Day4_part3 />}
            isThird={true}
          />
        </Element>
        <Element name="day5">
          <Day
            firstHalf={<Day5_part1 />}
            leftPercent={45}
            secondHalf={<Day5_part2 />}
            rightPercent={55}
          />
        </Element>
      </div>
    </>
  );
};

export default HomePage;
