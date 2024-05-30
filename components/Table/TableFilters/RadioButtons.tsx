// @ts-nocheck
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";

export default function RadioButtons() {
  const [value, setValue] = useState("Initiator");
  return (
    <form>
      <RadioGroup.Root
        defaultValue="Initiator"
        className="flex items-center gap-4 mb-4"
        aria-label="View density"
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setValue("Initiator")}
        >
          <RadioGroup.Item
            checked={value === "Initiator"}
            value="Initiator"
            className="flex items-center justify-center w-[20px] h-[20px] bg-gray-200 rounded-full"
            id="r1"
          >
            <RadioGroup.Indicator
              className={`w-[9px] h-[9px] data-[state=checked]:bg-red-700 bg-gray-600 rounded-full`}
            />
          </RadioGroup.Item>
          <label
            className="text-gray-600 text-[15px] leading-none pl-[12px]"
            htmlFor="r1"
          >
            Initiator
          </label>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setValue("DocType")}
        >
          <RadioGroup.Item
            checked={value === "DocType"}
            value="DocType"
            className="flex items-center justify-center w-[20px] h-[20px] bg-gray-200 rounded-full"
            id="r2"
          >
            <RadioGroup.Indicator
              className={`w-[9px] h-[9px] data-[state=checked]:bg-red-700 bg-gray-600 rounded-full`}
            />
          </RadioGroup.Item>
          <label
            className="text-gray-600 text-[15px] leading-none pl-[12px]"
            htmlFor="r2"
          >
            Doc Type
          </label>
        </div>
      </RadioGroup.Root>
    </form>
  );
}
