import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

function HomPartners({ baseURL }) {
  const { data, error } = useSWR(`${baseURL}/api/partners`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const partnersRender =
    data &&
    data.data.map((partner, i) => {
      return (
        <div key={i} className="mb-4 m-auto">
          <Link href={partner.link} passHref target="_blank">
            <Image
              // @ts-ignore
              className="grayscale hover:grayscale-0"
              src={partner.logo}
              alt={partner.link}
              width={160}
              height={160}
              style={{ borderRadius: "100%" }}
            />
          </Link>
        </div>
      );
    });
  return (
    <div className="grid grid-cols-3 gap-12 items-center justify-center mt-12">
      {partnersRender}
    </div>
  );
}

export default HomPartners;
