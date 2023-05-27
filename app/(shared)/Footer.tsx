import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className=" bg-wh-900 text-wh-50 px-10 py-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* first column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Nature has always been a wellspring of inspiration, wonder, and
            solace for humanity. In this blog, we embark on a journey to
            celebrate and rediscover the untamed beauty of our world.
          </p>
          <p> &copy; Blog of the future All Rights Reserved</p>
        </div>
        {/* SECOnd column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">LINKS</h4>
          <p className="my-5">Terms and Conditions </p>
          <p className="my-5">Privacy Policy </p>
          <p className="">Blog </p>
        </div>
        {/* third column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">CONTACT US</h4>
          <p className="my-5">Name: John Doe</p>
          <p className="my-5">Email: johndoe@example.com</p>
          <p className="my-5">Phone: +1 555-123-4567 </p>
          <p className="">Address: 123 Main Street, Anytown, USA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
