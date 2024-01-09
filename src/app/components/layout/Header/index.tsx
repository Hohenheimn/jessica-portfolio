"use client";

import React, { useState } from "react";

import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImMenu3 } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";

import { menuLinks } from "@/data/link";

import MobileMenu from "./MobileMenu";

const Header = () => {
  const pathname = usePathname();
  const [showMobile, setShowMobile] = useState(false);
  return (
    <>
      <nav className=" sticky top-0 w-full flex justify-center bg-[#131626] py-5 z-40">
        <ul className=" hidden lg:flex items-center gap-10 text-white font-thin">
          {menuLinks.slice(0, 4).map((item, indx) => (
            <Link
              key={indx}
              href={item.url}
              className={`${pathname === item.url && "text-secondary"}`}
            >
              <li key={indx}>{item.label}</li>
            </Link>
          ))}
          <li>
            <Image
              src="/images/jekisa-logo.png"
              alt="logo"
              width={50}
              height={50}
            />
          </li>
          {menuLinks.slice(4).map((item, indx) => (
            <Link
              key={indx}
              href={item.url}
              className={`${pathname === item.url && "text-secondary"}`}
            >
              <li key={indx}>{item.label}</li>
            </Link>
          ))}
        </ul>
        <aside className="w-11/12 flex justify-between items-center lg:hidden">
          <aside>
            <Image
              src="/images/jekisa-logo.png"
              alt="logo"
              width={40}
              height={40}
            />
          </aside>
          <ImMenu3
            className="text-[#afd232] text-3xl"
            onClick={() => setShowMobile(!showMobile)}
          />
        </aside>
      </nav>
      {showMobile && <MobileMenu setShowMobile={setShowMobile} />}
    </>
  );
};

export default Header;
