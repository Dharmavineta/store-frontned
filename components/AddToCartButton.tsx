"use client";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

const AddToCartButton = () => {
  return (
    <Button
      onClick={() => toast.success("Product added to cart successfully")}
      size={"lg"}
      className="w-full "
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
