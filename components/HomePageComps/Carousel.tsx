import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ChevronLeft from "components/IconsComponents/ChevronLeft";
import ChevronRight from "components/IconsComponents/ChevronRight";
import { AnimatePresence, motion } from "framer-motion";

export default function Carousel({ data }) {
  const [count, setCount] = useState(0);

  if (count > 9) setCount(0);
  if (count < 0) setCount(9);

  return (
    <div>
      <div className="flex justify-between items-center gap-12 mb-4">
        {/* <button onClick={() => setCount(count - 3)} className="w-10">
          <ChevronLeft />
        </button> */}

        <div className="h-[420px] overflow-hidden relative">
          <AnimatePresence>
            <div
              //             transition={{ duration: 1 }}
              className="w-full h-[420px] flex justify-between gap-20 overflow-y-hidden"
            >
              {data &&
                data.data.slice(count, count + 3).map((post, i) => {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: count * 2 }}
                      className="w-[261px] flex flex-col justify-start items-start"
                    >
                      <Link href={post.post_url} passHref target="_blank">
                        <div className="w-full h-auto  rounded-lg lg:h-[78px] xl:h-[134px] 2xl:h-[134px] overflow-hidden">
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
                        <div className="w-[87px] h-[4px] bg-red-600 mt-8 lg:mt-6 mb-2" />
                        <h3
                          className="text-grey-600 text-[18px]"
                          style={{ color: "#374151" }}
                        >
                          {post.post_title}
                        </h3>
                      </Link>
                      {post.authors.map((item, y) => (
                        <Link
                          key={y}
                          href={item.author_url ? item.author_url : ""}
                          passHref
                          target="_blank"
                        >
                          <p className="mt-2 text-red-600">
                            {item.author_name}
                          </p>
                        </Link>
                      ))}
                    </motion.div>
                  );
                })}
            </div>
          </AnimatePresence>
        </div>
        <button onClick={() => setCount(count + 3)} className="w-10">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
