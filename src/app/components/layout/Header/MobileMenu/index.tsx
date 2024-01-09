import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";

import { menuLinks } from "@/data/link";

const MobileMenu = ({ setShowMobile }: { setShowMobile: Function }) => {
  const pathname = usePathname();
  return (
    <ul
      className={` text-white fixed top-0 left-0 w-full h-screen bg-[#141625] z-50 p-10 overflow-auto`}
    >
      <li className=" w-full flex justify-between items-center mb-10">
        <Image
          src="/images/jekisa-logo.png"
          alt="logo"
          width={80}
          height={80}
        />
        <IoCloseSharp
          className=" text-3xl text-white"
          onClick={() => setShowMobile(false)}
        />
      </li>
      {menuLinks.map((item, indx) => (
        <Link
          key={indx}
          href={item.url}
          className={`${pathname === item.url && "text-secondary"}`}
        >
          <li key={indx} className=" mb-5 text-3xl">
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default MobileMenu;
