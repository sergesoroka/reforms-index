// @ts-nocheck
import { useState } from "react";
import Divider from "components/Divider/Divider";
import TableSelect from "./Select";
import CustomSelect from "./CustomSelect";
import Labels from "./Labels";
import RadioButtons from "./RadioButtons";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function TableFilters({ baseURL, setLabels, labels }) {
  const [openFilters, setOpenFilters] = useState(false);

  //   https://vox-imore.ra-devs.tech/api/filters/initiators

  const { data, isLoading } = useSWR(
    `${baseURL}/api/filters/initiators`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <>
      <Divider
        heading="Фільтри"
        single={false}
        openable={true}
        open={openFilters}
        // @ts-ignore
        setOpen={setOpenFilters}
      />
      {openFilters && (
        <div>
          {/* <RadioButtons /> */}
          <Labels labels={labels} setLabels={setLabels} />
          <CustomSelect data={data} setLabels={setLabels} labels={labels} />
          {/* <TableSelect setLabels={setLabels} labels={labels} /> */}
        </div>
      )}
    </>
  );
}
