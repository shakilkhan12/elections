"use client";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-[#1C2026] w-full h-20 relative">
      <div className="max-w-screen-xl px-4 w-full mx-auto flex items-center justify-between h-20 ">
        <Link
          href="/"
          className="text-white text-lg font-medium hover:text-white focus:text-white"
        >
          E Result
        </Link>
        {/* mobile */}
        {toggle && (
          <ul className="z-[999999] flex lg:hidden flex-col items-center  absolute left-0 top-full bg-white w-full">
            <Link
              className=" px-4 py-3 text-sm font-medium capitalize text-black hover:bg-zinc-600 hover:text-zinc-200 block w-full"
              href="/"
            >
              NA
            </Link>
            <Link
              className=" px-4 py-3 text-sm font-medium capitalize text-black hover:bg-zinc-600 hover:text-zinc-200 block w-full"
              href="/"
            >
              punjab
            </Link>
            <Link
              className=" px-4 py-3 text-sm font-medium capitalize text-black hover:bg-zinc-600 hover:text-zinc-200 block w-full"
              href="/"
            >
              sindh
            </Link>
            <Link
              className=" px-4 py-3 text-sm font-medium capitalize text-black hover:bg-zinc-600 hover:text-zinc-200 block w-full"
              href="/"
            >
              KP
            </Link>
            <Link
              className=" px-4 py-3 text-sm font-medium capitalize text-black hover:bg-zinc-600 hover:text-zinc-200 block w-full"
              href="/"
            >
              BAL
            </Link>
            <Link
              className=" px-4 py-3 text-sm font-medium capitalize text-black hover:bg-zinc-600 hover:text-zinc-200 block w-full"
              href="/"
            >
              about us
            </Link>
          </ul>
        )}
        <ul className="hidden lg:flex items-center space-x-5">
          <Link
            className="text-white bg-zinc-600 px-3 py-1 rounded-lg font-base capitalize hover:text-zinc-200 focus:text-zinc-200 font-medium"
            href="/"
          >
            home
          </Link>
          <Link
            className="text-zinc-400 font-base capitalize hover:text-zinc-200 focus:text-zinc-200 font-medium"
            href="/"
          >
            NA
          </Link>
          <Link
            className="text-zinc-400 font-base capitalize hover:text-zinc-200 focus:text-zinc-200 font-medium"
            href="/"
          >
            punjab
          </Link>
          <Link
            className="text-zinc-400 font-base capitalize hover:text-zinc-200 focus:text-zinc-200 font-medium"
            href="/"
          >
            sindh
          </Link>
          <Link
            className="text-zinc-400 font-base capitalize hover:text-zinc-200 focus:text-zinc-200 font-medium"
            href="/"
          >
            KP
          </Link>
          <Link
            className="text-zinc-400 font-base capitalize hover:text-zinc-200 focus:text-zinc-200 font-medium"
            href="/"
          >
            BAL
          </Link>
          <Link
            className="text-zinc-400 font-base capitalize hover:text-zinc-200 focus:text-zinc-200 font-medium"
            href="/"
          >
            about us
          </Link>
        </ul>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-[#31B099] text-sm font-medium capitalize"
          >
            login
          </Link>
          <Link
            href="/login"
            className="bg-[#31B099] text-white py-3 px-7 rounded-[36px] text-sm font-medium capitalize"
          >
            sign up
          </Link>
        </div>
        <GiHamburgerMenu
          className="block md:hidden text-white cursor-pointer !text-[20px]"
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </nav>
  );
};

export default Nav;
