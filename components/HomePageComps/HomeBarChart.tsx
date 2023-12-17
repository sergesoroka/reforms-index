import Image from "next/image";

import chart from "../../public/chart.png";
import LineChartComp from "components/LineChart/LineChart";
import AreaChartComp from "components/LineChart/AreaChart";

function HomeBarChart() {
  return (
    <div className="flex flex-col gap-16 w-full">
      <AreaChartComp />
      {/* <LineChartComp /> */}
    </div>
  );
}

export default HomeBarChart;
