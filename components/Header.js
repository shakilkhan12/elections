"use client";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-[#1C2026]">
      <div className="h-[520px] flex items-center max-w-screen-xl mx-auto px-4">
        <div className="w-full lg:w-[850px]">
          <h1 className="text-white text-3xl md:text-[48px] font-semibold">
            Election 2024 Summary
          </h1>
          <p className="text-white text-base mt-3">
            Lorem ipsum dolor sit amet consectetur. Vitae tincidunt arcu nisl
            non quam sollicitudin suspendisse non mauris. Ornare sapien egestas
            ultrices tortor sit proin rhoncus..
          </p>
          <div className="flex flex-wrap items-center lg:space-x-4 mt-10">
            <div className="flex-1 relative">
              <CiSearch className="absolute top-[30%] left-5 text-[24px] text-white" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search by Halqa (For example NA1), Distrct"
                className="w-full outline-none pl-12 pr-7 text-white bg-[#333E4E]  h-[60px] rounded-full placeholder:text-[#D8D8D8] placeholder:text-sm placeholder:font-medium"
              />
            </div>
            <button className="h-[60px] block lg:inline-block w-full lg:w-auto mt-4 lg:mt-0 bg-white rounded-full px-8 capitalize text-base font-medium text-black">
              search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
