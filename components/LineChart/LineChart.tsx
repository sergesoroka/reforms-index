// @ts-nocheck
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { format, parse, parseISO } from "date-fns";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

// https://vox-imore.ra-devs.tech/api/rounds/stats

// const xmas95 = new Date("1995-12-25T23:15:30");
// const fullYear = xmas95.getFullYear();

// console.log(fullYear); // 1995
import { dataWithYear } from "./dataYear";

export default function LineChartComp() {
  const { data, error } = useSWR(
    `https://vox-imore.ra-devs.tech/api/rounds/stats`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const formattedData =
    data &&
    data.data.map((item) => {
      return {
        date_end: item.date_end,
        id: item.id,
        mark: item.mark,
        number: item.number,
        year: item.date_end.toString().replace(/\d{2}-\d{2}-/, ""),
      };
    });

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white p-4">
          <p className="label text-[12px] text-gray-700 font-bold mb-1">{`Round: #${payload[0].payload.number}`}</p>
          <p className="label text-[12px] mb-2 text-gray-600">{`Оцінка: ${payload[0].payload.mark}`}</p>
          <hr />
          <p className="label text-[11px] mt-2">{`${payload[0].payload.date_end}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <LineChart
      width={1000}
      height={300}
      data={formattedData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Line type="monotone" dataKey="mark" stroke="#e64e27" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="year" />
      <YAxis dataKey="mark" />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
}
