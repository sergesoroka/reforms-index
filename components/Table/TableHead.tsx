// @ts-nocheck
import { FC, useState } from "react";
import columns from "../../data/tableColumns.json";
import Arrow from "../icons/table_arrow.svg";
import ArrowActive from "../icons/table_arrow_red.svg";
import ArrowActiveReverse from "../icons/table_arrow_red_reverse.svg";
import styles from "./Table.module.css";

// @ts-ignore
const TableHead: FC = ({
  setSortField,
  sortField,
  ascOrder,
  setAscOrder,
  setResetSorting,
  resetSorting,
}) => {
  return (
    <thead>
      <tr>
        {columns.map(({ accessor, label, sortable }) => (
          <th
            key={accessor}
            onClick={() => {
              sortField.push(accessor);
              if (resetSorting) setResetSorting(false);
            }}
            className={
              sortField.includes(accessor) && resetSorting
                ? styles.tableHeadCellActive
                : sortable
                ? styles.tableHeadCell
                : styles.tableHeadCellDisable
            }
          >
            <div
              onClick={() => setAscOrder(!ascOrder)}
              style={{
                height: "74px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <p>{label}</p>
              {accessor !== "subtheme" && accessor !== "name" && sortable ? (
                sortField.includes(accessor) ? (
                  ascOrder ? (
                    <ArrowActive />
                  ) : (
                    <ArrowActiveReverse />
                  )
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
