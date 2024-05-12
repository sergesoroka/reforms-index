// @ts-nocheck
import { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import rows from "./../../data/tableRows.json";
import Divider from "components/Divider/Divider";
import Spiner from "components/Spiner";
import TableFilters from "./TableFilters/TableFilters";
import { fetcher } from "lib/fetcher";
import useSWR from "swr";
import { useRouter } from "next/router";

const Table = ({ baseURL }) => {
  const [tableData, setTableData] = useState(rows);
  const [category, setCategory] = useState("all");
  const [filtered, setFiltered] = useState([]);

  const [sortField, setSortField] = useState([]);
  const [ascOrder, setAscOrder] = useState(true);
  const [resetSorting, setResetSorting] = useState(false);
  const [labels, setLabels] = useState([]);

  const router = useRouter();
  const { locale, pathname } = router;
  // %5B%5D
  // https://vox-imore.ra-devs.tech/api/news?initiators%5B%5D=1
  const filterPath = labels
    .map((item) => "&initiators%5B%5D=" + item.id)
    .join("");

  const order = ascOrder ? "asc" : "desc";

  let params = "";

  if (sortField.includes("id")) {
    params = "&orders[id]=" + order + params;
  }
  if (sortField.includes("date")) {
    params = "&orders[news_date]=" + order + params;
  }
  if (sortField.includes("grade1")) {
    params = "&orders[grade1]=" + order + params;
  }
  if (sortField.includes("grade2")) {
    params = "&orders[grade2]=" + order + params;
  }
  if (sortField.includes("grade3")) {
    params = "&orders[grade3]=" + order + params;
  }
  if (sortField.includes("grade4")) {
    params = "&orders[grade4]=" + order + params;
  }
  if (sortField.includes("grade5")) {
    params = "&orders[grade5]=" + order + params;
  }
  if (sortField.includes("grade6")) {
    params = "&orders[grade6]=" + order + params;
  }

  if (sortField.includes("grade_total")) {
    params = "&orders[average]=" + order + params;
  }

  if (sortField.includes("round")) {
    params = "&orders[q_num]=" + order + params;
  }

  const { data, isLoading } = useSWR(
    resetSorting
      ? `${baseURL}/api/news`
      : `${baseURL}/api/news?${params}${filterPath}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const handleFilters = (filters) => {
    setFiltered(filters);
  };

  // @ts-ignore
  useEffect(() => {
    if (filtered.length < 1) {
      setTableData(rows);
    }
    const catSelected = [];

    tableData.map((item) => {
      // @ts-ignore
      if (filtered.includes(item?.subtheme)) {
        catSelected.push(item);
        setTableData(catSelected);
      }
    });
  }, [filtered, tableData]);

  return (
    <>
      <TableFilters baseURL={baseURL} setLabels={setLabels} labels={labels} />
      <Divider gray={true} />
      <div className="flex justify-end">
        <p
          onClick={() => setResetSorting(true)}
          className={`my-6 text-sm cursor-pointer select-none ${
            resetSorting ? "text-red-800" : "text-gray-400"
          }`}
        >
          Скинути сортування
        </p>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <Spiner />
        </div>
      ) : (
        <table style={{ width: "100%", textAlign: "left" }}>
          <TableHead
            setSortField={setSortField}
            sortField={sortField}
            setAscOrder={setAscOrder}
            ascOrder={ascOrder}
            setResetSorting={setResetSorting}
            resetSorting={resetSorting}
          />
          <TableBody tableData={data && data.data} />
        </table>
      )}
    </>
  );
};

export default Table;
