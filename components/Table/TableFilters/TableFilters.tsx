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
import DateFilter from "./DateFilter";
import DocTypeFilter from "./DocTypeFilter";
import DirectionsFilter from "./DirectionsFilter";
import InitiatorsFilter from "./InitiatorsFilter";

export default function TableFilters({
  baseURL,
  setLabels,
  labels,
  docTypes,
  setDocTypes,
  directions,
  setDirections,
  initiators,
  setInitiators,
  dates,
  setDates,
}) {
  const [openFilters, setOpenFilters] = useState(false);
  const [tab, setTab] = useState("date");
  const [resetFilters, setResetFilters] = useState(false);
  const [showInitiatorSearch, setShowInitiatorSearch] = useState(true);

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
          <button
            onClick={() => {
              setInitiators([]);
              setDates([]);
              setDirections([]);
              setDocTypes([]);
            }}
            className="mb-4 border border-gray-300 hover:border-gray-600 rounded-full text-xs text-gray-400 hover:text-gray-600 w-32 py-1 px-2"
          >
            Скинути фільтри
          </button>
          <Labels
            dates={dates}
            setDates={setDates}
            directions={directions}
            setDirections={setDirections}
            docTypes={docTypes}
            setDocTypes={setDocTypes}
            initiators={initiators}
            setInitiators={setInitiators}
          />
          <ul className="flex items-center justify-center gap-6 text-sm ">
            <li
              className={`cursor-pointer  ${
                tab == "date"
                  ? "text-red-700 bg-gray-100 px-2 py-2 rounded-t-md"
                  : "text-[#828282]"
              }`}
              onClick={() => setTab("date")}
            >
              Дата
            </li>
            <li
              className={`cursor-pointer ${
                tab == "type"
                  ? "text-red-700 bg-gray-100 px-2 py-2 rounded-t-md"
                  : "text-[#828282]"
              }`}
              onClick={() => setTab("type")}
            >
              Тип документа
            </li>
            <li
              className={`cursor-pointer ${
                tab == "initiator"
                  ? "text-red-700 bg-gray-100 px-2 py-2 rounded-t-md"
                  : "text-[#828282]"
              }`}
              onClick={() => setTab("initiator")}
            >
              Ініціатор
            </li>
            <li
              className={`cursor-pointer ${
                tab == "direction"
                  ? "text-red-700 bg-gray-100 px-2 py-2 rounded-t-md"
                  : "text-[#828282]"
              }`}
              onClick={() => setTab("direction")}
            >
              Напрямки
            </li>
          </ul>
          {tab === "date" && (
            <div className="w-full bg-gray-100 py-4 px-8 rounded-md">
              <DateFilter
                baseURL={baseURL}
                dates={dates}
                setDates={setDates}
                setLabels={setLabels}
                resetFilters={resetFilters}
                setResetFilters={setResetFilters}
              />
            </div>
          )}
          {tab === "type" && (
            <div className="bg-gray-100 py-4 px-8 rounded-md capitalize">
              <DocTypeFilter
                baseURL={baseURL}
                docTypes={docTypes}
                setDocTypes={setDocTypes}
                setLabels={setLabels}
              />
            </div>
          )}
          {tab === "initiator" && (
            <>
              {showInitiatorSearch && (
                <div
                  className=" bg-gray-100 px-8 py-6 rounded-md"
                  style={{ width: "fit-content" }}
                >
                  <CustomSelect
                    data={data}
                    setLabels={setInitiators}
                    labels={initiators}
                  />
                  <p
                    onClick={() => setShowInitiatorSearch(false)}
                    className="text-sm text-gray-400 mt-2  hover:text-red-500 cursor-pointer"
                  >
                    Алфавітний показник
                  </p>
                </div>
              )}
              {!showInitiatorSearch && (
                <div className="w-full bg-gray-100 px-8 py-6 rounded-md">
                  <p
                    onClick={() => setShowInitiatorSearch(true)}
                    className="text-sm text-gray-400 my-2  hover:text-red-500 cursor-pointer"
                  >
                    Повернутись до пошуку
                  </p>
                  <InitiatorsFilter
                    baseURL={baseURL}
                    setInitiators={setInitiators}
                    initiators={initiators}
                  />
                </div>
              )}
            </>
          )}
          {tab === "direction" && (
            <div className="w-full bg-gray-100 py-4 px-8 rounded-md">
              <DirectionsFilter
                baseURL={baseURL}
                directions={directions}
                setDirections={setDirections}
              />
            </div>
          )}
          {/* <RadioButtons /> */}

          {/* <TableSelect setLabels={setLabels} labels={labels} /> */}
        </div>
      )}
    </>
  );
}
