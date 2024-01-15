import { useEffect, useRef } from "react";
import * as d3 from "d3";

const data = [
  {
    id: 1,
    month: "Січень",
    goverment: 25,
    finances: 41,
    monetary: 14,
    business: 21,
    energy: 22,
    color: "red",
  },
  {
    id: 2,
    month: "Лютий",
    goverment: 215,
    finances: 51,
    monetary: 68,
    business: 32,
    energy: 12,
    color: "purple",
  },
  {
    id: 3,
    month: "Березень",
    goverment: 523,
    finances: 42,
    monetary: 27,
    business: 24,
    energy: 42,
    color: "yellow",
  },
  {
    id: 4,
    month: "Квітень",
    goverment: 33,
    finances: 41,
    monetary: 23,
    business: 31,
    energy: 21,
    color: "steelblue",
  },
];

const dimensions = {
  width: 800,
  height: 700,
  marginLeft: 100,
  marginBotton: 100,
  chartHeight: 600,
  chartWidth: 700,
};

export default function StackedBarChart() {
  const ref = useRef();

  const maxValue = d3.max(data, (d) => d.goverment);

  const y = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([0, dimensions.chartHeight]);
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.month))
    .range([0, dimensions.chartWidth])
    .padding(0.03);

  useEffect(() => {
    const svgElement = d3.select(ref.current);

    svgElement
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("height", (d) => y(d.goverment))
      .attr("width", 16)
      .attr("fill", (d) => d.color)
      .attr("x", (_, i) => i * 30);
  }, [y]);

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      className="bg-yellow-50"
      ref={ref}
    ></svg>
  );
}
