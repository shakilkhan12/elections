import Image from "next/image";
import React from "react";
import { IoMdShare } from "react-icons/io";

const Table = () => {
  return (
    <div className="bg-white rounded-[16px] p-4">
      <div className="overflow-x-scroll">
        <table className="w-full">
          <thead>
            <tr className="w-full bg-[#EDF1F3] h-[48px]">
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                total seats
              </th>
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                272/272
              </th>
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                295/272
              </th>
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                128/278
              </th>
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                80/99
              </th>
              <th className="text-left text-[#6C7278] capitalize px-3 text-xs">
                50/51
              </th>
            </tr>
            <tr className="w-full bg-[#31B099] h-[48px]">
              <th className="text-left text-[white] capitalize px-5 text-xs">
                leading party
              </th>
              <th className="text-left text-[white] capitalize px-5 text-xs">
                NA
              </th>
              <th className="text-left text-[white] capitalize px-5 text-xs">
                PP
              </th>
              <th className="text-left text-[white] capitalize px-5 text-xs">
                PS
              </th>
              <th className="text-left text-[white] capitalize px-5 text-xs">
                KP
              </th>
              <th className="text-left text-[white] capitalize px-5 text-xs">
                PB
              </th>
            </tr>
          </thead>
          <tbody className="mt-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((result) => (
              <tr className="h-20 w-full">
                <td className="flex h-20 items-center space-x-5">
                  <Image src="/images/pti.png" width={44} height={35} />
                  <span className="text-sm uppercase font-semibold text-black">
                    PTI
                  </span>
                </td>
                <td className="text-sm font-medium  text-black text-left  capitalize px-5">
                  115
                </td>
                <td className="text-sm font-medium text-black px-5">45</td>
                <td className="text-sm font-medium text-black px-5">4543</td>
                <td className="text-sm font-medium text-black px-5">654</td>
                <td className="text-sm font-medium text-black px-5">89</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border-t flex justify-between space-x-5 pt-4">
          <span className="text-sm font-medium text-black">
            Based on Latest Polling Results
          </span>
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium capitalize text-[#31B099]">
              complete result
            </span>
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
