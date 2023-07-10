import React from "react";
import { motion } from "framer-motion";

const categories = [
  { category: "goverment", color: "#A10142" },
  { category: "finances", color: "#D53E4F" },
  { category: "monetary", color: "#F46D43" },
  { category: "business", color: "#FDAE61" },
  { category: "energy", color: "#FEE08B" },
];

function Bar({
  month,
  goverment,
  finances,
  monetary,
  business,
  energy,
}: {
  month: string;
  goverment: number;
  finances: number;
  monetary: number;
  business: number;
  energy: number;
}) {
  return (
    <div className="flex flex-col justify-center items-center w-12 mx-2">
      <motion.div
        className="w-8 bg-[#FEE08B]"
        style={{ height: `${energy}px` }}
      />

      <motion.div
        className="w-8  bg-[#FDAE61]"
        style={{ height: `${business}px` }}
      />
      <motion.div
        className="w-8 bg-[#F46D43]"
        style={{ height: `${monetary}px` }}
      />
      <motion.div
        className="w-8 bg-[#D53E4F]"
        style={{ height: `${finances}px` }}
      />
      <motion.div
        className="w-8 bg-[#A10142]"
        style={{ height: `${goverment}px` }}
      />
      <p className="mt-2 font-medium text-sm text-gray-600">{month}</p>
    </div>
  );
}

export default Bar;
