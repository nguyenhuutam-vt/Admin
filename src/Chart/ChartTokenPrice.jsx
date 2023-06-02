import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const ChartTokenPrice = ({ aspect }) => {
  const data = [
    {
      name: "12:00",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "1:00",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2:00",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "3:00",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "4:00",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "5:00",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "6:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" aspect={aspect}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal="3" vertical="" strokeDasharray="" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {/* <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          /> */}
          <Line type="monotone" dataKey="uv" stroke="#0a632c" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTokenPrice;
