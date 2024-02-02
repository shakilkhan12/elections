import Image from "next/image";
import React from "react";
import { IoMdShare } from "react-icons/io";

const Table = () => {
  return (
    <div className="bg-white rounded-[16px] p-4">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="w-full bg-[#EDF1F3] h-[48px]">
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                Postion
              </th>
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                Condidate Name
              </th>
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                Pary
              </th>
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                Votes
              </th>
            </tr>
          </thead>
          <tbody className="mt-3">
            {[1, 2, 3, 4].map((result) => (
              <tr className="h-20 w-full">
                <td className="text-sm font-medium  text-black text-left  capitalize px-5">
                  {result}
                </td>
                <td className="flex h-20 items-center space-x-5">
                  <Image
                    src="/images/3.jfif"
                    width={34}
                    height={34}
                    className="rounded-full overflow-hidden"
                  />
                  <span className="text-xs uppercase font-semibold text-black">
                    Rashid Khan
                  </span>
                </td>

                <td className="text-sm font-medium  text-black text-left  capitalize px-5">
                  <div className="flex items-center space-x-3">
                    <Image src="/images/pti.png" width={34} height={34} />
                    <span>PTI</span>
                  </div>
                </td>
                <td className="text-sm font-medium  text-black text-left  capitalize px-5">
                  36000
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-t flex justify-between space-x-5 pt-4">
          <span className="text-sm font-medium text-black">
            Latest result 1/4/2024
          </span>
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-[#31B099] space-x-2">
              <IoMdShare className="text-[#31B099]" />
              <span className="text-sm font-medium capitalize text-[#31B099]">
                share
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
