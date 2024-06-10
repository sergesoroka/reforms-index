import Divider from "components/Divider/Divider";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Comment from "./Comment";
import ExpertArticles from "./ExpertArticles";

export default function ExpertProfile({ data, baseURL }) {
  const expert = data ? data.data : null;

  const ExpertWorks =
    data &&
    expert.works.map((item) => {
      return (
        <p key={item.name} className="text-sm font-medium text-red-700">
          <Link href={item.link}>{item.name}</Link>

          <span className="text-gray-500">
            <br />
            {item.position}
          </span>
        </p>
      );
    });

  return (
    <div>
      <Head>
        <title>{data && expert.name}</title>
      </Head>
      <div className="flex justify-center gap-10 mt-10">
        <Image
          src={data && expert.avatar}
          alt={data && expert.name}
          width={448}
          height={448}
          className="rounded-lg h-[448px] "
        />
        <div className="w-[448px] flex flex-col justify-between items-stretch">
          {/* <Divider single={true} /> */}
          <div className="">
            <h1 className="text-red-600">{data && expert.name}</h1>
            {/* <p className="text-sm font-medium text-gray-700">
              <span className="font-medium text-gray-500">Спеціалізація: </span>
              {expert?.specializaion &&
                expert?.specializaion.map((item) => (
                  <span key={item.id} className="block my-1">
                    {item.name}
                  </span>
                ))}
            </p> */}

            <div className="">{ExpertWorks}</div>
          </div>
          <Divider gray={true} openable={false} single={false} />
          <div
            className="font-medium text-sm text-gray-500 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data && expert.info }}
          />
        </div>
      </div>
      {data && expert.posts.length !== 0 && (
        <>
          <h2 className="my-10">{data && expert.expert_posts_text}</h2>
          <ExpertArticles baseURL={baseURL} data={data} />
        </>
      )}
      {data && expert.comments.length !== 0 && <h2>Коментарі</h2>};
      {data &&
        expert.comments.length !== 0 &&
        expert.comments.map((item) => (
          <div key={item.id}>
            <Comment item={item} />
          </div>
        ))}
    </div>
  );
}
