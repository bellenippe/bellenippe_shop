import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductsList = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      {!products || products.length === 0 ? (
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
