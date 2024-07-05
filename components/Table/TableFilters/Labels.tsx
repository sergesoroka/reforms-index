import React, { useEffect, useState } from "react";
import CloseIcon from "components/IconsComponents/CloseIcon";

export default function Labels({
  dates,
  setDates,
  directions,
  setDirections,
  docTypes,
  setDocTypes,
  initiators,
  setInitiators,
}) {
  const [labels, setLabels] = useState([]);

  // useEffect(() => {
  //   if (dates && dates.length > 0) {
  //     setLabels([...dates]);
  //   }
  // }, [dates]);
  console.log("dir", directions);
  console.log("dates", dates);
  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-1">
        {dates &&
          dates.length > 0 &&
          dates.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-medium antialiased bg-white text-[13px] text-red-600 rounded-full border  select-none px-2 py-1"
            >
              <span>{item}</span>
              <span
                onClick={() => {
                  setDates(dates.filter((d) => d !== item));
                }}
                className="cursor-pointer"
              >
                <CloseIcon />
              </span>
            </div>
          ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {/* {directions &&
          directions.length > 0 &&
          directions.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-medium antialiased bg-white text-[13px] text-red-600 rounded-full border  select-none px-2 py-1"
            >
              <span>{item}</span>
              <span
                onClick={() => {
                  setDirections(directions.filter((d) => d !== item));
                }}
                className="cursor-pointer"
              >
                <CloseIcon />
              </span>
            </div>
          ))} */}
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        {initiators &&
          initiators.length > 0 &&
          initiators.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-medium antialiased bg-white text-[13px] text-red-600 rounded-full border  select-none px-2 py-1"
            >
              <span>{item.name}</span>
              <span
                onClick={() => {
                  setInitiators(initiators.filter((d) => d !== item));
                }}
                className="cursor-pointer"
              >
                <CloseIcon />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
