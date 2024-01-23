import React from "react";

import { GamingType, gaming } from "@/data/gaming";

import GamingTypographyAndColors from "../GamingTypographyAndColors";
import GamingAssets from "./GamingAssets";
import GamingHeader from "./GamingHeader";
import GamingLogo from "./GamingLogo";

const GamingDetail = (props: { id: string }) => {
  const id = props?.id;
  const data: GamingType = gaming.filter(
    (filter) => Number(filter.id) === Number(id)
  )[0];
  return (
    <section className=" space-y-20">
      <GamingHeader
        baseUrl={data?.imgBaseUrl}
        imgTitle={data?.imageTitle}
        description={data?.description}
        sideBanner={data?.homeImage}
      />
      <GamingAssets assets={data?.assets} baseUrl={data?.imgBaseUrl} />
      <GamingLogo logos={data?.logos} baseUrl={data?.imgBaseUrl} />
      <GamingTypographyAndColors
        colors={data?.colors}
        baseUrl={data?.imgBaseUrl}
        typhography={data?.typography}
      />
    </section>
  );
};

export default GamingDetail;
