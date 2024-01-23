"use client";

import React from "react";
import Image from "next/image";

const GamingHeader = ({
  imgTitle,
  description,
  sideBanner,
  baseUrl,
}: {
  imgTitle: string;
  description: string;
  sideBanner: string;
  baseUrl: string;
}) => {
  return (
    <section className=" py-20 flex flex-col gap-5 md:flex-row justify-between items-center">
      <article className=" space-y-5 w-10/12 max-w-[500px]">
        <Image src={baseUrl + imgTitle} width={300} height={300} alt="title" />
        <p className=" text-[1rem] text-white">{description}</p>
      </article>
      <Image
        src={baseUrl + sideBanner}
        width={500}
        height={500}
        alt="sidebanner"
      />
    </section>
  );
};

export default GamingHeader;
