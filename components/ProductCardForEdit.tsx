"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  product: ProductType;
}

const ProductCardForEdit = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImage = product.media[0];
  return (
    <div className="flex flex-col">
      <div className="">
        <div className="relative h-[20rem] w-[20rem] lg:h-[25rem] lg:w-[25rem] shadowSquare transition-all duration-1000">
          <Image
            src={product.media[0] || defaultImage}
            alt={product.title}
            width={1000}
            height={1000}
            className={`absolute object-cover w-full h-full transition-opacity duration-1000 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          {product.media.length > 1 && (
            <Image
              src={product.media[1]}
              alt={product.title}
              width={1000}
              height={1000}
              className={`absolute object-cover w-full h-full transition-opacity duration-1000 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardForEdit;
