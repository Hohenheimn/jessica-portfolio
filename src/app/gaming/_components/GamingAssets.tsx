"use client";

import React from "react";
import Image from "next/image";

const GamingAssets = ({
  baseUrl,
  assets,
}: {
  assets: string[];
  baseUrl: string;
}) => {
  return (
    <section className=" space-y-10">
      <Image
        src={"/images/assets-title.png"}
        width={200}
        height={200}
        alt="title"
      />
      <ul className=" flex gap-10 flex-wrap justify-center">
        {assets.map((item, indx) => (
          <li key={indx} className="">
            <Image src={baseUrl + item} width={200} height={200} alt="title" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GamingAssets;
