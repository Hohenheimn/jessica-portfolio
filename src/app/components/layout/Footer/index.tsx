import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaBehance, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-11/12 max-w-[1366px] flex gap-10 py-10 text-white mt-10">
      <h1 className=" text-[5rem] leading-[5rem] tracking-tighter">
        CONTACT <span className=" text-secondary font-bold">ME</span>
      </h1>

      <ul className=" space-y-5">
        <li className=" flex items-center gap-2 text-2xl font-thin">
          <FaTelegramPlane /> jessica_telegram
        </li>
        <li className=" flex items-center gap-2 text-2xl font-thin">
          <BiLogoGmail /> jessica@gmail.com
        </li>
        <li className=" flex items-center gap-2 text-2xl font-thin">
          <FaLinkedinIn /> jessica_linkedin
        </li>
        <li className=" flex items-center gap-2 text-2xl font-thin">
          <FaBehance />
          jessiace_behance
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
