import AreaChartComp from "components/LineChart/AreaChart";

function HomeBarChart({ baseURL }) {
  return (
    <div className="flex flex-col gap-16 w-full mx-2">
      <AreaChartComp baseURL={baseURL} />
    </div>
  );
}

export default HomeBarChart;
