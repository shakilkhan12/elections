"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white w-full py-20 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h1 className="text-xl font-semibold text-black mb-3"> E Result</h1>
            <p className="mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique consequatur sequi inventore fugiat a perspiciatis odit
              maiores aperiam cum harum? Magnam dolore obcaecati, earum natus
              cumque blanditiis. Ut, adipisci nesciunt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <strong>Home</strong>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
            </div>
            <div>
              <strong>About us</strong>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
            </div>
            <div>
              <strong>Contact us</strong>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
              <Link
                href="/"
                className="capitalize text-sm font-medium text-zinc-700 hover:text-black focus:text-black mt-2 block"
              >
                NA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
