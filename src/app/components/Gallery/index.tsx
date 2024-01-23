"use client";

import React, { useState } from "react";
import Image from "next/image";

import { gaming } from "@/data/gaming";

import ShowImage from "../ShowImage";

const Gallery = () => {
  const [show, setShow] = useState<null | string>(null);
  return (
    <>
      <ul className=" w-full  flex flex-wrap gap-3">
        {gaming.map((item, indx) => (
          <li
            key={indx}
            className=" relative w-[300px] aspect-square cursor-pointer rounded-md overflow-hidden"
            onClick={() => setShow(item?.imgBaseUrl + item?.banner)}
          >
            <Image
              src={item?.imgBaseUrl + item?.banner}
              alt="image"
              fill
              className=" object-cover"
            />
          </li>
        ))}
      </ul>
      {show && <ShowImage setView={setShow} isView={show} />}
    </>
  );
};

export default Gallery;
