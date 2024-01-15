import Image from "next/image";

import { gaming } from "@/data/gaming";
import { logo } from "@/data/logo";
import { twoDAnimation } from "@/data/twoDAnimtion";
import { webDesign } from "@/data/webDesign";

import Banner from "./components/Banner";
import Carousel3D from "./components/Carousels/Carousel3D";
import CarouselBox from "./components/Carousels/CarouselBox";
import CarouselCard from "./components/Carousels/CarouselCard";
import Gallery from "./components/Gallery";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <section className=" space-y-20">
      <Banner />
      <section className=" space-y-5 flex flex-col items-center">
        <div className=" w-full">
          <Heading
            titleWithColor={"CASINO"}
            title="GAMING"
            color={"green"}
            format="vertical"
            moreUrl={"/gaming"}
          />
        </div>
        <article className=" w-10/12">
          <Carousel3D data={gaming} type="mobile" />
        </article>
      </section>
      <section className=" space-y-5 flex flex-col items-center">
        <div className=" w-full">
          <Heading
            titleWithColor={"WEB"}
            title="DESIGN"
            color={"green"}
            format="horizontal"
            moreUrl={"/web-design"}
          />
        </div>
        <article className=" w-10/12">
          <Carousel3D data={webDesign} />
        </article>
      </section>
      <section className=" space-y-5 flex flex-col items-center">
        <div className=" w-full">
          <Heading
            titleWithColor={"LOGO"}
            title="DESIGN"
            color={"green"}
            format="horizontal"
            moreUrl={"/logo-design"}
          />
        </div>
        <article className=" w-11/12">
          <CarouselBox data={logo} />
        </article>
      </section>
      <section className=" space-y-5 flex flex-col items-center">
        <div className=" w-full">
          <Heading
            titleWithColor={"2D"}
            title="Animation"
            color={"green"}
            format="horizontal"
            moreUrl={"/two-d-animation"}
          />
        </div>
        <article className=" w-11/12">
          <CarouselCard data={twoDAnimation} />
        </article>
      </section>
      <section className=" space-y-5 flex flex-col items-center">
        <div className=" w-full">
          <Heading
            titleWithColor={"BANNERS"}
            color={"green"}
            format="horizontal"
            moreUrl={"/banners"}
          />
        </div>
        <article className=" w-11/12">
          <Gallery />
        </article>
      </section>
    </section>
  );
}
