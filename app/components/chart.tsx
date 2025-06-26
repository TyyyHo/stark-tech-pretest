"use client";

import { Box } from "@mui/material";
import {
  ChartContainer,
  BarPlot,
  LinePlot,
  ChartsXAxis,
  ChartsYAxis,
  ChartsAxisHighlight,
  LineHighlightPlot,
  ChartsTooltip,
} from "@mui/x-charts";

type ChartProps = {
  xAxisData: string[];
  barData: number[];
  lineData: number[];
};

export default function Chart({ xAxisData, barData, lineData }: ChartProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 350,
      }}
    >
      <ChartContainer
        height={350}
        series={[
          {
            type: "bar",
            yAxisId: "revenue",
            label: "每月營收",
            color: "#E8AF00",
            data: barData,
          },
          {
            type: "line",
            yAxisId: "growthRate",
            label: "單月營收成長率",
            color: "#CB4B4B",
            data: lineData,
          },
        ]}
        xAxis={[
          {
            id: "year-month",
            scaleType: "band",
            data: xAxisData,
            height: 45,
          },
        ]}
        yAxis={[
          {
            id: "revenue",
            label: "千元",
            valueFormatter: (value: number) => (value / 1000).toLocaleString(),
            width: 100,
            scaleType: "linear",
            position: "left",
          },
          {
            id: "growthRate",
            label: "%",
            scaleType: "linear",
            position: "right",
          },
        ]}
      >
        <BarPlot />
        <LinePlot />

        <LineHighlightPlot />
        <ChartsAxisHighlight x="line" />
        <ChartsTooltip />

        <ChartsXAxis axisId="year-month" />
        <ChartsYAxis label="千元" axisId="revenue" />
        <ChartsYAxis label="%" axisId="growthRate" />
      </ChartContainer>
    </Box>
  );
}
//
