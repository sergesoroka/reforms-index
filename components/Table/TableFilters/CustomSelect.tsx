import React, { useEffect, useState } from "react";
import ArrowOpen from "components/IconsComponents/ArrowOpen";
import CloseIconGrey from "components/IconsComponents/CloseIconGrey";

export default function CustomSelect({ data, setLabels, labels }) {
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(
    () =>
      setFiltered(
        data &&
          data.data.filter((item) =>
            item.short_name
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase())
          )
      ),
    [search, data]
  );

  const handleSelectChange = (newLabel) => {
    if (!labels.includes(newLabel)) {
      setLabels([...labels, newLabel]);
    }
  };
  return (
    <section className="w-[14rem] mb-4 ">
      <div>
        <p
          onClick={() => setOpen(!open)}
          className="flex rounded-sm cursor-pointer items-center justify-between text-[14px] text-slate-500 border-b-2 border-slate-500"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Пошук по ініціаторах"
            className="w-full pt-3 pb-2 px-4 outline-none "
          />

          <span>
            {search && (
              <div onClick={() => setSearch("")}>
                <CloseIconGrey />
              </div>
            )}
          </span>
        </p>
        {open && (
          <div>
            <div className="text-[14px] text-slate-500 pt-4 pb-3"></div>
            <div
              className="max-h-40 overflow-y-auto"
              style={{ scrollbarWidth: "thin" }}
            >
              {filtered &&
                filtered.map((item, i) => (
                  <p
                    key={i}
                    onClick={() => handleSelectChange(item)}
                    className="cust text-[14px] text-slate-500 cursor-pointer select-none px-4 py-2 hover:bg-slate-100"
                  >
                    {item.short_name}
                  </p>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
