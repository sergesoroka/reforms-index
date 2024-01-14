// @ts-nocheck
"use client";
import { fetcher } from "lib/fetcher";
import { useRouter } from "next/router";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import useSWR from "swr";

let max_data = 0;
let min_data = 0;

export default function AreaChartComp() {
  const { data, isLoading, isValidating } = useSWR(
    `https://api-reforms.ra-devs.tech/api/rounds/stats`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const { data: dataAxis, isLoading: isAxisLoading } = useSWR(
    `https://api-reforms.ra-devs.tech/api/rounds/stats-axis`,
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

  const uniqYears = [];
  const marksValue = [];

  const formattedData =
    data &&
    data.data.map((item) => {
      marksValue.push(item.mark);
      if (
        !uniqYears.includes(item.date_end.toString().substring(6)) &&
        item.date_end.toString().substring(6) !== ""
      ) {
        uniqYears.push(item.date_end.toString().substring(6));
      }
      return {
        date_end: item.date_end,
        date_start: item.date_start,
        id: item.id,
        mark: item.mark,
        number: item.number,
        year: item.date_end.toString().substring(6),
      };
    });

  const formattedPeriod = (startDate, endDate) => {
    let startDay = startDate && startDate.substring(0, 2);
    let endDay = endDate && endDate.substring(0, 2);

    let startMonth = startDate && startDate.substring(3, 5);
    let endMonth = endDate && endDate.substring(3, 5);

    let startYear = startDate && startDate.substring(6, 10);
    let endYear = endDate && endDate.substring(6, 10);

    if (startDay != endDate && startMonth != endMonth && startYear != endYear) {
      return (
        <span>
          {startDay.replace(/^0/, "")}.{startMonth}.{startYear}
          &nbsp;&ndash;&nbsp;{endDay.replace(/^0/, "")}.{endMonth}.{endYear}
        </span>
      );
    }
    if (startDay != endDate && startMonth != endMonth && startYear == endYear) {
      return (
        <span>
          {startDay.replace(/^0/, "")}.{startMonth}
          &nbsp;&ndash;&nbsp;{endDay.replace(/^0/, "")}.{endMonth}.{endYear}
        </span>
      );
    }
    if (startDay != endDate && startMonth == endMonth && startYear == endYear) {
      return (
        <span>
          {startDay.replace(/^0/, "")}
          &nbsp;&ndash;&nbsp;{endDay.replace(/^0/, "")}.{endMonth}.{endYear}
        </span>
      );
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white p-4">
          <p className="label text-[12px] text-gray-700 font-bold mb-1">{`${roundLabel}: ${payload[0].payload.number}`}</p>
          <p className="label text-[12px] mb-2 text-gray-600">{`${indexLabel}: ${payload[0].payload.mark}`}</p>
          <hr />
          <p className="label text-[11px] mt-2">
            {formattedPeriod(
              payload[0].payload.date_start,
              payload[0].payload.date_end
            )}
          </p>
        </div>
      );
    }
  };

  const CustomizedXAxisTick = ({ x, y, stroke, payload }) => {
    return (
      <g transform={`translate(${x + 30},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          fontSize="smaller"
        >
          {dataAxis['x'] && dataAxis['x'][payload.value]}
        </text>
      </g>
    );
  };

  return (
    <div className="font-small">
      {!isValidating && !isAxisLoading && (
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={data && formattedData}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            style={{ width: "100%", height: "100%" }}
          >
            <Area
              dataKey="mark"
              stroke="#e64e27"
              opacity={0.6}
              fillOpacity={0.1}
              fill="#e64e27"
            />
            <XAxis
              dataKey="number"
              ticks={
                dataAxis['x'] && Object.keys(dataAxis['x']).map((num) => parseInt(num))
              }
              tick={<CustomizedXAxisTick />}
            />
            <YAxis
              dataKey="mark"
              type="number"
              width={10}
              domain={['dataMin', 'dataMax']}
              ticks={dataAxis['y']}
              axisLine={false}
              tickLine={false}
              fontSize={"smaller"}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={0} stroke="red" opacity={0.4} />
            <ReferenceLine y={2} stroke="steelblue" opacity={0.4} />
            <CartesianGrid opacity={0.4} />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
