// @ts-nocheck
import { useState, useEffect } from "react";
import CheckBox from "./DirectionCheckBox";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import NestedDirectionCheckBox from "./DirectionFilter/NestedDirectionCheckBox";

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

  return (
      <div>
        <div className="space-y-2">
          {data &&
              data.data.map((item, i) => {
                return(
                    <NestedDirectionCheckBox
                        key={item['id']}
                        label={item['name']}
                        dataSet={item['sub_directions']}
                        values={directions}
                        setValues={setDirections}
                    />
                )
              })}
        </div>
      </div>
  );
}
