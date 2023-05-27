import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "/public/assets/ad-2.png";
import AboutProfile from "/public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 px-5 text-wh-50 text-xs font-bold text-center py-3">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          className="hidden md:block my-8 w-full"
          alt="advert2"
          src={Ad2}
          width={500}
          height={1000}
          placeholder="blur"
        />
      </div>
      <h4 className="bg-wh-900 px-5 text-wh-50 text-xs font-bold text-center py-3">
        About the blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          alt="about profile"
          width={500}
          height={1000}
          src={AboutProfile}
          placeholder="blur"
        />
      </div>
      <h4 className="text-wh-500 px-5 text-xs font-bold text-center py-3">
        Geoffrey Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Join us as we dive into the depths of nature&apos;s mysteries and emerge
        with a renewed sense of awe and appreciation for the untamed world that
        awaits us.
      </p>
    </section>
  );
};

export default Sidebar;
