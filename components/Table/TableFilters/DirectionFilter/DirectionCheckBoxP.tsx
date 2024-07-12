// @ts-nocheck
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import {useEffect, useState} from "react";

export default function DirectionCheckBoxP({
  label,
  hidden,
  active,
  checkBoxKey,
  setChildData
}) {

    const [checked, setChecked] = useState(() =>
            !!active
        );

    useEffect(() => {
        setChecked(active)
    }, [active]);


    useEffect(() => {

        if (checked){
            setChildData([{value:checkBoxKey,state:'add'}])
        } else {
            setChildData([{value:checkBoxKey,state:'remove'}])
        }


    }, [checked]);

  return (
                      <p
                        onClick={() => {
                            setChecked(!checked)
                        }}
                        key={checkBoxKey.id}
                        className={`${
                            hidden
                            ? "text-gray-300 pointer-events-none"
                            : "text-gray-500 cursor-pointer hover:text-gray-700"
                        } capitalize select-none ${
                          checked &&
                          !hidden &&
                          "text-red-600"
                        }`}
                      >
                        {label}
                      </p>
  );
}
