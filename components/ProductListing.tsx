"use client";
import { PRODUCTS } from "@/config";
import React, { FC, useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import ImageSlider from "./ImageSlider";

type props = {
  product: (typeof PRODUCTS)[number];
  index?: number;
};

const ProductListing: FC<props> = ({ product, index }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index! * 75);
  }, [index]);
  const ProductPlaceholder = () => {
    return (
      <div className="flex flex-col w-full">
        <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-md">
          <Skeleton className="h-full w-full" />
        </div>
        <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
        <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
        <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      </div>
    );
  };

  //   if (!product || !isVisible) return <ProductPlaceholder />;
  if (isVisible || product) {
    return (
      <Link
        href={`/products/${product.id}`}
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
      >
        <div className="flex flex-col w-full">
          <ImageSlider urls={product.urls} />
          <h3 className="mt-4 font-medium text-sm text-slate-800">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-500">{product.category}</p>
          <p className="mt-1 font-medium text-sm text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    );
  }

  return <div>ProductListing</div>;
};

export default ProductListing;
