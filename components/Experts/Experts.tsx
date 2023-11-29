import Divider from "components/Divider/Divider";
import ExpertCart from "./ExpertCart";
import styles from "./Experts.module.css";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

function Experts() {
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
    <div>
      <Divider heading="Наші експерти" single={false} />
      <div className="lg:grid grid-cols-4 gap-6">
        {data &&
          data.data.map((expert) => (
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
          ))}
      </div>
    </div>
  );
}

export default Experts;
