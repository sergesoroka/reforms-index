// @ts-nocheck
import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import CheckBoxComp from "./CheckBoxComp";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

const monthNames = {
  "01": "Січень",
  "02": "лютий",
  "03": "березень",
  "04": "квітень",
  "05": "травень",
  "06": "червень",
  "07": "липень",
  "08": "серпень",
  "09": "вересень",
  "10": "жовтень",
  "11": "листопад",
  "12": "грудень",
};

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
  const months = [];
  return (
    <div>
      <div className="space-y-2">
        {data &&
          data.data.map((item, i) => {
            if (!years.includes(item.date.slice(0, 4))) {
              years.push(item.date.slice(0, 4));

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-start gap-6 "
                >
                  <CheckBoxComp
                    item={item.date}
                    label={item.date.slice(0, 4)}
                    values={dates}
                    setValues={setDates}
                  />

                  <div className="flex justify-start items-center gap-4">
                    {data &&
                      data.data.map((v, y) => {
                        console.log(v.date);
                        if (item.date.slice(0, 4) == v.date.slice(0, 4)) {
                          return (
                            <p
                              key={y}
                              className={`${
                                v.status == "empty"
                                  ? "text-gray-300"
                                  : "text-gray-600 cursor-pointer hover:text-red-600"
                              } capitalize`}
                            >
                              {monthNames[v.date.slice(5, 7)]}
                            </p>
                          );
                        }
                      })}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
