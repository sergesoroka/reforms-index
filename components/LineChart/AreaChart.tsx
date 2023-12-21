// @ts-nocheck
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
} from "recharts";
import { useRouter } from "next/router";
import { format, parse, parseISO } from "date-fns";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function AreaChartComp() {
  const { data, error } = useSWR(
    `https://vox-imore.ra-devs.tech/api/rounds/stats`,
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
  const formattedData =
    data &&
    data.data.map((item) => {
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

  // const formmatedDate = (str) =>
  //   str.replace(/\-/g, ".").replace(/^0/, "").replace(".0", ".");

  const formattedPeriod = (startDate, endDate) => {
    let startDay = startDate && startDate.substring(0, 2);
    let endDay = endDate && endDate.substring(0, 2);

    let startMonth = startDate && startDate.substring(3, 5);
    let endMonth = endDate && endDate.substring(3, 5);

    let startYear = startDate && startDate.substring(6, 10);
    let endYear = endDate && endDate.substring(6, 10);

    if (startDay != endDate && startMonth != endMonth && startYear != endYear) {
      return (
        <div>
          <span>
            {startDay.replace(/^0/, "")}.{startMonth}.{startYear}
            &nbsp;&ndash;&nbsp;{endDay.replace(/^0/, "")}.{endMonth}.{endYear}
          </span>
        </div>
      );
    }
    if (startDay != endDate && startMonth != endMonth && startYear == endYear) {
      return (
        <div>
          <span>
            {startDay.replace(/^0/, "")}.{startMonth}
            &nbsp;&ndash;&nbsp;{endDay.replace(/^0/, "")}.{endMonth}.{endYear}
          </span>
        </div>
      );
    }
    if (startDay != endDate && startMonth == endMonth && startYear == endYear) {
      return (
        <div>
          <span>
            {startDay.replace(/^0/, "")}
            &nbsp;&ndash;&nbsp;{endDay.replace(/^0/, "")}.{endMonth}.{endYear}
          </span>
        </div>
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
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={formattedData}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
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
            dataKey="year"
            tickLine={false}
            // tickFormatter={(str) => {
            //   return str.substring(6);
            // }}
          />
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
          <CartesianGrid opacity={0.4} />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-between ml-10 mt-[-26px] px-8 lg:text-[14px] text-[12px]">
        {uniqYears.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
}
