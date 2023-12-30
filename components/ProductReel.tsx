import { PRODUCTS } from "@/config";
import Link from "next/link";
import React, { FC } from "react";
import ProductListing from "./ProductListing";

type props = {
  title: string;
  subTitle?: string;
  href?: string;
};
const ProductReel: FC<props> = ({ title, subTitle, href }) => {
  return (
    <section className="py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {title && (
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>
          )}
          {subTitle && (
            <p className="mt-2 text-sm text-muted-foreground">{subTitle}</p>
          )}
        </div>
        {href && (
          <Link
            href={href}
            className="hidden text-sm font-medium text-sky-600 hover:text-blue-500 md:block"
          >
            Shop the Collection <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {PRODUCTS.map((product, i) => (
              <ProductListing key={i} product={product} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReel;
