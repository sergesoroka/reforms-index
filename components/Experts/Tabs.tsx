import useSWR from "swr";
import { fetcher } from "lib/fetcher";

function TabsComp({ status, setStatus }) {
  const { data, error } = useSWR(
    `https://vox-imore.ra-devs.tech/api/expert/statuses?lang=ua`,
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
          status == stat.title
            ? "underline decoration-red-600 decoration-4 underline-offset-[14px] text-gray-600"
            : "cursor-pointer text-gray-400"
        }
        onClick={() => setStatus(stat.title)}
      >
        {stat.title}
      </li>
    ));
  return <ul className="flex justify-start gap-6">{statusRender}</ul>;
}

export default TabsComp;
