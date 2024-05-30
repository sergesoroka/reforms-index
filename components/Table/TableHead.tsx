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
  activeColumn = [],
}) => {
  return (
    <thead>
      <tr>
        {columns.map(({ accessor, label, sortable }) => (
          <th
            key={accessor}
            onClick={() => {
              // setResetSorting(false);

              if (sortField.length !== 0) {
                let uniq = true;
                sortField.forEach(function (key, index) {
                  let sort_key = Object.keys(key)[0];
                  if (sort_key == accessor) {
                    uniq = false;
                    if (key[sort_key] == "DESC") {
                      key[sort_key] = "ASC";
                    } else {
                      key[sort_key] = "DESC";
                    }
                    activeColumn[accessor] = key[sort_key];
                  }
                });
                if (uniq) {
                  sortField.push({ [accessor]: "DESC" });
                  activeColumn[accessor] = "DESC";
                }
              } else {
                sortField.push({ [accessor]: "DESC" });
                activeColumn[accessor] = "DESC";
              }

              // if (resetSorting) setResetSorting(true);
            }}
            className={
              sortField.includes(accessor)
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
              {sortField.forEach(function (key, index) {
                let sort_key = Object.keys(key)[0];
                if (sort_key == accessor) {
                  activeColumn[accessor] = key[sort_key];
                }
              })}
              {accessor !== "subtheme" && accessor !== "name" && sortable ? (
                activeColumn[accessor] !== undefined ? (
                  activeColumn[accessor] === "ASC" ? (
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
