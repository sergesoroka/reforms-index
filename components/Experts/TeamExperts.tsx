// @ts-nocheck
"use client";

import Divider from "components/Divider/Divider";
import Spiner from "components/Spiner";
import { useState } from "react";
import ExpertCart from "./ExpertCart";

import { fetcher } from "lib/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

function TeamExperts({ baseURL }) {
  const router = useRouter();
  const { locale, pathname } = router;
  const [status, setStatus] = useState(4);
  const { data, error, isLoading } = useSWR(
    `${baseURL}/api/experts?lang=${locale}&status=${status}&per_page=100`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) return <Spiner />;

  return (
    <div className="wrap">
      <Divider heading="Наші експерти" single={false} />

      <div className="team grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
        {data &&
          data.data.map((expert) => {
            return (
              <ExpertCart
                name={expert.name}
                status={status}
                id={expert.id}
                company={expert.works}
                img={expert.avatar}
                position={expert.position}
                info={expert.info}
                specialization={expert.specialization}
                key={expert.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default TeamExperts;
