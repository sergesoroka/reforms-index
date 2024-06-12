import LineChartIcon from "components/IconsComponents/LineChartIcon";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import { useRouter } from "next/router";

export default function HomeCurrentIndex({ baseURL }) {
  const router = useRouter();
  const { locale } = router;

  const { data } = useSWR(`${baseURL}/api/rounds/stats`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <div className="w-full mt-10 flex  justify-center items-center">
      <div className="flex flex-col items-end gap-4">
        <LineChartIcon />
        <span className="text-9xl">
          {data && data.data[data.data.length - 1].mark}
        </span>
      </div>
    </div>
  );
}
