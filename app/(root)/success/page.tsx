"use client";
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import React, { useEffect } from "react";

export default function SuccessPage() {
  const cart = useCart();

  // async function sendEmail() {
  //   "use server";
  // }

  useEffect(() => {
    cart.clearCart();

    fetch("/api/send", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <section>
      <div className="pt-[5rem] pb-4  bg-noir-1 bg-grid-small-white/[0.3]"></div>
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="py-8 text-center text-[2rem] text-noir-1 font-figtree font-bold uppercase">
          Paiement réussi
        </h1>
        <p className="font-figtree text-[1.5rem]">
          Merci pour votre commande !
        </p>
        <p className="font-figtree">
          Vous pouvez retrouvez le détail de votre commande dans votre{" "}
          <Link
            href="/mon-compte"
            className=" text-grey-2 font-bold hover:text-noir-1 transition-all ease-in-out"
          >
            espace client
          </Link>
          .
        </p>
        <Link
          href="/"
          className="w-[90%] md:w-[40%] px-8 py-4 text-white text-center font-figtree font-bold tracking-widest uppercase bg-noir-1 hover:bg-grey-4 hover:text-noir-1 transition-all ease-in-out"
        >
          Continuer le shopping
        </Link>
      </div>
      <div className="py-[3rem] flex justify-center"></div>
    </section>
  );
}

export const dynamic = "force-dynamic";
