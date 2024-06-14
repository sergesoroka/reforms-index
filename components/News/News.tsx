import Divider from "components/Divider/Divider";
import Link from "next/link";

export default function News({ data }) {
  const formattedDate = (date) => {
    let day = date && date.substring(8, 10);
    let month = date && date.substring(5, 7);
    let year = date && date.substring(0, 4);
    return (
      <span>
        {day}.{month}.{year}
      </span>
    );
  };

  const contentRender =
    data &&
    data.data.content.map((item, i) => {
      return (
        <div key={i}>
          <div className="flex justify-between items-center text-xs px-2">
            <p className="font-semibold text-xs">{formattedDate(item.date)}</p>
            <div className="flex items-center gap-2 text-red-700 text-[16px] font-medium">
              <span className="text-red-700">{item.source}</span>
            </div>
          </div>
          <div
            className="text-[16px] px-2"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
          <Divider heading="" gray={true} openable={false} single={false} />
        </div>
      );
    });
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-[76px] h-[30px] bg-[#00B63E] text-white font-bold uppercase text-xs mx-2 px-3 py-2 mb-6">
          {data?.data.tag}
        </div>
        <div className="text-xs">
          <Link
            href={data ? data.data.round_link : ""}
            passHref
            target="_blank"
            className="no-underline"
          >
            <span className="text-gray-500 uppercase font-bold">
              Раунд {data?.data.round}
            </span>
          </Link>
        </div>
      </div>
      <h1 className="px-2">{data?.data.title}</h1>
      <Divider single={true} />

      {contentRender}
    </div>
  );
}
