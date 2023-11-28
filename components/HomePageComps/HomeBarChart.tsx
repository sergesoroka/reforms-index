import Image from "next/image";

import chart from "../../public/chart.png";

function HomeBarChart() {
  return (
    <div>
      <Image
        // @ts-ignore
        src={chart}
        alt=""
        width={1175}
        height={480}
      />
    </div>
  );
}

export default HomeBarChart;
