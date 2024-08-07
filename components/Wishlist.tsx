"use client";

import { getProductById } from "@/lib/actions/actions";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import ProductCard from "./ProductCard";

const Wishlist = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [signedInUser, setSignedInUser] = useState<UserType | null>(null);
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  const getUser = async () => {
    try {
      const res = await fetch("api/users");
      const data = await res.json();
      setSignedInUser(data);
      setLoading(false);
    } catch (error) {
      console.error("[users_GET]", error);
    }
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const getWishlistProducts = async () => {
    setLoading(true);
    if (!signedInUser) return;

    const wishlistProducts = await Promise.all(
      signedInUser.wishlist.map(async (productId) => {
        const res = await getProductById(productId);
        return res;
      })
    );
    const validWishlistProducts = wishlistProducts.filter(
      (product) => product && product.id
    );
    setWishlist(validWishlistProducts);
    setLoading(false);
  };

  useEffect(() => {
    if (signedInUser) {
      getWishlistProducts();
    }
  }, [signedInUser]);

  const updateSignedInUser = (updatedUser: UserType) => {
    setSignedInUser(updatedUser);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {wishlist.length === 0 && <p>Votre wishlist est vide</p>}
          <div className="">
            {wishlist.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                updateSignedInUser={updateSignedInUser}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
