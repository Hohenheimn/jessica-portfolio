import React from "react";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { FaBehance, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FooterMenuLinks } from "@/data/link";

const Footer = () => {
  return (
    <>
      <footer className=" w-11/12 max-w-[1366px] flex flex-col items-center gap-10 py-10 text-white mt-10">
        <h1 className=" text-[3rem] tracking-tighter">Contact Me @</h1>

        <ul className=" flex gap-5">
          {FooterMenuLinks.map((item, indx) => (
            <Link href={item.href} target="_blank" key={indx}>
              <li className=" flex items-center bg-[#abc54e] justify-center gap-2 text-2xl font-thin w-14 shadow-sm rounded-full aspect-square hover:bg-[#343a1c] duration-150">
                {item.title === "facebook" && (
                  <FaFacebookF className=" text-primary" />
                )}
                {item.title === "telegram" && (
                  <FaTelegramPlane className=" text-primary" />
                )}
                {item.title === "gmail" && (
                  <BiLogoGmail className=" text-primary" />
                )}
                {item.title === "linkedin" && (
                  <FaLinkedinIn className=" text-primary" />
                )}
                {item.title === "behance" && (
                  <FaBehance className=" text-primary" />
                )}
              </li>
            </Link>
          ))}
        </ul>
      </footer>
      <div className=" w-full flex justify-center py-2 bg-[#abc54e] text-primary font-bold">
        <p>@jekisa's portfolio</p>
      </div>
    </>
  );
};

export default Footer;
