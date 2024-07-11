// @ts-nocheck
import { useState, useEffect } from "react";
import CheckBox from "./DirectionCheckBox";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function DirectionsFilter({
  baseURL,
  setDirections,
  directions,
}) {
  const [selected, setSelected] = useState([]);
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
  useEffect(() => {
    data &&
      data.data.map((item) => {
        if (!directions.includes(item)) {
          setDirections(directions.filter((d) => d !== item));
        }
      });
  }, [selected]);

  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      {data &&
        data.data.map((item, i) => {
          return (
            <div key={item.id} className="flex justify-start gap-6">
              <div
                onClick={() => {
                  if (!directions.includes(item)) {
                    setDirections([...directions, item]);
                  } else {
                    setDirections(directions.filter((d) => d !== item.name));
                  }
                }}
              >
                <CheckBox
                  label={item.name}
                  item={item}
                  docTypes={directions}
                  setDocTypes={setDirections}
                  setSelected={setSelected}
                  selected={selected}
                />
              </div>

              {directions.includes(item)
                ? item.sub_directions.map((sub, y) => {
                    return (
                      <div
                        onClick={() => {
                          if (directions.includes(item)) {
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
