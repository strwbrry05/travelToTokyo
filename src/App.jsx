import Day1_part1 from "./components/Day1_part1";
import Day2_part1 from "./components/Day2_part1";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

import "./index.css";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
