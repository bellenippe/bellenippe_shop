"use client";
import { useState } from "react";
import HeartForFavorite from "./HeartForFavorite";
import { MinusCircle, PlusCircle } from "lucide-react";
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
    <div className="max-w-[400px] flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p>{productInfos.title}</p>
        <HeartForFavorite product={productInfos} />
      </div>

      <p>{productInfos.price}</p>

      <div className="flex gap-2">
        <p>Description :</p>
        <p>{productInfos.description}</p>
      </div>
      {productInfos.colors.length > 0 && (
        <div className="flex gap-2">
          <p>Couleurs :</p>
          <div>
            {productInfos.colors.map((color, index) => (
              <p
                key={index}
                className={`border border-black px-2 rounded-sm cursor-pointer ${
                  selectedColor === color && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(color)}
              >
                {color}
              </p>
            ))}
          </div>
        </div>
      )}

      {productInfos.size.length > 0 && (
        <div className="flex gap-2">
          <p>Taille :</p>
          <div>
            {productInfos.size.map((siz, index) => (
              <p
                key={index}
                className={`border border-black px-2 rounded-sm cursor-pointer ${
                  selectedSize === siz && "bg-black text-white"
                }`}
                onClick={() => setSelectedSize(siz)}
              >
                {siz}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="felx flex-col gap-2">
        <p>Quantité :</p>
        {productInfos.stock === 1 ? (
          <p>Pièce Unique</p>
        ) : (
          <div className="flex gap-4 items-center">
            <MinusCircle
              size={20}
              className="text-black hover:text-red-500 cursor-pointer"
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            />
            <p>{quantity}</p>
            <PlusCircle
              size={20}
              className="text-black hover:text-red-500 cursor-pointer"
              onClick={() =>
                quantity < productInfos.stock && setQuantity(quantity + 1)
              }
            />
          </div>
        )}
      </div>

      <button
        className="outline py-3 rounded-sm hover:bg-black hover:text-white"
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
    </div>
  );
};

export default ProductInfos;
