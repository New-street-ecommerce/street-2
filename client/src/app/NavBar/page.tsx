import React from "react";
import Link from "next/link";
import { FaSearch, FaHome, FaBook, FaChartBar } from "react-icons/fa";
import ExploreDropDown from "./ExploreDropDown";

const NavBar = () => {
  return (
    <header className="navbar w-full">
      <div className="container flex items-center flex-col md:flex-row">
        <div className="flex items-center mt-4 md:mt-0 mb-4 md:mb-0 md:ml-4 py-8">
          <Link
            href="/"
            className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-2xl md:text-4xl tracking-[0] leading-[normal] whitespace-nowrap"
          >
            Urban Vibe
          </Link>
        </div>

        <div className="relative ml-5 md:ml-10 md:mr-12">
          <input
            type="text"
            placeholder="Search Items, Fashion, Collection and Users"
            className="w-full md:w-[390px] h-[36px] sm:h-[48px] rounded-[18px] border-[0.5px] border-solid border-[#ffffff80] bg-transparent pl-10 pr-8 text-white"
          />
          <FaSearch className="text-white absolute right-3 mt-[-30px] hrefp-3.5" />
        </div>

        <div className="flex items-center mt-4 md:mt-0 md:ml-8 md:mr-4">
          <Link
            href={"/"}
            className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] whitespace-nowrap hover:text-gray-300 flex items-center"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
        </div>

        {/* Uncomment this section if you want to add a dropdown */}
        {/* <div className="flex items-center mt-4 md:mt-0  md:ml-4 md:mr-4 ">
          <ExploreDropDown />
        </div> */}

        <div className="flex items-center mt-4 md:mt-0 md:ml-20 md:mr-4">
          <Link
            href={"/PersonalCollection"}
            className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] whitespace-nowrap hover:text-gray-300 flex items-center"
          >
            <FaBook className="mr-2" />
            Personal Collection
          </Link>
        </div>

        {/* Uncomment this section if you want to add a link to "Drops" */}
        {/* <div className="flex items-center mt-4 md:mt-0  md:ml-4 md:mr-4">
          <Link
            href={"/Drops"}
            className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] whitespace-nowrap hover:text-gray-300 flex items-center"
          >
            <FaIconName className="mr-2" />
            Drops
          </Link>
        </div> */}

        <div className="flex items-center mt-4 md:mt-0 md:ml-20 md:mr-4">
          <Link
            href={"/Aboutus"}
            className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] whitespace-nowrap hover:text-gray-300 flex items-center"
          >
            <FaBook className="mr-2" />
            More
          </Link>
        </div>

        {/* Uncomment this section if you want to add a link to the "Cart" component */}
        {/* <div>
          <Cart />
        </div> */}

        {/* Uncomment this section if you want to add a dropdown for the user profile */}
        {/* <div className="flex items-center mt-4 md:mt-0 md:ml-4 md:mr-4">
          <DropDownProfile />
        </div> */}

        <div className="flex items-center mt-4 md:mt-0 md:ml-[70px] md:mr-4">
          <Link
            href={"/Stats"}
            className="[font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-white text-base md:text-lg tracking-[0] leading-[normal] whitespace-nowrap hover:text-gray-300 flex items-center"
          >
            <FaChartBar className="mr-2" />
            Stats
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
