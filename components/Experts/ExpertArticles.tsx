import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

export default function ExpertArticles({ baseURL }) {
  const router = useRouter();
  const { locale } = router;
  const { data } = useSWR(`${baseURL}/api/posts?lang=${locale}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const postsRender =
    data &&
    data.data.slice(0, 3).map((post, i) => {
      return (
        <div key={i} className="h-auto text-grey-600 mb-12">
          <Link href={post.post_url} passHref target="_blank">
            <div className="flex items-start gap-4">
              <div className="overflow-hidden">
                <Image
                  // @ts-ignore
                  src={post.post_img}
                  alt="posts"
                  width="150"
                  height="100"
                  // sizes="100vw"
                  // className="w-full h-auto"
                />
              </div>

              <h3
                className="w-[200px] text-grey-600 text-[14px] mt-0"
                style={{ color: "#374151" }}
              >
                {post.post_title}
              </h3>
            </div>
          </Link>
        </div>
      );
    });
  return (
    <>
      <div className="md:flex justify-between items-start gap-4">
        {postsRender}
      </div>
      <div className="mt-10 text-center text-sm font-medium text-gray-500">
        <p>Усі статті</p>
      </div>
    </>
  );
}
