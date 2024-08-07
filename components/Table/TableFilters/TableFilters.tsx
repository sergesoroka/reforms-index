// @ts-nocheck
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomSelect from "./CustomSelect";
import Labels from "./Labels";

import FiltersIcon from "components/IconsComponents/FiltersIcon";
import { fetcher } from "lib/fetcher";
import useSWR from "swr";
import DateFilter from "./DateFilter";
import DirectionsFilter from "./DirectionsFilter";
import DocTypeFilter from "./DocTypeFilter";
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
      <div
        className="flex gap-4 items-baseline cursor-pointer"
        onClick={() => setOpenFilters(!openFilters)}
      >
        <FiltersIcon />
        <h2 className="text-lg hover:text-red-600">Фільтри</h2>
      </div>
      <AnimatePresence>
        {openFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex gap-2 items-start mt-4">
              <button
                onClick={() => {
                  setInitiators([]);
                  setDates([]);
                  setDirections([]);
                  setDocTypes([]);
                }}
                className="mb-4 h-7 w-46 whitespace-nowrap border border-gray-300 bg-gray-100 hover:border-gray-600 rounded-full text-xs text-gray-500 hover:text-gray-600 py-1 px-2"
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
            </div>
            <div className="flex flex-col justify-center items-center">
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
