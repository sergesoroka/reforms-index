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
  // console.log("dates", dates);
  // console.log("directions", directions);
  // console.log("docTypes", docTypes);
  // console.log("initiators", initiators);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-4">
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
        {docTypes &&
          docTypes.length > 0 &&
          docTypes.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-medium antialiased bg-white text-[13px] text-red-600 rounded-full border  select-none px-2 py-1"
            >
              <span className="capitalize">{item.type}</span>
              <span
                onClick={() => {
                  setDocTypes(docTypes.filter((d) => d !== item));
                }}
                className="cursor-pointer"
              >
                <CloseIcon />
              </span>
            </div>
          ))}
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

      <div className="flex flex-wrap gap-3 mb-4">
        {directions &&
          directions.length > 0 &&
          directions.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 font-medium antialiased bg-white text-[13px] text-red-600 rounded-full border  select-none px-2 py-1"
            >
              <span>{item.name}</span>
              <div
                onClick={() => {
                  setDirections(directions.filter((d) => d.id !== item.id));
                }}
                className="cursor-pointer block"
              >
                <CloseIcon />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
