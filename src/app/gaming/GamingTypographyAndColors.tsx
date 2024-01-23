"use client";
import React from "react";
import Image from "next/image";

const GamingTypographyAndColors = ({
  colors,
  baseUrl,
  typhography,
}: {
  colors: string[];
  baseUrl: string;
  typhography: string;
}) => {
  return (
    <section className=" space-y-10">
      <Image
        src={"/images/typography-title.png"}
        width={400}
        height={400}
        alt="title"
      />
      <Image src={baseUrl + typhography} width={600} height={200} alt="title" />
      <ul className=" flex flex-col justify-center items-center gap-10 flex-wrap">
        {colors.map((item, indx) => (
          <li
            key={indx}
            className={`flex w-full ${
              indx % 2 === 0 ? " justify-end" : "justify-start"
            }`}
          >
            <Image src={baseUrl + item} width={500} height={600} alt="title" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GamingTypographyAndColors;
