// @ts-nocheck
"use client";
import * as d3 from "d3";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function LinePlot({ width, height }) {
  const { data, error } = useSWR(
    `https://api-reforms.ra-devs.tech/api/rounds/stats`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const uniqYears = [];

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

  let margin = {
    top: 10,
    right: 10,
    left: 30,
    bottom: 10,
  };
  let xScale =
    data &&
    d3
      .scaleLinear()
      .domain(d3.extent(data.data.map((d) => d.number)))
      .range([margin.left, width - margin.right]);

  let yScale =
    data &&
    d3
      .scaleLinear()
      .domain([-1, 5])
      .range([height - margin.bottom, margin.top]);

  let line =
    data &&
    d3
      .line()
      .x((d) => xScale(d.number))
      .y((d) => yScale(d.mark));
  let d = data && line(data.data);

  // console.log(data && yScale.ticks(17));

  return (
    <div>
      <svg className="" viewBox={`0 0 ${width} 240`}>
        {uniqYears.map((max, i) => (
          <g key={max} transform={`translate(${40 * i}, 0)`}>
            {i % 2 === 1 && <rect width="30" height={height} fill="#f3f3f3" />}
            <text
              fontSize={10}
              alignmentBaseline="middle"
              // textAnchor="middle"
              fill="currentColor"
              y={height + margin.bottom}
            >
              {max}
            </text>
          </g>
        ))}
        <path d={d} fill="none" stroke="currentColor" strokeWidth={0.5} />
        {data &&
          data.data.map((d) => (
            <circle
              key={d.mark}
              r="1"
              cx={xScale(d.number)}
              cy={yScale(d.mark)}
              fill="currentColor"
            />
          ))}
        {data &&
          yScale.ticks(5).map((max) => (
            <g
              transform={`translate(0, ${yScale(max)})`}
              key={max}
              className="text-gray-300"
            >
              <line
                x1={margin.left}
                x2={width - margin.right}
                stroke="currentColor"
                strokeWidth={0.4}
                opacity={0.4}
              />
              <text
                fontSize={10}
                alignmentBaseline="middle"
                // textAnchor="middle"
                fill="currentColor"
              >
                {max}
              </text>
            </g>
          ))}
        {/* {uniqYears.map((max, i) => (
          <g
            transform={`translate(${i * 45 + margin.left}, ${height + 10})`}
            key={max}
          >
            {i % 2 === 1 && <rect width="20" height="150" fill="#ccc" />}

            <text fontSize={10} alignmentBaseline="middle" fill="#ccc">
              {max}
            </text>
          </g>
        ))} */}
      </svg>
    </div>
  );
}
