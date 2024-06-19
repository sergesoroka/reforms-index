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
          className="shadow-blackA4 hover:bg-violet3 flex h-[20px] w-[20px] appearance-none items-center justify-center rounded-[4px] checked:bg-red-500 bg-gray-100 border-red-500 outline-red-500 focus:border-red-400"
          defaultChecked
          id="c1"
        >
          <Checkbox.Indicator className="text-violet11">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          className="pl-[10px] text-[15px] leading-none text-gray-400 select-none capitalize"
          htmlFor="c1"
        >
          {label}
        </label>
      </div>
    </form>
  );
}
