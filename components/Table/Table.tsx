import { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import rows from "./../../data/tableRows.json";
import Divider from "components/Divider/Divider";
import TableCategories from "./TableCategories";

const Table = () => {
  const [tableData, setTableData] = useState(rows);
  const [category, setCategory] = useState("all");
  const [filtered, setFiltered] = useState([]);

  const handleSorting = (sortField: string, sortOrder: string) => {
    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData(sorted);
    }
  };

  const handleFilters = (filters) => {
    setFiltered(filters);
  };

  console.log(filtered);
  // @ts-ignore
  useEffect(() => {
    if (filtered.length < 1) {
      setTableData(rows);
    }
    const catSelected = [];
    console.log("effect");
    tableData.map((item) => {
      if (filtered.includes(item.subtheme)) {
        catSelected.push(item);
        setTableData(catSelected);
      }
    });
  }, [filtered, tableData]);

  return (
    <>
      {/* @ts-ignore */}
      <TableCategories handleFilters={handleFilters} />
      <Divider single={true} />
      <table style={{ width: "100%", textAlign: "left" }}>
        {/* @ts-ignore */}
        <TableHead handleSorting={handleSorting} />
        <TableBody tableData={tableData} />
      </table>
    </>
  );
};

export default Table;
