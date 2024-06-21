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

  const [labels, setLabels] = useState([]);
  const [docTypes, setDocTypes] = useState([]);
  const [directions, setDirections] = useState([]);
  const [initiators, setInitiators] = useState([]);

  console.log(directions);

  const router = useRouter();
  const { locale, pathname } = router;
  // %20 is space
  // %22 is quotes
  // %5B is '['
  // and %5D is ']'
  // https://vox-imore.ra-devs.tech/api/news?initiators%5B%5D=1
  const filterInitiator = initiators
    .map((item) => "&initiators%5B%5D=" + item.id)
    .join("");

  const filterDocType = docTypes
    .map((item) => "&doctypes%5B%5D=" + item.id)
    .join("");

  let params = "";
  let comp_table = {
    id: "id",
    date: "news_date",
    grade1: "grade1",
    grade2: "grade2",
    grade3: "grade3",
    grade4: "grade4",
    grade5: "grade5",
    grade6: "grade6",
    grade_total: "average",
    round: "q_num",
  };

  sortField.forEach(function (key, index) {
    let sort_key = Object.keys(key)[0];
    params += "&orders[" + comp_table[sort_key] + "]=" + key[sort_key];
  });

  const { data, isLoading } = useSWR(
    `${baseURL}/api/news?${params}${filterInitiator}${filterDocType}`,
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
      <TableFilters
        baseURL={baseURL}
        setLabels={setLabels}
        labels={labels}
        docTypes={docTypes}
        setDocTypes={setDocTypes}
        directions={directions}
        setDirections={setDirections}
        initiators={initiators}
        setInitiators={setInitiators}
      />
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
        <table
          style={{ width: "100%", textAlign: "left", position: "relative" }}
        >
          <TableHead
            setSortField={setSortField}
            sortField={sortField}
            setAscOrder={setAscOrder}
            ascOrder={ascOrder}
          />
          <TableBody tableData={data && data.data} />
        </table>
      )}
    </>
  );
};

export default Table;
