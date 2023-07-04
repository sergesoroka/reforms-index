import Bar from "./Bar";
import { AnimatePresence, motion } from "framer-motion";

const barChartData = [
  {
    id: 1,
    month: "Січень",
    goverment: 25,
    finances: 41,
    monetary: 14,
    business: 21,
    energy: 22,
  },
  {
    id: 2,
    month: "Лютий",
    goverment: 15,
    finances: 51,
    monetary: 68,
    business: 32,
    energy: 12,
  },
  {
    id: 3,
    month: "Березень",
    goverment: 23,
    finances: 42,
    monetary: 27,
    business: 24,
    energy: 42,
  },
  {
    id: 4,
    month: "Квітень",
    goverment: 33,
    finances: 41,
    monetary: 23,
    business: 31,
    energy: 21,
  },
];

const labels = [
  { name: "Goverment", color: "#A10142" },
  { name: "Finance", color: "#D53E4F" },

  { name: "Monetary", color: "#F46D43" },
  { name: "Business", color: "#FDAE61" },
  { name: "Energy", color: "#FEE08B" },
];

const variants = {
  visible: (i) => ({
    opacity: 1,

    transition: {
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
  hidden: { opacity: 0 },
};

const renderBarChart = barChartData.map((item, i) => (
  <motion.div
    custom={i}
    initial="hidden"
    animate="visible"
    variants={variants}
    key={item.id}
  >
    <Bar
      month={item.month}
      goverment={item.goverment}
      finances={item.finances}
      monetary={item.monetary}
      business={item.business}
      energy={item.energy}
    />
  </motion.div>
));

const renderLabels = labels.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: i * 0.2 } }}
    className="flex items-center gap-2 text-sm"
  >
    <div className={`w-4 h-4 bg-[${item.color}]`} />
    <p style={{ color: `${item.color}` }}>{item.name}</p>
  </motion.div>
));

function BarChart() {
  return (
    <>
      <h2 className="text-xl mb-8">Военні закони</h2>
      <h3 className="text-sm text-gray-600 mb-1 underline decoration-red-600 decoration-4 underline-offset-8">
        Дата ухвалення, категорії та ініціатори
      </h3>

      <hr className="mt-1" />
      <div className="flex gap-6 my-8 justify-center items-center">
        {renderLabels}
      </div>
      <div className="flex justify-center items-end">{renderBarChart}</div>
    </>
  );
}

export default BarChart;
