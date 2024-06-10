import LineChartIcon from "components/IconsComponents/LineChartIcon";

export default function HomeCurrentIndex() {
  return (
    <div className="w-full mt-10 flex  justify-center items-center">
      <div className="flex flex-col items-end gap-4">
        <LineChartIcon />
        <span className="text-9xl">0.92</span>
      </div>
    </div>
  );
}
