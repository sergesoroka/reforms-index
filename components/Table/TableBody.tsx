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
              const tData = row[accessor];

              if (accessor == "id") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <div>{row.id}</div>
                    <div>{row.flag == 1 ? <Flag /> : null}</div>

                    {/* <p className="text-[12px] text-gray-600 mt-1">{row.act}</p> */}
                  </td>
                );
              }

              if (accessor == "npa_links[0].doc_type") {
                return (
                  <td
                    key={accessor}
                    className={styles.tableBodyCell}
                    style={{ textTransform: "capitalize" }}
                  >
                    {row.npa_links[0]?.doc_type}
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
              if (accessor == "grade1") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.grade_1}
                  </td>
                );
              }
              if (accessor == "grade2") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.grade_2}
                  </td>
                );
              }
              if (accessor == "grade3") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.grade_3}
                  </td>
                );
              }
              if (accessor == "grade4") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.grade_4}
                  </td>
                );
              }
              if (accessor == "grade5") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.grade_5}
                  </td>
                );
              }
              if (accessor == "grade6") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.grade_6}
                  </td>
                );
              }

              if (accessor == "grade_total") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <span className="text-orange-700">{row.grade_total}</span>
                  </td>
                );
              }

              if (accessor == "title") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.title}
                    <div className="flex gap-4 text-[11px] font-medium pt-2 text-gray-500">
                      <Link
                        href={`https://reforms-index.vercel.app/news/${row?.id}`}
                      >
                        <span>Новина</span>
                      </Link>
                      {row.npa_links.map((item, i) => (
                        <p key={item.id}>
                          <Link href={item.link}>
                            {row.npa_links.length == 1 &&
                              row.npa_links.length !== 0 &&
                              "Документ"}
                            {row.npa_links.length > 1 && <span>Документ </span>}
                            {row.npa_links.length > 1 && i + 1}
                          </Link>
                        </p>
                      ))}
                      <Link
                        href={`https://reforms-index.vercel.app/news/comments/${row?.id}`}
                      >
                        <span className="flex gap-1">
                          {row.comments_count > 0 && "Коментарі:"}
                          <span className="text-red-600">
                            {row.comments_count > 0 && row.comments_count}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </td>
                );
              }

              if (accessor == "date") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <p className="whitespace-nowrap">{row.date}</p>
                  </td>
                );
              }

              if (accessor == "code") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {Object.keys(row.code).map((item, i) => (
                      <p
                        className="cursor-pointer"
                        key={i}
                        title={row.code[item]}
                      >
                        {item}
                      </p>
                    ))}
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
