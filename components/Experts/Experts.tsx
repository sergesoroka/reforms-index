"use client";
import { useState } from "react";
import Divider from "components/Divider/Divider";
import ExpertCart from "./ExpertCart";
import styles from "./Experts.module.css";
import Spiner from "components/Spiner";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import TabsComp from "./Tabs";
import { useRouter } from "next/router";

function Experts() {
  const router = useRouter();
  const { locale } = router;
  const [status, setStatus] = useState("Редколегія");
  const { data, error, isLoading } = useSWR(
    `https://vox-imore.ra-devs.tech/api/experts?lang=${locale}&per_page=100`,
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
      <TabsComp status={status} setStatus={setStatus} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
        {data &&
          data.data.map((expert) => {
            if (expert.status == status) {
              return (
                <ExpertCart
                  name={expert.name}
                  id={expert.id}
                  company={expert.work}
                  img={expert.avatar}
                  position={expert.position}
                  info={expert.info}
                  specialization={expert.specialization}
                  key={expert.id}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default Experts;
