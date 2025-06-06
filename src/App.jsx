import Day1 from "./components/Day1";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <>
      <div className="sticky top-0 w-full z-5">
        <NavBar />
      </div>
      <Hero />
      <Day1 />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
