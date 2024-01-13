"use client";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import { useRouter } from "next/router";

export default function HomeText() {
  const router = useRouter();
  const { locale } = router;

  const { data } = useSWR(
    `https://vox-imore.ra-devs.tech/api/pages?lang=${locale}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <p className="lg:mx-20 ls:mx-4 my-6 text-sm text-gray-500">
      {data && (
        <span dangerouslySetInnerHTML={{ __html: data.data[2].content }} />
      )}
    </p>
  );
}
