import { FC, useState } from "react";
import columns from "../../data/tableColumns.json";
import Arrow from "../icons/table_arrow.svg";

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
            style={{
              padding: "0.4rem 1rem",
              borderTop: "1px solid #ededed",
              fontWeight: "100",
              fontSize: "0.7rem",
            }}
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
              {accessor !== "subtheme" && <Arrow />}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
