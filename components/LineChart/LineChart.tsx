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
const data = [
  { name: "2015", rating: 5.0, pv: 2100, amt: 5200 },
  { name: "2016", rating: 1.2, pv: 2100, amt: 3200 },
  { name: "2014", rating: 4.1, pv: 2400, amt: 2400 },
  { name: "2017", rating: 5.0, pv: 2100, amt: 1200 },
  { name: "2018", rating: 4.2, pv: 2100, amt: 800 },
  { name: "2019", rating: -1.1, pv: 2400, amt: 2400 },
  { name: "2020", rating: 4.1, pv: 2100, amt: 5200 },
  { name: "2021", rating: -2.0, pv: 2100, amt: 3200 },
  { name: "2022", rating: 2.2, pv: 2100, amt: 1200 },
  { name: "2023", rating: 4.0, pv: 2100, amt: 800 },
];

export default function LineChartComp() {
  return (
    <LineChart
      width={1000}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Line type="monotone" dataKey="rating" stroke="#FFBC00" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" style={{ fontSize: "0.8rem" }} />
      <YAxis dataKey="rating" style={{ fontSize: "0.8rem" }} />
      <Tooltip />
    </LineChart>
  );
}
