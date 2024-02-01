import Card from "@/components/Card";
import ChartCard from "@/components/ChartCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Table from "@/components/Table";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <div className="bg-[#F4F4F7]">
        <Wrapper>
          <div className="max-w-screen-xl mx-auto">
            <Table />
            <h1 className="my-10 text-lg font-medium capitalize">
              summary by assembly
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5].map((item) => (
                <Card item={item} />
              ))}
            </div>
            <h1 className="my-10 text-lg font-medium capitalize">
              summary by charts
            </h1>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "na" },
                { title: "kp" },
                { title: "punjab" },
                { title: "sindh" },
                { title: "balochistan" },
              ].map((item) => (
                <ChartCard item={item} />
              ))}
            </div>
          </div>
          <Footer />
        </Wrapper>
      </div>
    </>
  );
}
