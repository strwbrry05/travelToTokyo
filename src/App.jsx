import Day from "./components/Day";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Day1_part1 from "./components/Day1_part1";
import Day1_part2 from "./components/Day1_part2";
import Day2_part1 from "./components/Day2_part1";
import Day2_part2 from "./components/Day2_part2";
import Day3_part1 from "./components/Day3_part1";
import Day3_part2 from "./components/Day3_part2";
import Day4_part1 from "./components/Day4_part1";
import Day4_part2 from "./components/Day4_part2";
import Day4_part3 from "./components/Day4_part3";
import Day5_part1 from "./components/Day5_part1";
import Day5_part2 from "./components/Day5_part2";
import "./index.css";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <>
      <div className="sticky top-0 w-full z-5">
        <NavBar />
      </div>
      <Hero />
      <div className="bg-(--color-white) overflow-x-hidden">
        <Day firstHalf={<Day1_part1 />} secondHalf={<Day1_part2 />} />
        <Day
          firstHalf={<Day2_part1 />}
          leftPercent={60}
          secondHalf={<Day2_part2 />}
          rightPercent={40}
        />
        <Day firstHalf={<Day3_part1 />} secondHalf={<Day3_part2 />} />
        <Day
          firstHalf={<Day4_part1 />}
          secondHalf={<Day4_part2 />}
          thirdHalf={<Day4_part3 />}
          isThird={true}
        />
        <Day
          firstHalf={<Day5_part1 />}
          leftPercent={45}
          secondHalf={<Day5_part2 />}
          rightPercent={55}
        />
      </div>
      <GoogleMap />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
