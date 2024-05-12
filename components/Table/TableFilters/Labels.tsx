import React from "react";
import CloseIcon from "components/IconsComponents/CloseIcon";

export default function Labels({ labels, setLabels }) {
  const deleteLabel = (i) => {
    const updatedLabels = labels.filter((item, index) => index !== i);
    setLabels(updatedLabels);
  };
  return (
    <div className="flex gap-3 mb-4">
      {labels.length > 0 && (
        <span className="mt-[2px] font-semibold antialiased text-[16px] text-slate-700">
          Ініціатори:
        </span>
      )}
      {labels.length > 0 &&
        labels.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 font-medium antialiased bg-slate-700 text-[13px] text-white rounded-sm  select-none px-2 py-1"
          >
            <span>{item.short_name}</span>
            <span onClick={() => deleteLabel(i)} className="cursor-pointer">
              <CloseIcon />
            </span>
          </div>
        ))}
    </div>
  );
}
