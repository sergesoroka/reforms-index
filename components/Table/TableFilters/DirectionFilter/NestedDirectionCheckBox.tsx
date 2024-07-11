// @ts-nocheck
import * as Checkbox from "@radix-ui/react-checkbox";
import {CheckIcon} from "@radix-ui/react-icons";
import {useEffect,useState} from "react";
import DirectionCheckBoxP from "./DirectionCheckBoxP";

const monthNames = {
    "01": "Січень",
    "02": "лютий",
    "03": "березень",
    "04": "квітень",
    "05": "травень",
    "06": "червень",
    "07": "липень",
    "08": "серпень",
    "09": "вересень",
    "10": "жовтень",
    "11": "листопад",
    "12": "грудень",
};

export default function NestedDirectionCheckBox({
                                           label, dataSet,values,setValues
                                       }) {
    const [checked, setChecked] = useState(
        !!values.some(item => dataSet.includes(item))
    );
    const [childData, setChildData] = useState([]);
    const [nestedValues, setNestedValues]=useState(dataSet.map((item) =>item))


    useEffect(() => {

        if (childData[0]){
            if (childData[0]['state']==='add'){
                setValues(prevArray => ([...prevArray, childData[0]['value']]).filter(onlyUnique))
            } else{
                setValues(prevArray=> prevArray.filter(item => item!==childData[0]['value']))
            }
        }

        if(values.length<1){
            setChecked(false)
        }


    }, [childData]);

    const toggleNest=(()=>{
        if (!checked){
            setValues(prevArray => [...prevArray, ...nestedValues])
        } else {
            setValues(prevArray=> prevArray.filter(item => !dataSet.includes(item)))
        }
        setChecked(!checked)

    });

    function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
    }


    return (
        <div key={label} className="flex items-center justify-start gap-6 ">
            <form>
                <div className="flex items-center">
                    <Checkbox.Root
                        checked={checked}
                        onClick={toggleNest}
                        className={`${checked && "border border-red-500"} hover:bg-gray-100 border border-gray-300 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px]  bg-white accent-border-red-500 outline-red-500 focus:border-red-400`}
                        id={label}
                    >
                        <Checkbox.Indicator className="text-red-500">
                            <CheckIcon/>
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
            <div className="flex justify-start items-center gap-4">
                {checked && dataSet.map((item) => {
                    return (
                        <DirectionCheckBoxP
                            key={item.id}
                            label={item.name}
                            checkBoxKey={item}
                            active={!!values.includes(item)}
                            hidden={item.status == "empty"}
                            setChildData={setChildData}
                        />
                    );

                })}

            </div>
        </div>
    );
}
