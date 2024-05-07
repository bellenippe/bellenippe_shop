import ProductCard from "@/components/ProductCard";
import ProductsList from "@/components/ProductsList";
import { getCollections, getProducts } from "@/lib/actions";
import React, { useState } from "react";

export default async function ShopPage() {
  const products = await getProducts();
  const collections = await getCollections();

  //! GESTION DES FILTRES
  // const [selectedCategoryId, setSelectedCategoryId] = useState("");
  // const [selectedCollectionId, setSelectedCollectionId] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleCategoryChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   setSelectedCategoryId(event.currentTarget.value);
  // };
  // const handleCollectionChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setSelectedCollectionId(event.currentTarget.value);
  // };
  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.currentTarget.value);
  // };

  // const items = products.filter(
  //   (item: ProductType) =>
  //     (selectedCategoryId === "" || item.category === selectedCategoryId) &&
  //     (selectedCollectionId === "" ||
  //       (item.collections[0] === selectedCollectionId &&
  //         (searchTerm === "" ||
  //           item.title.toLowerCase().includes(searchTerm.toLowerCase()))))
  // );

  return (
    <>
      <section className="pt-[7rem] px-[5rem] bg-slate-600">
        <h1 className="text-center text-[3rem]">Shop</h1>
        <div>
          <select>
            <option>Tous les produits</option>
            <option>Haut</option>
            <option>Bas</option>
            <option>Ensembles</option>
            <option>Accessoires</option>
          </select>
          <select>
            <option>Toutes les collections</option>
            {collections.map((collection: CollectionType) => (
              <option
                className="categorie__option"
                key={collection._id}
                value={collection._id}
              >
                {collection.title}
              </option>
            ))}
          </select>
        </div>
        <div className="h-full flex flex-col gap-12 justify-center items-center bg-black">
          <div className="flex flex-col items-center gap-10 py-8 px-5">
            {!products || products.length === 0 ? (
              <p>Aucun Produit trouvé</p>
            ) : (
              <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                {products.map((product: ProductType) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="px-[1rem]"></section>
    </>
  );
}
