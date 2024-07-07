// @ts-nocheck
import React, { useState } from "react";
import CheckBox from "./DirectionCheckBox";

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

  console.log(directions);

  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      {data &&
        data.data.map((item, i) => {
          return (
            <div key={item.id} className="flex justify-start gap-6">
              <CheckBox
                label={item.name}
                item={item}
                docTypes={directions}
                setDocTypes={setDirections}
              />

              {directions.includes(item)
                ? item.sub_directions.map((sub, y) => {
                    return (
                      <div
                        onClick={() => {
                          if (!directions.includes(sub)) {
                            setDirections([...directions, sub]);
                          } else {
                            setDirections(
                              directions.filter((dir) => dir !== sub)
                            );
                          }
                        }}
                        key={sub.id}
                        className="flex items-center justify-start gap-2 cursor-pointer"
                      >
                        <p
                          className={`${
                            directions.includes(sub)
                              ? "text-red-600"
                              : "text-gray-400"
                          }`}
                        >
                          {sub.name}
                        </p>
                      </div>
                    );
                  })
                : null}
            </div>
          );
        })}
    </div>
  );
}
