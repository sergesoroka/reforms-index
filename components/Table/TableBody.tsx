import styles from "./Table.module.css";
import columns from "./../../data/tableColumns.json";

import Flag from "components/IconsComponents/Flag";

const TableBody = ({ tableData }) => {
  return (
    <tbody>
      {tableData &&
        tableData.map((row, i) => (
          <tr key={i}>
            {columns.map(({ accessor }) => {
              const tData = row[accessor] ? row[accessor] : "——";

              if (accessor == "npa_links[0].initiator") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <p>{row.npa_links[0].initiator}</p>
                  </td>
                );
              }

              if (accessor == "date") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <p>{row.date}</p>
                    <div>{row.flag == 0 ? <Flag /> : null}</div>
                  </td>
                );
              }

              if (accessor == "npa_links[0].doc_type") {
                return (
                  <td key={accessor} className={styles.tableBodyCell}>
                    <p>{row.npa_links[0].doc_type}</p>
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
