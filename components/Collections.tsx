import { getCollections, getProductById } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const Collections = async () => {
  const collections = await getCollections();
  const lastCollection = collections[collections.length - 1];
  const productPromises = lastCollection.products
    .slice(0, 2)
    .map(getProductById);

  const firstTwoProducts = await Promise.all(productPromises);

  console.log(firstTwoProducts);

  return (
    <article className="">
      <h1>{lastCollection.title}</h1>
      <p>{lastCollection.description}</p>
      <div className="flex flex-wrap justify-center gap-10 md:gap-20">
        {/* {firstTwoProducts.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))} */}
      </div>
    </article>
  );
};

export default Collections;
