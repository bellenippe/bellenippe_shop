"use client";
import { useState } from "react";
// import HeartForFavorite from "./HeartForFavorite";
import { MinusIcon, PlusIcon } from "lucide-react";
import useCart from "@/lib/hooks/useCart";

const ProductInfos = ({ productInfos }: { productInfos: ProductType }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    productInfos.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    productInfos.size[0]
  );
  const [quantity, setQuantity] = useState<number>(1);

  const cart = useCart();

  return (
    <section className="max-w-[400px] flex flex-col gap-4 md:gap-6 font-figtree">
      <div className="flex justify-between">
        <h2 className="text-noir-1 uppercase text-[1.3rem] md:text-[1.5rem] font-figtree font-semibold">
          {productInfos.title}
        </h2>
        {/* <HeartForFavorite product={productInfos} /> */}
        <p className="text-grey-2 text-[1.3rem] uppercase font-figtree font-semibold">
          {productInfos.price} €
        </p>
      </div>

      <div className="">
        <p className="font-semibold">Description :</p>
        <p className="text-[0.8rem]">
          {productInfos.description}
        </p>
      </div>
      {productInfos.colors.length > 0 && (
        <div className="flex gap-2 items-center">
          <p className="font-semibold">Couleurs :</p>
          <div className="flex gap-1">
            {productInfos.colors.map((color, index) => (
              <p
                key={index}
                className={`text-[0.8rem] border border-noir-1 px-2 cursor-pointer hover:bg-grey-4 ${
                  selectedColor === color && "bg-noir-1 text-white"
                }`}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfos.size.length > 0 && (
        <div className="flex gap-2 items-center">
          <p className="font-semibold">Taille :</p>
          <div>
            {productInfos.size.map((siz, index) => (
              <p
                key={index}
                className={`text-[0.8rem] border border-noir-1 px-2 cursor-pointer ${
                  selectedSize === siz && "bg-noir-1 text-white"
                }`}
                onClick={() => setSelectedSize(siz)}
              >
                {siz}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2 items-center">
        <p className="font-semibold">Quantité :</p>
        {productInfos.stock === 0 ? (
          <p className="text-[0.8rem] lg:text-[1rem]">
            Ce produit n'est plus en stock
          </p>
        ) : productInfos.stock === 1 ? (
          <p className="text-[0.8rem] lg:text-[1rem]">Pièce Unique</p>
        ) : (
          <div className="flex gap-4 items-center">
            <MinusIcon
              size={20}
              className="text-noir-1 hover:text-red-500 cursor-pointer"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            />
            <p>{quantity}</p>
            <PlusIcon
              size={20}
              className="text-noir-1 hover:text-blue-500 cursor-pointer"
              onClick={() =>
                quantity < productInfos.stock && setQuantity(quantity + 1)
              }
            />
          </div>
        )}
      </div>

      <button
        className="w-full px-8 py-4 text-white font-figtree font-bold tracking-widest uppercase bg-noir-1 hover:bg-grey-4 hover:text-noir-1 transition-all ease-in-out"
        disabled={productInfos.stock === 0}
        onClick={() => {
          cart.addItem({
            item: productInfos,
            quantity,
            color: selectedColor,
            size: selectedSize,
          });
        }}
      >
        Ajouter au panier
      </button>
    </section>
  );
};

export default ProductInfos;
