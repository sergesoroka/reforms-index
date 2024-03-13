import React, { useState } from "react";
import Divider from "components/Divider/Divider";

export default function NewsComment({ item }) {
  const [openChart, setOpenChart] = useState(false);

  return (
    <>
      <Divider
        heading={item && item.name}
        single={false}
        openable={true}
        open={openChart}
        work={item && item.work}
        position={item && item.position}
        // @ts-ignore
        setOpen={setOpenChart}
      />

      {openChart && (
        <div className="flex items-start justify-between gap-10 mb-6">
          <div className="font-medium text-sm text-gray-500 leading-relaxed">
            <div
              className="lg:pl-6"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </div>
          {/* <p className="w-[400px] text-right text-red-600 text-sm whitespace-nowrap">
            Раунд #{item && item.round_id}
          </p> */}
        </div>
      )}
    </>
  );
}
