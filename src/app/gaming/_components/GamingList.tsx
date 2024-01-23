import React from "react";

import Image from "next/image";

import Link from "next/link";

import { gaming } from "@/data/gaming";

const GamingList = () => {
  return (
    <section className=" py-10">
      {gaming.map((item, indx) => (
        <Link href={`?id=${item?.id}`} key={indx}>
          <article key={indx} className=" relative w-full aspect-[3/1] border">
            <Image
              src={item?.imgBaseUrl + item?.banner}
              alt="banner"
              fill
              className=" object-cover"
            />
          </article>
        </Link>
      ))}
    </section>
  );
};

export default GamingList;
