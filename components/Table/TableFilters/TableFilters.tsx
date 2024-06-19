// @ts-nocheck
import { useState } from "react";
import Divider from "components/Divider/Divider";
import TableSelect from "./Select";
import CustomSelect from "./CustomSelect";
import Labels from "./Labels";
import RadioButtons from "./RadioButtons";
import CheckBox from "./CheckBox";

import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import DocTypeFilter from "./DocTypeFilter";

export default function TableFilters({
  baseURL,
  setLabels,
  labels,
  docTypes,
  setDocTypes,
}) {
  const [openFilters, setOpenFilters] = useState(false);
  const [tab, setTab] = useState("date");

  //   https://vox-imore.ra-devs.tech/api/filters/initiators
  // https://vox-imore.ra-devs.tech/api/news?doctypes%5B%5D=1&doctypes%5B%5D=2&orders[q_num]=desc&orders[grade1]=asc

  const { data, isLoading } = useSWR(
    `${baseURL}/api/filters/initiators`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <>
      <Divider
        heading="Фільтри"
        single={false}
        openable={true}
        open={openFilters}
        // @ts-ignore
        setOpen={setOpenFilters}
      />
      {openFilters && (
        <div className="flex flex-col justify-center items-center">
          <ul className="flex items-center justify-center gap-6 mb-12 text-sm ">
            <li
              className={`cursor-pointer ${
                tab == "date" ? "text-red-700" : "text-[#828282]"
              }`}
              onClick={() => setTab("date")}
            >
              Дата
            </li>
            <li
              className={`cursor-pointer ${
                tab == "type" ? "text-red-700" : "text-[#828282]"
              }`}
              onClick={() => setTab("type")}
            >
              Тип документа
            </li>
            <li
              className={`cursor-pointer ${
                tab == "initiator" ? "text-red-700" : "text-[#828282]"
              }`}
              onClick={() => setTab("initiator")}
            >
              Ініціатор
            </li>
            <li
              className={`cursor-pointer ${
                tab == "direction" ? "text-red-700" : "text-[#828282]"
              }`}
              onClick={() => setTab("direction")}
            >
              Напрямки
            </li>
          </ul>
          {tab === "date" && <div>Дата</div>}
          {tab === "type" && (
            <div>
              <DocTypeFilter
                baseURL={baseURL}
                docTypes={docTypes}
                setDocTypes={setDocTypes}
              />
            </div>
          )}
          {tab === "initiator" && (
            <div>
              <CustomSelect data={data} setLabels={setLabels} labels={labels} />
            </div>
          )}
          {tab === "direction" && <div>Напрямки</div>}
          {/* <RadioButtons /> */}
          <Labels labels={labels} setLabels={setLabels} />

          {/* <TableSelect setLabels={setLabels} labels={labels} /> */}
        </div>
      )}
    </>
  );
}
