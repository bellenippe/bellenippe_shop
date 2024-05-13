"use client";
import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface HeartForFavoriteProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const HeartForFavorite = ({
  product,
  updateSignedInUser,
}: HeartForFavoriteProps) => {
  const router = useRouter();
  const { user } = useUser();

  const [loading, setLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch("api/users");
      const data = await res.json();
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

        setIsLiked(updatedUser.wishlist.includes(product._id));

        updateSignedInUser && updateSignedInUser(updatedUser); // Condition car c'est optionnel

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
