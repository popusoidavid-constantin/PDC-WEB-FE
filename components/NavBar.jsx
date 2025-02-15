import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router";
import ScrollToButton from "./ScrollToButton";
const NavBar = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(() => {
      return location.pathname;
    });
  }, [currentPath, location.pathname]);

  return (
    <>
      <div className="border border-t-0 bg-[#14254b3c] border-b-rose-50 flex flex-col justify-center fixed top-0 left-0 w-full shadow-md z-50">
        <div className="w-100% flex flex-row align-center justify-center mt-3 mb-3 lg:mt-7 lg:mb-7">
          <div className=" w-[95%] flex flex-row items-center justify-between">
            <NavLink
              to={currentPath === "/" ? "/projects" : "/"}
              className=" bg-black text-amber-50 p-1 rounded text-[8px] text-center lg:p-2.5 lg:text-[15px] border"
            >
              {currentPath === "/" ? "OUR PROJECTS" : "BACK TO HOME"}
            </NavLink>

            <NavLink
              to="/"
              className="font-extrabold text-white text-[15px] lg:text-4xl"
            >
              PDC WEB SOLUTIONS
            </NavLink>
            <ScrollToButton
              className={
                " bg-black text-amber-50 text-[8px] p-1 rounded border-amber-50 lg:p-2.5 lg:text-[15px] border"
              }
              label={" CONTACT US!"}
              targetId={"contact-us"}
            ></ScrollToButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
