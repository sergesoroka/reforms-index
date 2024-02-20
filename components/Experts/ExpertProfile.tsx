import Image from "next/image";
import Divider from "components/Divider/Divider";
import ExpertArticles from "./ExpertArticles";
import Link from "next/link";
import { useState } from "react";

export default function ExpertProfile({ data, baseURL }) {
  const [openChart, setOpenChart] = useState(false);
  const expert = data ? data.data : null;

  const ExpertWorks =
    data &&
    expert.works.map((item) => {
      return (
        <p key={item.name} className="text-sm font-medium text-red-700">
          <Link href={item.link}>{item.name}</Link>

          <span className="text-gray-500">
            {" | "}
            {item.position}
          </span>
        </p>
      );
    });

  return (
    <div className="w-full">
      <div className="md:flex items-start justify-start gap-10 mt-10">
        <Image
          src={data && expert.avatar}
          alt={data && expert.name}
          width={160}
          height={160}
          style={{
            borderRadius: "100%",
            height: "160px",
            marginBottom: "1rem",
          }}
        />
        <div className="w-full">
          <h1>{data && expert.name}</h1>
          <Divider single={true} />
          <div className="md:flex justify-between gap-10">
            <p className="w-[500px] text-sm font-medium text-gray-700">
              <span className="font-medium text-gray-500">Спеціалізація: </span>
              {data && expert.specialization}
            </p>

            <div className="w-[400px] md:text-right">{ExpertWorks}</div>
          </div>
          <Divider gray={true} openable={false} single={false} />
          <div
            className="font-medium text-sm text-gray-500 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data && expert.info }}
          />
        </div>
      </div>
      <h2 className="my-10">{data && expert.expert_posts_text}</h2>
      <ExpertArticles baseURL={baseURL} data={data} />

      <h2>Коментарі</h2>
      <Divider
        heading="Закон про протидію цькуванню на роботі"
        single={false}
        openable={true}
        open={openChart}
        // @ts-ignore
        setOpen={setOpenChart}
      />
      {openChart && (
        <div className="flex items-start justify-between gap-10">
          <p className="font-medium text-sm text-gray-500 leading-relaxed">
            Нові норми щодо захисту працівників від мобінгу (цькування) на
            роботі є частиною проєвропейського антидискримінаційного
            законодавства. Вони забороняють мобінг на робочому місці, визначають
            у яких діях це може проявлятися, а також передбачають зобов’язання
            роботодавця попереджати такі дії з боку працівників. Власне
            виконання нововведень покладається безпосередньо на роботодавця.
          </p>
          <p className="w-[400px] text-right text-red-600 text-sm">Раунд #4</p>
        </div>
      )}
    </div>
  );
}
