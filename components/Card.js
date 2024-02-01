import Image from "next/image";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";

const Card = ({ item }) => {
  return (
    <div className="bg-white rounded-[16px] p-5">
      <span className="capitalize text-base font-medium text-black block">
        National Assembly (NA)
      </span>
      <div className="flex items-center space-x-4 justify-between bg-[#EDF1F3] px-2 py-3 mt-3">
        <span className="capitalize text-sm font-medium text-[#6C7278]">
          party
        </span>
        <span className="capitalize text-sm font-medium text-[#6C7278]">
          seats
        </span>
      </div>
      {[1, 2, 3, 4, 5, 6, 7].map((item) => (
        <div className="flex items-center justify-between space-x-4 mt-4">
          <div className="flex items-center space-x-3 mb-6">
            <Image src="/images/pti.png" width={44} height={35} />
            <span className="text-sm uppercase font-semibold text-black">
              PTI
            </span>
          </div>
          <span className="text-sm font-medium text-[#2AAC95]">45</span>
        </div>
      ))}
      <div className="mt-5 bg-[#EDF1F3] flex justify-center space-x-3 px-3 py-3">
        <span className="text-sm font-semibold text-[#6C7278] ">129/150</span>
        <span className="font-medium text-[#6C7278] text-sm">
          (70% results)
        </span>
      </div>
      <span className="mt-5 font-bold text-base text-black capitalize block text-center">
        last updates
      </span>
      <span className="block mt-3 text-[#1A1C1E] text-[16px] text-center">
        Wed 31 Jan 2024 : 10:00 pm
      </span>
      <div className="flex justify-between space-x-4 items-center mt-5">
        <span className="flex items-center text-[#31B099] space-x-2">
          <IoMdShare className="text-[#31B099]" />
          <span className="text-sm font-medium capitalize text-[#31B099]">
            share
          </span>
        </span>
        <Link
          href="/national-assembly"
          className="text-sm capitalize text-[#31B099] hover:text-[#31B099] focus:text-[#31B099]"
        >
          view more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Card;
