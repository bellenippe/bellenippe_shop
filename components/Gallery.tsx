"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Gallery = ({ productMedia }: { productMedia: string[] }) => {
  const defaultImage = "/path/to/default/image.jpg"; // Remplacez par le chemin de votre image par défaut
  const images =
    productMedia && productMedia.length > 0 ? productMedia : [defaultImage];
  const [mainImage, setMainImage] = useState(images[0]);

  useEffect(() => {
    if (productMedia && productMedia.length > 0) {
      setMainImage(productMedia[0]);
    } else {
      setMainImage(defaultImage);
    }
  }, [productMedia]);

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
        {images.map((image, index) => (
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

export default Gallery;
