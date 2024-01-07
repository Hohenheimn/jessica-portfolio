import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" min-h-screen bg-primary w-full flex flex-col items-center">
      <Header />
      <section className=" max-w-[1366px] w-11/12">{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
