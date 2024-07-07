// @ts-nocheck
import { useEffect, useState } from "react";
import CheckBoxComp from "./CheckBoxComp";

import { fetcher } from "lib/fetcher";
import useSWR from "swr";

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

  const [selected, setSelected] = useState([]);

  // console.log("dates:", dates);
  // console.log("select", selected);

  useEffect(() => {
    // console.log("effect");

    data &&
      data.data.map((item) => {
        if (
          !dates.includes(item.date) &&
          selected.includes(item.date.slice(0, 4)) &&
          item.status === "has"
        ) {
          // setDates([...dates, item.date]);
          dates.push(item.date);
        }
        if (!selected.includes(item.date.slice(0, 4)))
          setDates(dates.filter((d) => d !== item.date));

        if (selected.length < 1) setDates([]);
      });
  }, [selected]);

  const years = [];

  return (
    <div>
      <div className="space-y-2">
        {data &&
          data.data.map((item, i) => {
            if (!years.includes(item.date.slice(0, 4))) {
              years.push(item.date.slice(0, 4));

              return (
                <div key={i} className="flex items-center justify-start gap-6 ">
                  <CheckBoxComp
                    item={item.date}
                    label={item.date.slice(0, 4)}
                    values={dates}
                    setValues={setDates}
                    setSelected={setSelected}
                    selected={selected}
                  />

                  <div className="flex justify-start items-center gap-4">
                    {data &&
                      data.data.map((v, y) => {
                        if (
                          item.date.slice(0, 4) === v.date.slice(0, 4) &&
                          selected.includes(item.date.slice(0, 4))
                        ) {
                          return (
                            <p
                              onClick={() => {
                                if (
                                  !dates.includes(v.date) &&
                                  v.status !== "empty"
                                ) {
                                  setDates([...dates, v.date]);
                                } else {
                                  setDates(dates.filter((d) => d !== v.date));
                                }
                              }}
                              key={y}
                              className={`${
                                v.status == "empty"
                                  ? "text-gray-300"
                                  : "text-gray-500 cursor-pointer hover:text-gray-700"
                              } capitalize select-none ${
                                dates.includes(v.date) &&
                                v.status == "has" &&
                                "text-red-600"
                              }`}
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
