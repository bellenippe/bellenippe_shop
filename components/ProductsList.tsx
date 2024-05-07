import { getProducts } from "@/lib/actions";
import ProductCard from "./ProductCard";

const ProductsList = async () => {
  const products = await getProducts();
  return (
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
  );
};

export default ProductsList;
