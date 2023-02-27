import rows from "./../../data/tableRows.json";
import columns from "./../../data/tableColumns.json";

const TableBody = ({tableData}) => {
  return (
    <tbody>
      {tableData.map((row, i) => (
        <tr key={i}>
          {columns.map(({ accessor }) => {
            const tData = row[accessor] ? row[accessor] : "——";
            return <td key={accessor}>{tData}</td>;
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
