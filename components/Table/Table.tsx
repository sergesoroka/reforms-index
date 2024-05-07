// @ts-nocheck
import { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import rows from "./../../data/tableRows.json";
import Divider from "components/Divider/Divider";
import Spiner from "components/Spiner";
import TableCategories from "./TableCategories";
import { fetcher } from "lib/fetcher";
import useSWR from "swr";
import { useRouter } from "next/router";

const Table = ({ baseURL }) => {
  const [tableData, setTableData] = useState(rows);
  const [category, setCategory] = useState("all");
  const [filtered, setFiltered] = useState([]);

  const [sortField, setSortField] = useState([]);
  const [ascOrder, setAscOrder] = useState(false);
  const [resetSorting, setResetSorting] = useState(false);

  const router = useRouter();
  const { locale, pathname } = router;

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

  const { data, isLoading } = useSWR(`${baseURL}/api/news?${params}`, fetcher);

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
      <TableCategories handleFilters={handleFilters} />
      <Divider gray={true} />
      <div className="flex justify-end">
        <p
          onClick={() => setSortField([])}
          className={`my-6 text-sm cursor-pointer select-none ${
            sortField.length > 0 ? "text-red-800" : "text-gray-400"
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
