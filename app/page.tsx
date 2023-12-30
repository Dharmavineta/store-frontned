import Container from "@/components/common/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import ProductReel from "@/components/ProductReel";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description: "Every asset in our marketplace is tried and tested",
  },
  {
    name: "For the planet",
    icon: Leaf,
    description: "Every sale we do, we donate a dollar for green cause",
  },
];

const Home = () => {
  return (
    <>
      <Container>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-6xl">
            One stop place for High Quality{"  "}
            <span className="text-sky-600">Digital Assets</span>.
          </h1>
          <p className="mb-6 mt-3 text-lg max-w-prose text-muted-foreground">
            Welcome to AssetSphere. The only market place you can trust for high
            quality products{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our Quality Promise &rarr; </Button>
          </div>
        </div>
        <ProductReel title="Brand New" href="/" subTitle="" />
      </Container>
      <section className="border-t border-slate-300 bg-gray-50">
        <Container className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-sky-100 text-sky-900">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
