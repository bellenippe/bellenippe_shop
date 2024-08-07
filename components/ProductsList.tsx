"use client";
import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import { productsStore } from "@/app/store/products";
import { useEffect, useState } from "react";

const ProductsList = () => {
  const [loading, setLoading] = useState(true);

  // Récupération des produits du state global Zustand
  useEffect(() => {
    productsStore.getState().fetchProducts();
    setLoading(false);
  }, []);

  const products = productsStore(
    (state: any) => state.products
  ) as ProductType[];

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      {loading ? (
        <p>Chargement...</p>
      ) : !products || products.length === 0 ? (
        <p>Aucun Produit trouvé</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {products.map(
            (product: ProductType) =>
              product.stock > 0 && (
                <ProductCard key={product._id} product={product} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
