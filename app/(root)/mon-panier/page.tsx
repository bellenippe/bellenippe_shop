import MonPanierComponent from "@/components/MonPanier";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon Panier | Belle Nippe",
  description:
    "La page de votre panier de commande sur le site de Belle Nippe.",
};

export default function MonPanier() {
  return (
    <section className=" mb-20">
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        mon panier
      </h1>
      <MonPanierComponent />
    </section>
  );
}

export const dynamic = "force-dynamic";
