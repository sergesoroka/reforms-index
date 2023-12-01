// @ts-nocheck
import {
  LineChart,
  Line,
  Bar,
  BarChart,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { lineChartData } from "./data";
import { lineChartAllData } from "./all_data";
import { dataWithYear } from "./dataYear";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-4">
        <p className="label text-[12px] text-gray-700 font-bold mb-1">{`Round: #${payload[0].payload.id_round}`}</p>
        <p className="label text-[12px] mb-2 text-gray-600">{`Оцінка: ${payload[0].payload.total}`}</p>
        <hr />
        <p className="label text-[11px] mt-2">{`${payload[0].payload.date_round}`}</p>
      </div>
    );
  }

  return null;
};

function formatYAxis(value) {
  if (value === "2022") return "No";
  if (value === 1) return "Yes";
  return value;
}

export default function LineChartComp() {
  return (
    <LineChart
      width={1000}
      height={300}
      data={dataWithYear}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Line type="monotone" dataKey="total" stroke="#e64e27" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis
        dataKey="year"
        style={{ fontSize: "0.8rem" }}
        // tickFormatter={formatYAxis}
        // type="number"
        // ticks={[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]}
        // domain={[2015, 2023]}
      />
      <YAxis dataKey="total" style={{ fontSize: "0.8rem" }} />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
}
