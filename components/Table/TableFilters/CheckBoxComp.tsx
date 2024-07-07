// @ts-nocheck
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function CheckBoxComp({
  label,
  item,
  values,
  setValues,
  setSelected,
  selected,
}) {
  const [checked, setChecked] = useState(() =>
    values.includes(item) ? true : false
  );

  if (checked && !selected.includes(item.slice(0, 4))) {
    console.log("check");

    // setValues([...values, item]);
    setSelected([...selected, item.slice(0, 4)]);
  }

  if (!checked && selected.includes(item.slice(0, 4))) {
    setValues(values.filter((v) => v !== item));
    setSelected(selected.filter((v) => v !== item.slice(0, 4)));
  }

  return (
    <form>
      <div className="flex items-center">
        <Checkbox.Root
          checked={checked}
          onCheckedChange={setChecked}
          className={`${
            checked && "border border-red-500"
          } hover:bg-gray-100 border border-gray-300 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px]  bg-white accent-border-red-500 outline-red-500 focus:border-red-400`}
          // defaultChecked
          id={label}
        >
          <Checkbox.Indicator className="text-red-500">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          className="pl-[10px] text-[15px]  text-gray-600  select-none leading-6"
          htmlFor={label}
        >
          {label}
        </label>
      </div>
    </form>
  );
}
