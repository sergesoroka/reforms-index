import { FC, useState } from "react";
import rows from "./../../data/tableRows.json";

// @ts-ignore
const TableCategories: FC = ({ handleFilters }) => {
  const [Checked, setChecked] = useState([]);

  console.log('Checked: ', Checked);
  

  const handleCategoriesChange = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    handleFilters(newChecked);
  };
  return (
    <ul>
      {rows.map(({ id, subtheme }) => (
        <li key={id} onClick={() => handleCategoriesChange(subtheme)}>
          {subtheme}
        </li>
      ))}
    </ul>
  );
};

export default TableCategories;
