// @ts-nocheck
import { useEffect, useState } from "react";
import NestedCheckBox from "./DateFilter/NestedCheckBox";

import { fetcher } from "lib/fetcher";
import useSWR from "swr";

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

  function onlyUnique(value, index, array) {
      return array.indexOf(value) === index;
  }

  
  const all_dates=[];
  data && data.data.map((item, i) => {
    let year=item.date.slice(0, 4);
    let tmp=[];
    if (all_dates[year]){
     tmp=all_dates[year];
    }
    tmp.push(item);
    all_dates[year]=tmp;

  });

  return (
    <div>
      <div className="space-y-2">
        {all_dates &&
            all_dates.map((item, year) => {
                  return(
              <NestedCheckBox
                  key={year}
                  label={year}
                  dataSet={item}
                  values={dates.filter(onlyUnique)}
                  setValues={setDates}
              />
                )
          })}
      </div>
    </div>
  );
}
