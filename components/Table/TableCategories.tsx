import { FC, useState, useEffect } from "react";
import rows from "./../../data/tableRows.json";

import CheckedIcons from "components/IconsComponents/CheckedIcons";
import Divider from "components/Divider/Divider";

// @ts-ignore
const TableCategories: FC = ({ handleFilters }) => {
  const [Checked, setChecked] = useState([]);
  const [openFilters, setOpenFilters] = useState(false);

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
    <>
      <Divider
        heading="Фільтри"
        single={false}
        openable={true}
        open={openFilters}
        // @ts-ignore
        setOpen={setOpenFilters}
      />
      {/* <div onClick={() => resetFilters()}>Сборисити фільтри</div> */}
      {openFilters && <h2>filters</h2>}
    </>
  );
};

export default TableCategories;
