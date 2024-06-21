// @ts-nocheck
import React, { useState } from "react";
import CheckBox from "./CheckBox";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function DirectionsFilter({
  baseURL,
  setDirections,
  directions,
}) {
  const { data, isLoading } = useSWR(
    `${baseURL}/api/filters/directions`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      {data &&
        data.data.map((item) => {
          return (
            <div key={item.id} className="flex justify-start gap-6">
              <CheckBox
                label={item.name}
                item={item}
                docTypes={directions}
                setDocTypes={setDirections}
              />

              {directions.includes(item)
                ? item.sub_directions.map((sub, y) => (
                    <div
                      key={sub.id}
                      className="flex items-center justify-start gap-2"
                    >
                      <p className="text-gray-500">{sub.name}</p>
                    </div>
                  ))
                : null}
            </div>
          );
        })}
    </div>
  );
}
