import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

function HomPartners() {
  const { data, error } = useSWR(
    `https://vox-imore.ra-devs.tech/api/partners`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const partnersRender =
    data &&
    data.data.map((partner, i) => {
      return (
        <div key={i} className="mb-4">
          <Link href={partner.link} passHref target="_blank">
            <Image
              // @ts-ignore
              src={partner.logo}
              alt={partner.link}
              width={100}
              height={100}
              style={{ borderRadius: "100%" }}
            />
          </Link>
        </div>
      );
    });
  return (
    <div className="lg:flex w-full gap-6 justify-between items-center mt-6">
      {partnersRender}
    </div>
  );
}

export default HomPartners;
