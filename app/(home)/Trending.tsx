import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TrendingCardProps = {
  className?: string;
  post: Post;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`}
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
    >
      <div className="z-0 relative w-full h-full">
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt="tech"
          src={post?.image}
          placeholder="blur"
          sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px)50vw,
          33vw
          "
        />
      </div>
      <div className="z-1 absolute top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="z-2 absolute bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {post?.category}
        </h4>
        <div className=" text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  );
};

type Props = {
  trendingPosts: Array<Post>;
};
const Trending = ({ trendingPosts }: Props) => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          While exploring the wonders of nature, we uncover the profound
          connections that bind humanity and the natural world. We delve into
          indigenous cultures and their intimate relationship with their
          surroundings, gaining insights into ancient wisdom and sustainable
          practices
        </p>
      </div>
      {/* TO Redo */}
      {/* Flex Layout */}
      {/* <div className="flex gap-3 h-96">
        <div className=" basis-1/2 bg-wh-500 gap-3"></div>
        <div className="flex flex-col basis-1/2 gap-3">
          <div className=" basis-1/2 bg-wh-500"></div>
          <div className="flex basis-1/2 gap-3">
            <div className=" basis-1/2 bg-wh-500"></div>
            <div className=" basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div> */}

      {/* TO Redo */}
      {/* grid Layout */}
      <div className="sm:grid grid-cols-4 grid-rows-2 gap-5 sm:h-[600px] my-3">
        <TrendingCard
          className=" row-span-2 col-span-2 bg-wh-500"
          post={trendingPosts[0]}
        />
        <TrendingCard
          className=" row-span-1 col-span-2 bg-wh-500"
          post={trendingPosts[1]}
        />
        <TrendingCard
          className=" row-span-1 col-span-1 bg-wh-500"
          post={trendingPosts[2]}
        />
        <TrendingCard
          className=" row-span-1 col-span-1 bg-wh-500"
          post={trendingPosts[3]}
        />
      </div>
      <p className="text-sm">
        Encounter cascading waterfalls hidden within lush rainforests, wander
        through ancient, moss-covered forests, and witness the surreal beauty of
        untouched deserts. Let the untouched landscapes awaken your spirit of
        exploration and leave you in awe of our planet&apos;s untouched marvels.
      </p>
    </section>
  );
};

export default Trending;
