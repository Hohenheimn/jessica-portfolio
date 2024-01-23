import React from "react";

import { GamingType, gaming } from "@/data/gaming";

import GamingDetail from "./_components/GamingDetail";
import GamingList from "./_components/GamingList";

const GamingPage = (props: any) => {
  const id = props?.searchParams?.id;
  return <>{id ? <GamingDetail id={id} /> : <GamingList />}</>;
};

export default GamingPage;
