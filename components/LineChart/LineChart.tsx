// @ts-nocheck
import { fetcher } from "lib/fetcher";
import { useRouter } from "next/router";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useSWR from "swr";

export default function LineChartComp() {
  const { data, error } = useSWR(
    `https://api-reforms.voxukraine.org/api/rounds/stats`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const router = useRouter();
  const { locale, pathname } = router;

  const indexLabel =
    locale == "en" ? "Index" : locale == "ru" ? "Индекс" : "Індекс";

  const roundLabel =
    locale == "en" ? "Round" : locale == "ru" ? "Раунд" : "Раунд";

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
          <p className="label text-[12px] text-gray-700 font-bold mb-1">{`${roundLabel}: ${payload[0].payload.number}`}</p>
          <p className="label text-[12px] mb-2 text-gray-600">{`${indexLabel}: ${payload[0].payload.mark}`}</p>
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
      margin={{ top: 0, right: 20, bottom: 5, left: 0 }}
      style={{ width: "100%", height: "100%" }}
    >
      <Line type="monotone" dataKey="mark" stroke="#e64e27" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 2" vertical={false} />
      <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
      <XAxis dataKey="year" tickCount={12} tickLine={false} />
      <YAxis
        dataKey="mark"
        type="number"
        domain={([dataMin, dataMax]) => [
          Math.round(dataMin) - 1,
          Math.round(dataMax),
        ]}
        axisLine={false}
        tickLine={false}
        tickCount={7}
      />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
}
