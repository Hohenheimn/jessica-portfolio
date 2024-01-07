import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className=" text-white w-full h-[60vh] flex flex-col justify-center">
      <article className=" w-10/12 max-w-[40rem] space-y-5 text-xl font-thin">
        <div className="flex items-center gap-5">
          <p>Hi I&apos;m </p>
          <Image
            src="/images/jessica.png"
            alt="Jessica"
            width={200}
            height={100}
          />
        </div>
        <p>
          Im <span className=" text-secondary font-bold">Graphic Designer</span>
          , base in Philippines
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          nostrum optio natus nihil ullam veniam culpa cumque impedit et
          molestias? Unde beatae dolor omnis, asperiores rerum cumque sed
          aliquam eum?
        </p>
      </article>
    </section>
  );
};

export default Banner;
