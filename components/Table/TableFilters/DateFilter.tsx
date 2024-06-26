// @ts-nocheck
import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import CheckBoxComp from "./CheckBoxComp";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

const monthNames = [
  { name: "Січень", number: "01" },
  { name: "лютий", number: "02" },
  { name: "березень", number: "03" },
  { name: "квітень", number: "04" },
  { name: "травень", number: "05" },
  { name: "червень", number: "06" },
  { name: "липень", number: "07" },
  { name: "серпень", number: "08" },
  { name: "вересень", number: "09" },
  { name: "жовтень", number: "10" },
  { name: "листопад", number: "11" },
  { name: "грудень", number: "12" },
];

export default function DateFilter({
  baseURL,
  dates,
  setDates,
  setLabels,
  setResetFilters,
  resetFilters,
}) {
  const { data, isLoading } = useSWR(`${baseURL}/api/filters/dates`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const [values, setValues] = useState([]);

  const years = [];
  return (
    <div>
      <div className="space-y-2">
        {data &&
          Object.keys(data.data).map((item, i) => {
            if (!years.includes(item.slice(0, 4))) {
              years.push(item.slice(0, 4));

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-start gap-6 cursor-pointer"
                >
                  <CheckBoxComp
                    item={item}
                    label={item.slice(0, 4)}
                    values={dates}
                    setValues={setDates}
                  />

                  <div className="flex justify-start items-center gap-4">
                    {/* {data &&
                      Object.keys(data.data).map((v, y) => <p key={y}>{v}</p>)} */}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
