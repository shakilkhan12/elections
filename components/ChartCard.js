"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";
import { IoMdShare } from "react-icons/io";
import Link from "next/link";

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ["red", "blue", "green"];

export default function ChartCard({ item }) {
  return (
    <div className="bg-white rounded-[16px] p-6">
      <span className="block bg-[#31B099] px-4 py-3 text-center uppercase mb-4 text-white text-sm font-semibold">
        {item?.title}
      </span>
      <Stack direction="row" width="100%" textAlign="center" spacing={2}>
        <Box flexGrow={1}>
          <PieChart
            series={[
              {
                data: [
                  { value: 90, label: "pti", color: "#16a34a" },
                  { value: 15, label: "pmln", color: "#14532d" },
                  { value: 20, label: "anp", color: "red" },
                  { value: 10, label: "ppp", color: "black" },
                  { value: 5, label: "jui", color: "#404040" },
                  { value: 15, label: "ji", color: "#3b82f6" },
                ],
              },
            ]}
            {...pieParams}
          />
        </Box>
      </Stack>
      <div className="flex justify-between space-x-4 items-center mt-5">
        <span className="flex items-center text-[#31B099] space-x-2">
          <IoMdShare className="text-[#31B099]" />
          <span className="text-sm font-medium capitalize text-[#31B099]">
            share
          </span>
        </span>
        <Link
          href="#"
          className="text-sm capitalize text-[#31B099] hover:text-[#31B099] focus:text-[#31B099]"
        >
          show halqa wise result &rarr;
        </Link>
      </div>
    </div>
  );
}
