import React from "react";
import Link from "next/link";

const Heading = ({
  titleWithColor,
  title,
  color,
  format,
  moreUrl,
}: {
  titleWithColor: string;
  title?: string;
  color: "green" | "white";
  format: "vertical" | "horizontal";
  moreUrl: string;
}) => {
  return (
    <div>
      <div className={`${format === "horizontal" && "flex items-end gap-2 "} `}>
        <h1
          className={` font-bold text-[4rem] leading-[3rem] ${
            color === "green" && "text-secondary"
          } ${color === "white" && "text-white"}`}
        >
          {titleWithColor}
        </h1>
        {title && (
          <h1 className=" font-bold text-white text-[2rem] leading-[2rem]">
            {title}
          </h1>
        )}
      </div>
      {moreUrl && (
        <Link href={moreUrl}>
          <h1 className=" text-secondary mt-2 underline">WANNA SEE MORE?</h1>
        </Link>
      )}
    </div>
  );
};

export default Heading;
