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
      <Footer />
    </>
  );
}

export default App;
