import React, { useEffect, useState } from "react";
import ArrowOpen from "components/IconsComponents/ArrowOpen";

import cats from "../../../data/tableColumns.json";

export default function CustomSelect({ data, setLabels, labels }) {
  const [open, setOpen] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(
    () =>
      setFiltered(
        data &&
          data.data.filter((item) =>
            item.short_name.toLocaleLowerCase().includes(search)
          )
      ),
    [search, data]
  );

  const dataRender = search ? filtered : cats;

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
          className="bg-slate-200 pt-3 pb-2 px-4 flex rounded-sm cursor-pointer  justify-between text-[14px] text-slate-500"
        >
          Оберіть ініціаторів
          <span>
            <ArrowOpen open={open} />
          </span>
        </p>
        {open && (
          <div>
            <div className="text-[14px] text-slate-500 pt-4 pb-3">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Пошук..."
                className="w-full pt-3 pb-2 px-4 outline-none"
              />
            </div>
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
