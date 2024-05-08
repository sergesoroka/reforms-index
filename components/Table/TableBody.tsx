import styles from "./Table.module.css";
import columns from "./../../data/tableColumns.json";

import Flag from "components/IconsComponents/Flag";
import CommentsIcon from "components/IconsComponents/CommentsIcon";
import a from "next/link";
import Link from "next/link";

const TableBody = ({ tableData }) => {
  return (
    <tbody>
      {tableData &&
        tableData.map((row, i) => (
          <tr key={i}>
            {columns.map(({ accessor }) => {
              const tData = row[accessor];

              if (accessor == "npa_links[0].doc_type") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                      href={
                        row.npa_links[0]?.link ? row.npa_links[0]?.link : ""
                      }
                    >
                      {row.npa_links[0]?.doc_type}
                    </a>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[1]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[1]?.doc_type}
                      </a>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[2]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[2]?.doc_type}
                      </a>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[3]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[3]?.doc_type}
                      </a>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[4]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[4]?.doc_type}
                      </a>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[5]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[5]?.doc_type}
                      </a>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[6]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[6]?.doc_type}
                      </a>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[7]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[7]?.doc_type}
                      </a>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[8]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[8]?.doc_type}
                      </a>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 capitalize whitespace-nowrap hover:text-red-600"
                        href={
                          row.npa_links[9]?.link ? row.npa_links[1]?.link : ""
                        }
                      >
                        {row.npa_links[9]?.doc_type}
                      </a>
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
                    <span className="text-lg">{row.grade_total}</span>
                  </td>
                );
              }

              if (accessor == "title") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    {row.title}
                    <p className="flex gap-4 text-[11px] font-medium pt-2 text-gray-500">
                      <Link
                        href={`https://reforms-index.vercel.app/news/${row.npa_links[0]?.id}`}
                      >
                        <span>Новина</span>
                      </Link>
                      <Link
                        href={`https://reforms-index.vercel.app/news/comments/${row.npa_links[0]?.id}`}
                      >
                        <span className="flex gap-1">
                          <CommentsIcon />
                          <span className="text-red-600">
                            {row.comments_count}
                          </span>
                        </span>
                      </Link>
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
