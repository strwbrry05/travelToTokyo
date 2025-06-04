import React, { useState, useRef, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
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
        setIsRotated(!isRotated);
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
      <div className="relative z-5 p-[0.5em] shadow-(--my-shadow) md:hidden flex justify-center items-center text-center text-xl bg-(--color-red) ">
        <IoMenu
          className={isRotated ? "nav-rotated" : "nav-not-rotated"}
          onClick={handleClick}
        />
        <h1>travelToTokyo</h1>
      </div>

      {/* drop down menu */}
      <div
        ref={hitbox}
        className={`relative z-4 md:hidden bg-(--color-red) p-[0.5em] shadow-(--my-shadow)   ${
          isRotated
            ? "translate-y-[0vh] transition transform duration-600 ease-in-out"
            : "translate-y-[-100vh] transition duration-200 ease-in-out"
        }`}
      >
        {isRotated && (
          <ul className="p-[1em] text-center">
            <a href="" className="block w-30 m-auto">
              <li
                className="mb-[0.75em] 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                Day One
              </li>
            </a>
            <a href="" className="block w-30 m-auto">
              <li
                className="mb-[0.75em] 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                Day Two
              </li>
            </a>
            <a href="" className="block w-30 m-auto">
              <li
                className="mb-[0.75em] 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                Day Three
              </li>
            </a>
            <a href="" className="block w-30 m-auto">
              <li
                className="mb-[0.75em] 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                Day Four
              </li>
            </a>
            <a href="" className="block w-30 m-auto">
              <li
                className=" 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
              >
                Day Five
              </li>
            </a>
          </ul>
        )}
      </div>

      {/* bar menu across */}
      <ul
        className="hidden relative z-5 md:block bg-(--color-red) shadow-(--my-shadow) md:flex md:flex-row justify-evenly items-center 
        pl-[5em] pr-[5em] pt-[0.5em] pb-[0.5em]
        xl:pl-[10em] xl:pr-[10em]"
      >
        <a href="">
          <li
            className=" 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
          >
            Day One
          </li>
        </a>
        <a href="">
          <li
            className=" 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
          >
            Day Two
          </li>
        </a>
        <a href="">
          <li
            className=" 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
          >
            Day Three
          </li>
        </a>
        <a href="">
          <li
            className=" 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
          >
            Day Four
          </li>
        </a>
        <a href="">
          <li
            className=" 
                inline-block relative
                after:content-[''] after:w-[100%] after:h-[2px] after:bg-(--color-white)
                after:absolute after:bottom-0 after:left-0 

                after:origin-bottom-center after:transition-transform after:duration-300 after:ease-in-out
                after:scale-x-0

                hover:after:scale-x-100 hover:after:origin-bottom-center"
          >
            Day Five
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
