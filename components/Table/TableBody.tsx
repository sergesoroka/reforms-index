import styles from "./Table.module.css";
import columns from "./../../data/tableColumns.json";

import Flag from "components/IconsComponents/Flag";
import CommentsIcon from "components/IconsComponents/CommentsIcon";
import Link from "next/link";

const TableBody = ({ tableData }) => {
  return (
    <tbody>
      {tableData &&
        tableData.map((row, i) => (
          <tr key={i}>
            {columns.map(({ accessor }) => {
              const tData = row[accessor] ? row[accessor] : "——";

              if (accessor == "npa_links[0].doc_type") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <Link
                      className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                      href={
                        row.npa_links[0]?.link ? row.npa_links[0]?.link : ""
                      }
                    >
                      {row.npa_links[0]?.doc_type}
                    </Link>
                    <p>
                      <Link
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[1]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[1]?.doc_type}
                      </Link>
                    </p>
                  </td>
                );
              }

              if (accessor == "npa_links[0].initiator") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.npa_links[0]?.initiator}
                  </td>
                );
              }

              if (accessor == "grade_total") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <span className="text-lg">{row.grade_total}</span>
                  </td>
                );
              }

              if (accessor == "title") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.title}
                    <p className="flex gap-4 text-[11px] font-medium pt-2 text-gray-500">
                      <span>Новина</span>
                      <span className="flex gap-1">
                        <CommentsIcon />
                        <span className="text-red-600">0</span>
                      </span>
                    </p>
                  </td>
                );
              }

              if (accessor == "date") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <p className="whitespace-nowrap">{row.date}</p>
                    <div>{row.flag == 1 ? <Flag /> : null}</div>
                  </td>
                );
              }

              if (accessor == "npa_links[0].doc_type") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <p>{row.npa_links[0]?.doc_type}</p>
                  </td>
                );
              } else {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {tData}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      <tr>
        <td></td>
      </tr>
    </tbody>
  );
};

export default TableBody;
