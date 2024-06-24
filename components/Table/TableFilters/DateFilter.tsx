// @ts-nocheck
import React, { useState } from "react";
import CheckBox from "./CheckBox";

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

export default function DateFilter({ baseURL, dates, setDates }) {
  const [year, setYear] = useState("");
  const { data, isLoading } = useSWR(`${baseURL}/api/filters/dates`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const years = [];
  console.log(dates);
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
                  className="flex items-center justify-start gap-6"
                >
                  <CheckBox
                    onClick={() => setYear(item.slice(0, 4))}
                    label={item.slice(0, 4)}
                    item={item}
                    docTypes={dates}
                    setDocTypes={setDates}
                  />

                  <div className="flex justify-start items-center gap-4">
                    {monthNames.map((m, y) => {
                      let newDate = item.slice(0, 4) + "-" + m.number;
                      if (dates.includes(item)) {
                        return (
                          <p
                            onClick={() => {
                              if (!dates.includes(newDate)) {
                                setDates([...dates, newDate]);
                              } else {
                                setDates(dates.filter((d) => d !== newDate));
                              }
                            }}
                            className={`cursor-pointer capitalize text-gray-400 ${
                              dates.includes(newDate) && "text-red-500"
                            }`}
                            key={y}
                          >
                            {m.name}
                          </p>
                        );
                      }
                    })}
                    {/* {data &&
                      Object.keys(data.data).map((month, y) => {
                        if (
                          dates.includes(month) &&
                          month.slice(0, 4) == item.slice(0, 4)
                        ) {
                          //       dates.push(month);
                          return (
                            <p
                              onClick={() => console.log("rr")}
                              className="cursor-poiner capitalize text-gray-400"
                              key={y}
                            >
                              {monthNames[month.slice(5, 7)]}
                            </p>
                          );
                        }
                      })} */}
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
