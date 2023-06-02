import React from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Bank  $4,567,890.12",
    uv: 4567890.12,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "Token $4,567,890.12",
    uv: 4567890.12,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "Stock $567,890.12",
    uv: 567890.12,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "Cash $67,890.12",
    uv: 67890.12,
    pv: 9800,
    fill: "#82ca9d",
  },
];

const style = {
  top: 50,
  left: 350,
  lineHeight: "24px",
};

const ChartMoneyAllocation = ({ aspect }) => {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={50}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="bottom"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
};

export default ChartMoneyAllocation;
