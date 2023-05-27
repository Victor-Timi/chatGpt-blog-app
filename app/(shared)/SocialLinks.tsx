import React from "react";
import Twitter from "public/assets/social_twitter.png";
import Instagram from "public/assets/social_instagram.png";
import Google from "public/assets/social_google.png";
import Facebook from "public/assets/social_facebook.png";
import Discord from "public/assets/social_discord.png";
import Image from "next/image";
type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : " "} hover:opacity-50`}
          src={Twitter}
          width={20}
          height={20}
          alt="twitter"
        />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : " "} hover:opacity-50`}
          src={Facebook}
          width={20}
          height={20}
          alt="facebook"
        />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : " "} hover:opacity-50`}
          src={Google}
          width={20}
          height={20}
          alt="google"
        />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : " "} hover:opacity-50`}
          src={Instagram}
          width={20}
          height={20}
          alt="instagram"
        />
      </a>
      <a href="https://discord.com" target="_blank" rel="noreferrer">
        <Image
          className={`${isDark ? "brightness-0" : " "} hover:opacity-50`}
          src={Discord}
          width={20}
          height={20}
          alt="discord"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
