"use client";
import { useState } from "react";
import Divider from "components/Divider/Divider";
import ExpertCart from "./ExpertCart";
import styles from "./Experts.module.css";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import TabsComp from "./Tabs";

function Experts() {
  const [status, setStatus] = useState("Редколегія");
  const { data, error } = useSWR(
    `https://vox-imore.ra-devs.tech/api/experts?lang=ua&per_page=10`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div className="wrap">
      <Divider heading="Наші експерти" single={false} />
      <TabsComp status={status} setStatus={setStatus} />
      <div className="lg:grid grid-cols-4 gap-8 mt-8">
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
