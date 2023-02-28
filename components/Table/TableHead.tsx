import { FC, useState } from "react";
import columns from "../../data/tableColumns.json";
import Arrow from "../icons/table_arrow.svg";
import ArrowActive from "../icons/table_arrow_red.svg";
import ArrowActiveReverse from '../icons/table_arrow_red_reverse.svg'
import styles from "./Table.module.css";

// @ts-ignore
const TableHead: FC = ({ handleSorting }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (accessor: string) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ accessor, label, sortable }) => (
          <th
            key={accessor}
            onClick={sortable ? () => handleSortingChange(accessor) : null}
            className={
              sortField === accessor
                ? styles.tableHeadCellActive
                : styles.tableHeadCell
            }
          >
            <div
              style={{
                height: "64px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>{label}</p>
              {accessor !== "subtheme" && accessor !== "name" ? (
                sortField === accessor ? (
                  (order === "asc" ? <ArrowActive /> : <ArrowActiveReverse />)
                ) : (
                  <Arrow />
                )
              ) : null}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
