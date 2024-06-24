// @ts-nocheck
import React, { useState } from "react";
import CheckBox from "./CheckBox";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function InitiatorsFilter({
  baseURL,
  initiators,
  setInitiators,
}) {
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

  const alphabet = ["М", "П", "К", "В", "Н", "Ф", "Д", "А"];

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
                />
              );
            }
          })}
      </div>
    </div>
  );
}
