"use client";
import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
    <section className=" mb-20">
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        mon panier
      </h1>
      <div className="flex gap-20 py-16 px-4 lg:px-10 max-lg:flex-col">
        <div className="w-2/3 max-lg:w-full">
          {cart.cartItems.length === 0 ? (
            <div className="flex flex-col justify-center items-center gap-8">
              <p className="text-[1.5rem] lg:text-[2rem] text-center font-figtree font-semibold tracking-widest text-noir-1">
                Aucun produit dans le panier
              </p>
              <Link
                href="/shop"
                className="w-[90%] md:w-[40%] px-8 py-4 text-white font-figtree font-bold text-center tracking-widest uppercase bg-noir-1 hover:bg-grey-4 hover:text-noir-1 transition-all ease-in-out"
              >
                Voir le shop
              </Link>
            </div>
          ) : (
            <div>
              {cart.cartItems.map((cartItem) => (
                <div className="flex w-full max-sm:flex-col max-sm:gap-3 max-sm:items-start shadowSquare transition-all duration-500 ease-in-out px-6 py-5 justify-between items-center">
                  <div className="flex flex-col lg:flex-row mx-auto lg:mx-0 items-center">
                    <Image
                      src={cartItem.item.media[0]}
                      alt="produit"
                      width={1000}
                      height={1000}
                      className="w-32 h-32 lg:w-32 lg:h-32 object-cover"
                    />
                    <div className="flex flex-col gap-3 ml-4 text-noir-1">
                      <p className="font-figtree uppercase font-bold tracking-widest">
                        {cartItem.item.title}
                      </p>
                      <p className="font-figtree uppercase font-bold">
                        {cartItem.item.price} €
                      </p>
                      {cartItem.color && (
                        <p className="font-figtree">
                          Couleur :{" "}
                          <span className="font-bold uppercase">
                            {cartItem.color}
                          </span>
                        </p>
                      )}
                      <p>
                        Taille :{" "}
                        <span className="font-bold">{cartItem.item.size}</span>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center mx-auto">
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
                      className="text-black hover:text-blue-500 cursor-pointer"
                      onClick={() =>
                        cartItem.quantity < cartItem.item.stock &&
                        cart.increaseQuantity(cartItem.item._id)
                      }
                    />
                  </div>
                  <Trash
                    className="hover:text-red-500 cursor-pointer mx-auto lg:mx-0 w-6 h-6"
                    onClick={() => cart.removeItem(cartItem.item._id)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/3  h-full flex flex-col gap-8 bg-grey-2 bg-grid-small-white/[0.3] px-4 py-5">
          <p className="font-figtree uppercase text-white font-bold text-[1.5rem]">
            Votre Commande{" "}
            <span>
              (
              {`${cart.cartItems.length} ${
                cart.cartItems.length > 1 ? "items" : "item"
              }`}
              )
            </span>
          </p>
          <div className="flex justify-between text-white font-figtree text-lg">
            <span>Total</span>
            <span className="font-bold">{totalRounded} €</span>
          </div>
          <button
            className="bg-white py-3 w-full hover:bg-noir-1 uppercase font-figtree font-bold text-noir-1 tracking-widest hover:text-white transition-all ease-in-out"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export const dynamic = "force-dynamic";
