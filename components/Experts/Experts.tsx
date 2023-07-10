import Divider from "components/Divider/Divider";
import ExpertCart from "./ExpertCart";
import styles from "./Experts.module.css";

const expertInfo = [
  {
    id: 1,
    name: "Ростислав Аверчук",
    company: "Вокс Україна",
    img: "https://voxukraine.org/wp-content/uploads/2021/02/avrchuk.jpg",
  },
  {
    id: 2,
    name: "Олександра Бетлій",
    company: "Інститут економічних досліджень та політичних консультацій",
    img: "https://voxukraine.org/wp-content/uploads/2020/12/Betlij-e1610639574308.jpg",
  },
  {
    id: 3,
    name: "Вадим Бізяєв ",
    company: "Київська школа економіки",
    img: "https://kse.ua/wp-content/uploads/2019/05/vadim-1.jpg",
  },
  {
    id: 4,
    name: "Ростислав Аверчук",
    company: "Вокс Україна",
    img: "https://voxukraine.org/wp-content/uploads/2021/02/avrchuk.jpg",
  },
  {
    id: 5,
    name: "Олександра Бетлій",
    company: "Інститут економічних досліджень та політичних консультацій",
    img: "https://voxukraine.org/wp-content/uploads/2020/12/Betlij-e1610639574308.jpg",
  },
  {
    id: 6,
    name: "Вадим Бізяєв ",
    company: "Київська школа економіки",
    img: "https://kse.ua/wp-content/uploads/2019/05/vadim-1.jpg",
  },
];
function Experts() {
  return (
    <div>
      <Divider heading="Наші експерти" single={false} />
      <div className="flex gap-8 flex-wrap justify-between">
        {expertInfo.map((expert) => (
          <ExpertCart
            name={expert.name}
            id={expert.id}
            company={expert.company}
            img={expert.img}
            key={expert.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Experts;
