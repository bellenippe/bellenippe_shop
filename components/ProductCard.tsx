"use client";
import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  const router = useRouter();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("api/users");
      const data = await res.json();
      setSignedInUser(data); // Quand on a le user, on le stocke dans le state
      setIsLiked(data.wishlist.includes(product._id)); // On vérifie si le produit est dans la wishlist : si il y es, ca passera à true sinon ca reste à false
      setLoading(false);
    } catch (error) {
      console.log("[usersGet]", error);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  // Fonction pour ajouter un item dans la wishlist
  const handleLike = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        setLoading(true);
        const res = await fetch("api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ productId: product._id }),
        });
        const updatedUser = await res.json();
        setSignedInUser(updatedUser);
        setIsLiked(updatedUser.wishlist.includes(product._id));
        setLoading(false);
        console.log("[handleLike]", isLiked);
      }
    } catch (error) {
      console.log("[handleLike]", error);
    }
  };

  return (
    <Link href={`/products/${product._id}`} className="flex flex-col">
      <div className=" bg-orange-400">
        <div className="h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem]">
          <Image
            src={product.media[0]}
            alt={product.title}
            width={300}
            height={300}
            className=" object-cover w-full h-full rounded-sm"
          />
        </div>
        <div className="flex justify-between items-center mt-1 px-1">
          <div>
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
          </div>
          <button type="button" onClick={handleLike}>
            <Heart fill={`${isLiked ? "red" : "white"}`} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
