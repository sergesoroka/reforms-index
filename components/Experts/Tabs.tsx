import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import { useRouter } from "next/router";

function TabsComp({ status, setStatus }) {
  const router = useRouter();
  const { locale } = router;
  const { data, error } = useSWR(
    `https://api-reforms.ra-devs.tech/api/expert/statuses?lang=${locale}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const statusRender =
    data &&
    data.data.map((stat) => (
      <li
        key={stat.id}
        className={
          status == stat.id
            ? "underline decoration-red-600 decoration-4 underline-offset-[14px] text-gray-600"
            : "cursor-pointer text-gray-400"
        }
        onClick={() => setStatus(stat.id)}
      >
        {stat.title}
      </li>
    ));
  return <ul className="flex justify-start gap-6">{statusRender}</ul>;
}

export default TabsComp;
