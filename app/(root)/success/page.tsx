"use client";
import useCart from "@/lib/hooks/useCart";
import Link from "next/link";
import React, { useEffect } from "react";

export default function SuccessPage() {
  const cart = useCart();

  useEffect(() => {
    cart.clearCart();
  }, []);

  return (
    <section className="pt-[7rem] lg:px-[5rem] bg-slate-600">
      <h1 className="text-center text-[3rem]">Paiement réussi</h1>
      <div>
        <p>Merci pour votre commande !</p>
        <Link href="/">Continuer le shopping</Link>
      </div>
    </section>
  );
}
