"use client";
import { Search } from "lucide-react";
import { productsStore } from "@/app/store/products";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { collectionsStore } from "@/app/store/collections";
import { Loader } from "@/components/Loader";
import { useRouter } from "next/router";

export default function ShopComponent() {
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(4);

  //! Récupération des produits du state global Zustand
  useEffect(() => {
    productsStore.getState().fetchProducts();
    collectionsStore.getState().fetchCollections();
    setLoading(false);
  }, []);

  const products = productsStore(
    (state: { products: ProductType[] }) => state.products
  );
  const collections = collectionsStore(
    (state: { collections: CollectionType[] }) => state.collections
  );

  console.log(products);

  //! Tri des produits
  const [selectedCollectionId, setSelectedCollectionId] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCollectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCollectionId(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Produits filtrés par collection, catégorie et/ou recherche
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCollectionId === ""
        ? true
        : product.collections.some(
            (collection: any) =>
              typeof collection === "object" &&
              collection._id === selectedCollectionId
          )) &&
      (selectedCategory === "" ? true : product.category === selectedCategory)
    );
  });
  return (
    <>
      <div className="grid md:grid-cols-3 gap-2 md:gap-1 px-4 md:px-[10rem] py-12 bg-grid-small-black/[0.1]">
        <select
          className="text-white bg-grey-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Tous les produits</option>
          <option value="Haut">Haut</option>
          <option value="Bas">Bas</option>
          <option value="Ensembles">Ensembles</option>
          <option value="Accessoires">Accessoires</option>
        </select>

        <select
          className="bg-grey-3 text-white"
          value={selectedCollectionId}
          onChange={handleCollectionChange}
        >
          <option value="">Toutes les collections</option>
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

        <div className="flex gap-3 px-3 bg-grey-3 py-1 items-center">
          <input
            placeholder="Rechercher..."
            className="outline-none w-full bg-grey-3 text-white placeholder:text-white placeholder-opacity-50"
            // value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search className="cursor-pointer text-white h-4 w-4" />
        </div>
      </div>
      <div className="h-full flex flex-col gap-12 justify-center items-center">
        {/* <ProductsList /> */}
        <div className="flex flex-col items-center gap-10 py-8 px-5 lg:px-[15rem]">
          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {filteredProducts
                .slice(0, displayCount)
                .map((product: ProductType) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="py-[3rem] flex justify-center">
        {displayCount < filteredProducts.length && (
          <button
            onClick={() => setDisplayCount(displayCount + 4)}
            className="bg-grey-3 text-white font-figtree font-semibold tracking-widest uppercase py-2 px-4 hover:bg-noir-1 hover:text-white transition-all ease-in-out"
          >
            Voir plus
          </button>
        )}
      </div>
    </>
  );
}
