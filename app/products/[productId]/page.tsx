import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/common/Container";
import { PRODUCTS } from "@/config";
import { formatPrice } from "@/lib/utils";
import { Check, Shield, Slash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type props = {
  params: { productId: string };
};

const Product: FC<props> = ({ params }) => {
  const indProduct = PRODUCTS.find(
    (prod) => prod.id === Number(params.productId)
  );
  const BREADCRUMBS = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Products",
      href: "/",
    },
  ];
  return (
    <Container className="bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-xl px-8 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:max-w-lg lg:self-end">
            <ol className="flex items-center space-x-2">
              {BREADCRUMBS.map((crumb, i) => (
                <li key={crumb.href}>
                  <div className="flex items-center text-sm">
                    <Link
                      href={crumb.href}
                      className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                    >
                      {crumb.name}
                    </Link>
                    {i !== BREADCRUMBS.length - 1 && (
                      <Slash className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                {indProduct?.name}
              </h1>
            </div>
            <section className="mt-4">
              <div className="flex items-center">
                <p className="font-medium text-gray-900">
                  {formatPrice(indProduct?.price!)}
                </p>
                <div className="ml-4 border-l text-muted-foreground border-gray-300 pl-4">
                  {indProduct?.category}
                </div>
              </div>
              <div className="mt-4 space-y-6">
                <p className="text-balance text-muted-foreground">
                  {indProduct?.description}
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <Check className="h-5 w-5 flex-shrink-0 text-green-500" />
                <p className="ml-2 text-sm text-muted-foreground">
                  Eligible For Instant Delivery
                </p>
              </div>
            </section>
          </div>
          <div className="mt-10 lg:col-start-2 lg:row-start-2 lg:mt-0 lg:self-center">
            <div className="aspect-square rounded-lg relative">
              <Image
                src={indProduct?.urls[0].url!}
                alt=""
                fill
                className="rounded-lg bg-cover"
              />
            </div>
          </div>
          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <div>
              <div className="mt-10">
                <AddToCartButton />
              </div>
              <div className="mt-6 text-center">
                <div className="gropu inline-flex text-sm">
                  <Shield
                    aria-hidden="true"
                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"
                  />
                  <span className="text-muted-foreground hover:text-gray-700">
                    30 Day Return Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
