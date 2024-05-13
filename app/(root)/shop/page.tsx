"use client";
import { Search } from "lucide-react";
import { productsStore } from "@/app/store/products";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { collectionsStore } from "@/app/store/collections";

export default function ShopPage() {
  const [loading, setLoading] = useState(true);

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
      <section className="pt-[7rem] px-[5rem] bg-slate-600">
        <h1 className="text-center text-[3rem]">Shop</h1>
        <div className="grid md:grid-cols-3 gap-2">
          <select
            className="rounded-sm"
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
            className="rounded-sm"
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

          <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-sm">
            <input
              placeholder="Rechercher..."
              className="outline-none w-full"
              // value={searchTerm}
              onChange={handleSearchChange}
            />
            <Search className="cursor-pointer h-4 w-4 hover:text-red-600" />
          </div>
        </div>
        <div className="h-full flex flex-col gap-12 justify-center items-center">
          {/* <ProductsList /> */}
          <div className="flex flex-col items-center gap-10 py-8 px-5">
            {!products || filteredProducts.length === 0 ? (
              <p>Aucun Produit trouvé</p>
            ) : (
              <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                {filteredProducts.map(
                  (product: ProductType) =>
                    product.stock > 0 && (
                      <ProductCard key={product._id} product={product} />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="px-[1rem]"></section>
    </>
  );
}
