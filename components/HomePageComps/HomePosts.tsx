import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

function HomePosts() {
  const { data, error } = useSWR(
    `https://vox-imore.ra-devs.tech/api/posts?lang=ua`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  const postsRender =
    data &&
    data.data.map((post, i) => {
      return (
        <div key={i} className="w-[256px]">
          <Link href={post.post_url}>
            <div
              style={{
                position: "relative",
                width: "256px",
                height: "144px",
                overflow: "hidden",
              }}
            >
              <Image
                // @ts-ignore
                src={post.post_img}
                alt={post.link}
                width={256}
                height={144}
              />
            </div>
            {/* <div
              style={{ position: "relative", width: "256px", height: "144px" }}
            >
              <Image
                src={post.post_img}
                alt="Picture of the author"
                sizes="256px"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
            </div> */}
            <div className="w-[87px] h-[4px] bg-red-600 mt-9 mb-6" />
            <h2>{post.post_title}</h2>
            <p className="mt-9 text-red-600">{post.author_name}</p>
          </Link>
        </div>
      );
    });

  return (
    <div className="flex w-full gap-12 items-start justify-center mt-6">
      {postsRender}
    </div>
  );
}

export default HomePosts;
