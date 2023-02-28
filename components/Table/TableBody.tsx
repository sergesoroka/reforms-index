import styles from './Table.module.css'
import columns from "./../../data/tableColumns.json";

const TableBody = ({tableData}) => {
  return (
    <tbody>
      {tableData.map((row, i) => (
        <tr key={i}>
          {columns.map(({ accessor }) => {
            const tData = row[accessor] ? row[accessor] : "——";
            return <td key={accessor} className={styles.tableBodyCell}>{tData}</td>;
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
