import Image from "next/image";
import NationalAssemblyChart from "./NationalAssemblyChart";
import { IoMdShare } from "react-icons/io";

const Summary = () => {
  return (
    <div className="bg-white rounded-[16px] p-8">
      <h1 className="text-[1C2026] text-xl font-semibold capitalize">
        NA Election Summary
      </h1>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-8">
          {[1, 2, 3, 4, 5, 5].map((item) => (
            <div className="flex items-center space-x-3">
              <Image src="/images/pti.png" width={44} height={35} />
              <div className="flex-1">
                <span className="block font-bold text-base text-black uppercase">
                  PTI
                </span>
                <span className="block text-xs font-medium text-black">
                  30 Seats
                </span>
              </div>
            </div>
          ))}
        </div>
        <NationalAssemblyChart />
      </div>
      <div className="mt-20 flex items-center space-x-6 justify-end">
        <h2 className="text-lg font-bold">Major Target: 137</h2>
        <span className="flex items-center text-[#31B099] space-x-2">
          <IoMdShare className="text-[#31B099]" />
          <span className="text-sm font-medium capitalize text-[#31B099]">
            share
          </span>
        </span>
      </div>
    </div>
  );
};

export default Summary;
