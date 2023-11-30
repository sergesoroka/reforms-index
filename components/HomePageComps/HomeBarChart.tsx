import Image from "next/image";

import chart from "../../public/chart.png";
import LineChartComp from "components/LineChart/LineChart";

function HomeBarChart() {
  return (
    <div>
      <LineChartComp />
      {/* <Image
        // @ts-ignore
        src={chart}
        alt=""
        width={1175}
        height={480}
      /> */}
    </div>
  );
}

export default HomeBarChart;
