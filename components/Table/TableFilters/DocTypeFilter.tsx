// @ts-nocheck
import React, { useState } from "react";
import CheckBox from "./CheckBox";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function DocTypeFilter({ baseURL, docTypes, setDocTypes }) {
  const { data, isLoading } = useSWR(
    `${baseURL}/api/filters/doctypes`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div className="flex gap-6 items-center">
      {data &&
        data.data.map((item) => (
          <CheckBox
            key={item.id}
            onClick={() => handleSelectChange(item)}
            label={item.type}
            item={item}
            docTypes={docTypes}
            setDocTypes={setDocTypes}
          />
        ))}
    </div>
  );
}
