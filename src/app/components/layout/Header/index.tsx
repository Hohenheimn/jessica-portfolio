"use client";

import React from "react";

import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuLinks } from "@/data/link";

const Header = () => {
  const pathname = usePathname();
  return (
    <nav className=" sticky top-0 w-full flex justify-center bg-[#131626] py-5">
      <ul className=" flex items-center gap-10 text-white font-thin">
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
    </nav>
  );
};

export default Header;
