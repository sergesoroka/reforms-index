// @ts-nocheck
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";

export default function CheckBox({
  label,
  item,
  setDocTypes,
  docTypes,
  setResetFilters,
  resetFilters,
}) {
  const [checked, setChecked] = useState(() =>
    docTypes.includes(item.id) ? true : false
  );

  const subItems = item.sub_directions.map((d) => d.id);

  if (checked && !docTypes.includes(item.id)) {
    setDocTypes([...docTypes, ...subItems, item.id]);
  }

  if (!checked && docTypes.includes(item.id)) {
    setDocTypes(docTypes.filter((d) => d !== item.id));
  }

  return (
    <form>
      <div className="flex items-center">
        <Checkbox.Root
          checked={checked}
          onCheckedChange={setChecked}
          className={`${
            checked && "border border-red-500 h-[16px] w-[16px]"
          } hover:bg-gray-100 border border-gray-300 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px]  bg-white accent-border-red-500 outline-red-500 focus:border-red-400`}
          // defaultChecked
          id={item.id}
        >
          <Checkbox.Indicator className="text-red-500">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          className="pl-[10px] text-[15px]  text-gray-600 cursor-pointer select-none leading-6"
          htmlFor={item.id}
        >
          {label}
        </label>
      </div>
    </form>
  );
}
