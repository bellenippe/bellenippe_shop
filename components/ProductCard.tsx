"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeartForFavorite from "./HeartForFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImage = product.media[0];
  return (
    <Link href={`/shop/${product._id}`} className="flex flex-col">
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
        <div className="flex justify-between items-center mt-4 py-4 px-4 p-1 bg-noir-1 shadowSquare">
          <h3 className="text-white font-figtree uppercase font-bold tracking-widest text-[1rem]">
            {product.title}
          </h3>
          <p className="text-white font-figtree uppercase font-bold tracking-widest text-[1rem]">
            {product.price} €
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
