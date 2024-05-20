import ShopComponent from "@/components/ShopComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Belle Nippe",
  description:
    "Page de présentation des produits en vente de la marque Belle Nippe.",
};

export default function ShopPage() {
  return (
    <section className="">
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-figtree font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        Shop
      </h1>
      <ShopComponent />
    </section>
  );
}

export const dynamic = "force-dynamic";

// : !products || filteredProducts.length === 0 ? (
//   <p className="text-[2rem] font-figtree font-semibold tracking-widest text-noir-1">
//     Aucun Produit trouvé
//   </p>
// )
