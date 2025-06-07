import Day from "./components/Day";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Day1_part1 from "./components/Day1_part1";
import Day1_part2 from "./components/Day1_part2";
import Day2_part1 from "./components/Day2_part1";
import Day2_part2 from "./components/Day2_part2";

import "./index.css";

function App() {
  return (
    <>
      <div className="sticky top-0 w-full z-5">
        <NavBar />
      </div>
      <Hero />
      <div className="bg-(--color-white)">
        <Day firstHalf={<Day1_part1 />} secondHalf={<Day1_part2 />} />
        <Day firstHalf={<Day2_part1 />} secondHalf={<Day2_part2 />} />
      </div>
      <Faq />
      <Footer />
    </>
  );
}

export default App;
