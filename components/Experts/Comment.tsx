import React, { useState } from "react";
import Divider from "components/Divider/Divider";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Comment({ item }) {
  const [openChart, setOpenChart] = useState(false);

  return (
    <>
      <Divider
        heading={item && item.news_title}
        single={false}
        openable={true}
        open={openChart}
        // @ts-ignore
        setOpen={setOpenChart}
      />
      {openChart && (
        <div className="flex items-start justify-between gap-10 mb-6">
          <div className="font-medium text-sm text-gray-500 leading-relaxed">
            <div
              className="lg:pl-6 mt-4"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </div>
          <p className="w-[400px] text-right text-red-600 text-sm whitespace-nowrap  mt-4">
            <Link
              href={item && item.round_link}
              passHref
              target="_blank"
              // className="w-full"
            >
              Раунд #{item && item.round_id}
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
