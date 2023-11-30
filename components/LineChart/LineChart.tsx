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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-4">
        <p className="label">{`Round: ${label}`}</p>
        <p className="label">{`Total: ${payload[0].value}`}</p>
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
      data={lineChartData}
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
