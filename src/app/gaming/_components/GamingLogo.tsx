"use client";

import React from "react";
import Image from "next/image";

const GamingLogo = ({
  baseUrl,
  logos,
}: {
  logos: string[];
  baseUrl: string;
}) => {
  return (
    <section className=" space-y-10">
      <div className=" w-full flex justify-end">
        <Image
          src={"/images/logo-title.png"}
          width={200}
          height={200}
          alt="title"
        />
      </div>
      <ul className=" flex justify-end gap-10 flex-wrap">
        {logos.map((item, indx) => (
          <li key={indx} className="">
            <Image src={baseUrl + item} width={200} height={200} alt="title" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GamingLogo;
