import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import Spiner from "components/Spiner";
import { useRouter } from "next/router";

function HomePosts({ baseURL }) {
  const router = useRouter();
  const { locale } = router;

  const { data, error, isLoading } = useSWR(
    `${baseURL}/api/posts?lang=${locale}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) return <Spiner />;
  const postsRender =
    data &&
    data.data.map((post, i) => {
      return (
        <div key={i} className="w-full h-auto text-grey-600">
          <Link href={post.post_url} passHref target="_blank">
            <div className="w-full h-auto  rounded-lg lg:h-[78px] xl:h-[120px] 2xl:h-[130px] overflow-hidden">
              <Image
                // @ts-ignore
                src={post.post_img}
                alt="posts"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>

            <div className="w-[87px] h-[4px] bg-red-600 mt-8 lg:mt-6 mb-6" />
            <h3
              className="text-grey-600 text-[18px]"
              style={{ color: "#374151" }}
            >
              {post.post_title}
            </h3>
            <p className="mt-9 mb-6 text-red-600">{post.author_name}</p>
          </Link>
        </div>
      );
    });

  return (
    <div className="lg:flex w-full lg:gap-8 xl:gap-10 2xl:gap-12 items-start justify-center mt-6">
      {postsRender}
    </div>
  );
}

export default HomePosts;
