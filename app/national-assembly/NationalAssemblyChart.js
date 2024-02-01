"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { PieChart } from "@mui/x-charts/PieChart";

const pieParams = { height: 400, margin: { right: 5 } };
const palette = ["red", "blue", "green"];

export default function NationalAssemblyChart() {
  return (
    <>
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
    </>
  );
}
