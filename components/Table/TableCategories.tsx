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
      {openFilters && (
        <ul className="mb-8">
          {/* @ts-ignore */}
          {rows.map(({ id, subtheme }) => (
            <div
              onClick={() => handleCategoriesChange(subtheme)}
              key={id}
              className="flex justify-start items-center gap-3 mx-2 cursor-pointer"
            >
              <CheckedIcons checked={Checked.includes(subtheme)} />
              <li className=" text-sm leading-6">{subtheme}</li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default TableCategories;
