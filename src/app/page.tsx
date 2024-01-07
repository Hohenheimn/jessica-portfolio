import Image from "next/image";

import Banner from "./components/Banner";
import Carousel3D from "./components/Carousels/Carousel3D";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <section>
      <Banner />
      <section className=" space-y-5 flex flex-col items-center">
        <div className=" w-full">
          <Heading
            titleWithColor={"CASINO"}
            title="GAMING"
            color={"green"}
            format="horizontal"
          />
        </div>
        <article className=" w-10/12">
          <Carousel3D />
        </article>
      </section>
    </section>
  );
}
