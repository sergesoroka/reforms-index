// @ts-nocheck
"use client";

import { useState } from "react";
import Divider from "components/Divider/Divider";
import ExpertCart from "./ExpertCart";
import Spiner from "components/Spiner";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import TabsComp from "./Tabs";
import { useRouter } from "next/router";

function Experts({ baseURL }) {
  const router = useRouter();
  const { locale, pathname } = router;
  const [status, setStatus] = useState(1);
  const { data, error, isLoading } = useSWR(
    `${baseURL}/api/experts?lang=${locale}&status=${status}&per_page=100`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const { data: dataDesc } = useSWR(
    `${baseURL}/api/pages?lang=${locale}`,
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
      <h1>Експерти</h1>
      <hr className="mb-6 mt-4" />
      <Divider heading="Наші експерти" single={false} />
      <TabsComp status={status} setStatus={setStatus} baseURL={baseURL} />
      {dataDesc &&
        dataDesc.data.map((item) => {
          if (status == 1 && item.id == 5) {
            return (
              <div key={item.id}>
                <p
                  key={item.id}
                  className="my-10 text-[18px] text-gray-500"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            );
          }
          if (status == 2 && item.id == 6) {
            return (
              <div key={item.id}>
                <p
                  key={item.id}
                  className="my-10 text-[18px] text-gray-500"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            );
          }
          if (status == 3 && item.id == 8) {
            return (
              <div key={item.id}>
                <p
                  key={item.id}
                  className="my-10 text-[18px] text-gray-500"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            );
          }
        })}

      <div className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8">
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

export default Experts;
