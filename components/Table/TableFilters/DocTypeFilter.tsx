// @ts-nocheck
import React, { useEffect, useState } from "react";
import CheckBox from "./CheckBox";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function DocTypeFilter({
  baseURL,
  docTypes,
  setDocTypes,
  setLabels,
}) {
  const [selected, setSelected] = useState([]);
  const { data, isLoading } = useSWR(
    `${baseURL}/api/filters/doctypes`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    data &&
      data.data.map((item) => {
        // if (!docTypes.includes(item) && selected.includes(item)) {
        //   docTypes.push(item);
        // }

        if (!docTypes.includes(item)) {
          setDocTypes(docTypes.filter((d) => d !== item));
        }
      });
  }, [selected]);

  return (
    <div className="w-[12rem] mb-4" style={{ width: "fitContent" }}>
      {data &&
        data.data.map((item) => (
          <CheckBox
            key={item.id}
            // onClick={() => setLabels(item.title)}
            label={item.type}
            item={item}
            docTypes={docTypes}
            setDocTypes={setDocTypes}
            setSelected={setSelected}
            selected={selected}
          />
        ))}
    </div>
  );
}
