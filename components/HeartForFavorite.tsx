"use client";
import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeartForFavorite = ({ product }: { product: ProductType }) => {
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
    <button onClick={handleLike}>
      <Heart fill={`${isLiked ? "red" : "white"}`} />
    </button>
  );
};

export default HeartForFavorite;
