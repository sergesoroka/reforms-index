import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import Spiner from "components/Spiner";
import { useRouter } from "next/router";

function HomePosts() {
  const router = useRouter();
  const { locale } = router;

  const { data, error, isLoading } = useSWR(
    `https://vox-imore.ra-devs.tech/api/posts?lang=${locale}`,
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
        <div key={i} className="w-[256px] text-grey-600">
          <Link href={post.post_url} passHref target="_blank">
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

            <div className="w-[87px] h-[4px] bg-red-600 mt-9 mb-6" />
            <h3 className="text-grey-600">{post.post_title}</h3>
            <p className="mt-9 mb-6 text-red-600">{post.author_name}</p>
          </Link>
        </div>
      );
    });

  return (
    <div className="lg:flex w-full gap-12 items-start justify-center mt-6">
      {postsRender}
    </div>
  );
}

export default HomePosts;
