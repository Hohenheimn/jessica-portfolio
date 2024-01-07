import React from "react";

const Heading = ({
  titleWithColor,
  title,
  color,
  format,
}: {
  titleWithColor: string;
  title?: string;
  color: "green" | "white";
  format: "vertical" | "horizontal";
}) => {
  return (
    <div className={`${format === "horizontal" && "flex items-end gap-2 "} `}>
      <h1
        className={` font-bold text-[3rem] leading-[2.5rem] ${
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
  );
};

export default Heading;
