"use client";
import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function MonPanier() {
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();
  const total = cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
    0
  );
  const totalRounded = parseFloat(total.toFixed(2));

  const customer = {
    clerkId: user?.id,
    email: user?.emailAddresses[0].emailAddress,
    name: user?.fullName,
  };

  const handleCheckout = async () => {
    try {
      if (!user) {
        router.push("sign-in");
      } else {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          method: "POST",
          body: JSON.stringify({ cartItems: cart.cartItems, customer }),
        });
        const data = await res.json();
        window.location.href = data.url;
        console.log("[checkout-POST]", data);
      }
    } catch (error) {
      console.log("[checkout-POST]", error);
    }
  };

  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[3rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        mon panier
      </h1>
      <div className="flex gap-20 py-16 px-10 max-lg:flex-col">
        <div className="w-2/3 max-lg:w-full">
          {cart.cartItems.length === 0 ? (
            <p>Aucun produit dans le panier</p>
          ) : (
            <div>
              {cart.cartItems.map((cartItem) => (
                <div className="flex w-full max-sm:flex-col max-sm:gap-3 max-sm:items-start hover:bg-grey-2 px-6 py-5 justify-between items-center">
                  <div className="flex items-center">
                    <Image
                      src={cartItem.item.media[0]}
                      alt="produit"
                      width={100}
                      height={100}
                      className="w-30 h-30 object-cover rounded-sm"
                    />
                    <div className="flex flex-col gap-3 ml-4">
                      <p>{cartItem.item.title}</p>
                      <p>{cartItem.item.price} €</p>
                      {cartItem.color && <p>Couleur : {cartItem.color}</p>}
                      <p>Taille : {cartItem.item.size}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <MinusCircle
                      size={20}
                      className="text-black hover:text-red-500 cursor-pointer"
                      onClick={() =>
                        cartItem.quantity > 1 &&
                        cart.decreaseQuantity(cartItem.item._id)
                      }
                    />
                    <p>{cartItem.quantity}</p>
                    <PlusCircle
                      size={20}
                      className="text-black hover:text-red-500 cursor-pointer"
                      onClick={() =>
                        cartItem.quantity < cartItem.item.stock &&
                        cart.increaseQuantity(cartItem.item._id)
                      }
                    />
                  </div>
                  <Trash
                    className="hover:text-red-500 cursor-pointer"
                    onClick={() => cart.removeItem(cartItem.item._id)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-sm px-4 py-5">
          <p>
            Votre Commande{" "}
            <span>
              (
              {`${cart.cartItems.length} ${
                cart.cartItems.length > 1 ? "items" : "item"
              }`}
              )
            </span>
          </p>
          <div className="flex justify-between">
            <span>Total</span>
            <span>{totalRounded} €</span>
          </div>
          <button
            className="border rounded-sm bg-white py-3 w-full hover:bg-zinc-700"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}
