import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ExpertArticles({ baseURL, data }) {
  const [number, setNumber] = useState(3);

  let numberOfPosts = data && data.data.posts.length;

  const postsRender =
    data &&
    data.data.posts.slice(0, number).map((post, i) => {
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
      <div className="md:grid grid-cols-3 gap-4">{postsRender}</div>
      {numberOfPosts > number && (
        <div className="mt-10 text-center text-sm font-medium text-gray-500">
          <p
            className="cursor-pointer hover:text-red-500"
            onClick={() => setNumber(number + 3)}
          >
            Усі статті
          </p>
        </div>
      )}
    </>
  );
}
