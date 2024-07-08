// @ts-nocheck
import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function InitiatorsFilter({
  baseURL,
  initiators,
  setInitiators,
}) {
  const [selected, setSelected] = useState([]);
  const [letter, setLetter] = useState("");
  const { data, isLoading } = useSWR(
    `${baseURL}/api/filters/initiators`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  const al = data && data.data.map((l) => l.short_name.slice(0, 1));
  const alphabet = al.filter(onlyUnique);

  useEffect(() => {
    data &&
      data.data.map((item) => {
        // if (!docTypes.includes(item) && selected.includes(item)) {
        //   docTypes.push(item);
        // }

        if (!initiators.includes(item)) {
          setInitiators(initiators.filter((d) => d !== item));
        }
      });
  }, [selected]);

  return (
    <div>
      <ul className="flex justify-start text-[16px] text-gray-400 gap-4 mb-4">
        {alphabet.sort().map((ltr, i) => (
          <li
            key={i}
            onClick={() => setLetter(ltr)}
            className={`${letter === ltr && "text-red-500"} cursor-pointer`}
          >
            {ltr}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-x-10 gap-y-3">
        {data &&
          data.data.map((item) => {
            let fullname = item.name + " (" + item.short_name + ")";
            if (item.name.startsWith(letter)) {
              return (
                <CheckBox
                  key={item.id}
                  onClick={() => handleSelectChange(item)}
                  label={fullname}
                  item={item}
                  docTypes={initiators}
                  setDocTypes={setInitiators}
                  setSelected={setSelected}
                  selected={selected}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
