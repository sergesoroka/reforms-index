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

const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload);

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-4">
        <p className="label text-[12px] text-red-700 font-bold mb-1">{`Round: #${label}`}</p>
        <p className="label text-[12px] mb-2">{`${payload[0].payload.date_round}`}</p>
        <hr />

        <p className="label text-[12px] mt-2">{`i1: ${payload[0].payload.i1}`}</p>
        <p className="label text-[12px]">{`i2: ${payload[0].payload.i2}`}</p>
        <p className="label text-[12px]">{`i3: ${payload[0].payload.i3}`}</p>
        <p className="label text-[12px]">{`i4: ${payload[0].payload.i4}`}</p>
        <p className="label text-[12px]">{`i5: ${payload[0].payload.i5}`}</p>
        <p className="label text-[12px]">{`i6: ${payload[0].payload.i6}`}</p>
        <hr />
        <p className="label text-[12px] mt-2 text-green-600">{`Total: ${payload[0].payload.total}`}</p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

export default function LineChartComp() {
  return (
    <LineChart
      width={1000}
      height={300}
      data={lineChartAllData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Line type="monotone" dataKey="total" stroke="#e64e27" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="id_round" style={{ fontSize: "0.8rem" }} />
      <YAxis dataKey="total" style={{ fontSize: "0.8rem" }} />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
}
