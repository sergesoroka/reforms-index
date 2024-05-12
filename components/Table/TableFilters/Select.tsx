// @ts-nocheck
import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

const TableSelect = ({ labels, setLabels }) => {
  const [selected, setSelected] = useState(null);

  const handleSelectChange = (newLabel) => {
    setSelected(newLabel);
    if (!labels.includes(newLabel)) {
      setLabels([...labels, newLabel]);
    }
  };

  return (
    <>
      <Select.Root value={selected} onValueChange={handleSelectChange}>
        <Select.Trigger
          className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
          aria-label="Food"
        >
          <Select.Value>Select Categories</Select.Value>
          <Select.Icon className="text-violet11">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>

        <Select.Content className="px-3 py-3 overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          {/* <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronUpIcon />
          </Select.ScrollUpButton> */}
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                Fruits
              </Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item>
            </Select.Group>

            {/* <Select.Separator className="h-[1px] bg-gray-200 my-3" /> */}

            {/* <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                Vegetables
              </Select.Label>
              <Select.Item value="aubergine">Aubergine</Select.Item>
              <Select.Item value="broccoli">Broccoli</Select.Item>
              <Select.Item value="carrot" disabled>
                Carrot
              </Select.Item>
              <Select.Item value="courgette">Courgette</Select.Item>
              <Select.Item value="leek">Leek</Select.Item>
            </Select.Group>

            <Select.Separator className="h-[1px] bg-violet6 m-[5px]" />

            <Select.Group>
              <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                Meat
              </Select.Label>
              <Select.Item value="beef">Beef</Select.Item>
              <Select.Item value="chicken">Chicken</Select.Item>
              <Select.Item value="lamb">Lamb</Select.Item>
              <Select.Item value="pork">Pork</Select.Item>
            </Select.Group> */}
          </Select.Viewport>
          {/* <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton> */}
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default TableSelect;
