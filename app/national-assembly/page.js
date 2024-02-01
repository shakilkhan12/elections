import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Wrapper from "@/components/Wrapper";
import React from "react";
import Summary from "./Summary";
import { DataTableDemo } from "@/components/DataTable";
import Footer from "@/components/Footer";
export const metadata = {
  title: "National Assembly",
  description: "Generated by create next app",
};
const page = () => {
  return (
    <>
      <Nav />
      <Header />
      <Wrapper>
        <div className="max-w-screen-xl px-4 mx-auto">
          <Summary />
          <h1 className="my-10 text-lg font-medium capitalize">
            Halqa Wise Result
          </h1>

          <DataTableDemo />
        </div>
        <Footer />
      </Wrapper>
    </>
  );
};

export default page;
