"use client";
import Image from "next/image";
import React, { useState } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const [mainImage, setMainImage] = useState(productMedia[0]);

  return (
    <div className="flex flex-col gap-3 max-w-[500px]">
      <Image
        src={mainImage}
        alt="produit"
        width={800}
        height={800}
        className="w-96 h-96 object-cover shadowSquare"
      />
      <div className="flex gap-2 justify-center md:justify-normal overflow-auto tailwind-scrollbar-hide">
        {productMedia.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="produit"
            width={200}
            height={200}
            className={`w-20 h-20 object-cover cursor-pointer filter grayscale transition-all ease-in-out ${
              mainImage === image ? "filter-none" : ""
            }`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
