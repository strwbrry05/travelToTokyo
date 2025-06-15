import React, { useState, useRef, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
import "../index.css";

const NavBar = () => {
  const [isRotated, setIsRotated] = useState(false);
  const hitbox = useRef(null);

  const handleClick = () => {
    console.log(isRotated);
    setIsRotated(!isRotated);
  };

  // if clicked outside of the dropdown menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (hitbox.current && !hitbox.current.contains(e.target)) {
        console.log("hit outside!");
        setIsRotated(false);
      }
    };
    // bind event listener
    document.addEventListener("mousedown", handleClickOutside);

    // unbind on clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hitbox, isRotated]);

  return (
    // top menu w/ name
    <div
      ref={hitbox}
      className="text-(--color-white) text-lg font-bold font-(family-name:--font-text)"
    >
      <div className="sticky top-0 z-5 w-full p-[0.5em] shadow-(--my-shadow) md:hidden flex justify-center items-center text-center text-xl bg-(--color-red) ">
        <IoMenu
          className={isRotated ? "nav-rotated" : "nav-not-rotated"}
          onClick={handleClick}
        />
        <Link to="hero" smooth={true} className="cursor-pointer">
          <h1>travelToTokyo</h1>
        </Link>
      </div>

      {/* drop down menu */}
      <div
        ref={hitbox}
        className={`md:hidden ${
          isRotated
            ? "translate-y-[0vh] transform transition-all duration-500 ease-in-out"
            : "translate-y-[-100vh] transform transition-all duration-500 ease-in-out"
        }`}
      >
        {isRotated && (
          <ul
            className={`absolute z-3 bg-(--color-red) w-full p-[1em] text-center shadow-(--my-shadow)`}
          >
            <Link
              to="day1"
              smooth={true}
              activeClass="activeSmall"
              spy={true}
              className="cursor-pointer relative w-30 m-auto
              mb-[0.75em] 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>Day One</li>
            </Link>
            <Link
              to="day2"
              smooth={true}
              activeClass="activeSmallPlus"
              spy={true}
              className="cursor-pointer block w-30 m-auto
              mb-[0.75em]
                block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>Day Two</li>
            </Link>
            <Link
              to="day3"
              smooth={true}
              activeClass="activeSmallPlus"
              spy={true}
              className="cursor-pointer block w-30 m-auto
              mb-[0.75em]
                block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>Day Three</li>
            </Link>
            <Link
              to="day4"
              smooth={true}
              activeClass="activeSmallPlus"
              spy={true}
              className="cursor-pointer block w-30 m-auto
              mb-[0.75em]
                block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>Day Four</li>
            </Link>
            <Link
              to="day5"
              smooth={true}
              activeClass="activeSmallPlus"
              spy={true}
              className="cursor-pointer block w-30 m-auto
              mb-[0.75em]
                block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
            >
              <li>Day Five</li>
            </Link>
          </ul>
        )}
      </div>

      {/* bar menu across */}
      <ul
        className="hidden relative z-5 md:block bg-(--color-red) shadow-(--my-shadow) md:flex md:flex-row justify-evenly items-center 
        pl-[5em] pr-[5em] pt-[0.5em] pb-[0.5em]
        xl:pl-[10em] xl:pr-[10em]"
      >
        <Link
          to="day1"
          smooth={true}
          activeClass="active"
          spy={true}
          className="cursor-pointer inline-block relative after:content-['']
          after:w-[100%] after:h-[2px] after:bg-(--color-white)
          after:absolute after:bottom-0 after:left-0 
          
          after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
          after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-center"
        >
          <li>Day One</li>
        </Link>
        <Link
          to="day2"
          smooth={true}
          activeClass="active"
          offset={10}
          spy={true}
          className="cursor-pointer inline-block relative after:content-['']
          after:w-[100%] after:h-[2px] after:bg-(--color-white)
          after:absolute after:bottom-0 after:left-0 
          
          after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
          after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-center"
        >
          <li>Day Two</li>
        </Link>
        <Link
          to="day3"
          smooth={true}
          activeClass="active"
          spy={true}
          className="cursor-pointer inline-block relative after:content-['']
          after:w-[100%] after:h-[2px] after:bg-(--color-white)
          after:absolute after:bottom-0 after:left-0 
          
          after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
          after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-center"
        >
          <li>Day Three</li>
        </Link>
        <Link
          to="day4"
          smooth={true}
          activeClass="active"
          spy={true}
          className="cursor-pointer inline-block relative after:content-['']
          after:w-[100%] after:h-[2px] after:bg-(--color-white)
          after:absolute after:bottom-0 after:left-0 
          
          after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
          after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-center"
        >
          <li>Day Four</li>
        </Link>
        <Link
          to="day5"
          smooth={true}
          activeClass="active"
          spy={true}
          className="cursor-pointer inline-block relative after:content-['']
          after:w-[100%] after:h-[2px] after:bg-(--color-white)
          after:absolute after:bottom-0 after:left-0 
          
          after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
          after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-center"
        >
          <li>Day Five</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
