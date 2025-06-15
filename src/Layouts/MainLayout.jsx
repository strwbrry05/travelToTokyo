import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import GoogleMap from "../components/GoogleMap";
import Faq from "../components/Faq";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-scroll";

console.log(window.scrollY);

const MainLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 w-full z-5">
        <Navigation />
      </div>
      <Outlet />
      <GoogleMap />
      <Faq />
      <Link
        to="hero"
        smooth={true}
        className={`fixed bottom-10 cursor-pointer ${
          isVisible ? "block" : "hidden"
        } `}
      >
        <div>
          <ScrollToTop />
        </div>
      </Link>
      <Footer />
    </>
  );
};

export default MainLayout;
