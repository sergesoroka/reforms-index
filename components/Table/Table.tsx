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

  const [sortField, setSortField] = useState("");
  const [ascOrder, setAscOrder] = useState(true);
  const [resetSorting, setResetSorting] = useState(false);

  const router = useRouter();
  const { locale, pathname } = router;

  // Round: ?orders[q_num]=desc
  // Date: ?orders[q_num]=asc&orders[news_date]=desc
  // Grade: (Урядування) ?orders[q_num]=asc&orders[news_date]=desc&orders[grade1]=desc
  //

  const order = ascOrder ? "asc" : "desc";

  const round = sortField == "id" ? "?orders[q_num]=" + order : "";
  const date =
    sortField == "date" ? "?orders[q_num]=asc&orders[news_date]=" + order : "";

  const grade =
    sortField == "grade1"
      ? "?orders[q_num]=asc&orders[news_date]=desc&orders[grade1]=" + order
      : "";

  const { data, isLoading } = useSWR(
    `${baseURL}/api/news${round}${date}${grade}`,
    fetcher
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
      <TableCategories handleFilters={handleFilters} />
      <Divider gray={true} />
      <div className="flex justify-end">
        <p
          onClick={() => setResetSorting(false)}
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
