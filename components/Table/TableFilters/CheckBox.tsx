// @ts-nocheck
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function CheckBox({ label, item, setDocTypes, docTypes }) {
  const [checked, setChecked] = useState(false);

  if (checked && !docTypes.includes(item)) {
    setDocTypes([...docTypes, item]);
  }

  if (!checked && docTypes.includes(item)) {
    setDocTypes(docTypes.filter((type) => type.id !== item.id));
  }

  return (
    <form>
      <div className="flex items-center">
        <Checkbox.Root
          checked={checked}
          onCheckedChange={setChecked}
          className={`${
            checked && "border border-red-500"
          } hover:bg-gray-100 border border-gray-300 flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px]  bg-white accent-border-red-500 outline-red-500 focus:border-red-400`}
          // defaultChecked
          id={item.id}
        >
          <Checkbox.Indicator className="text-red-500">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          className="pl-[10px] text-[15px] leading-none text-gray-400 cursor-pointer select-none capitalize"
          htmlFor={item.id}
        >
          {label}
        </label>
      </div>
    </form>
  );
}
