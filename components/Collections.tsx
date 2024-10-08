import { getCollections, getProductById } from "@/lib/actions/actions";
import ProductCardForHome from "./ProductCardForHome";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  if (collections.length === 0) {
    return (
      <article className="w-full pb-8">
        <div className="text-center py-8">
          <h1 className="text-[1.5rem] md:text-[2.5rem] font-figtree font-bold uppercase text-noir-1 tracking-widest">
            Aucune collection disponible
          </h1>
          <p className="text-[1rem] md:text-[1.5rem] text-[#c3c3c3]">
            Revenez plus tard pour découvrir nos nouvelles collections.
          </p>
        </div>
      </article>
    );
  }

  const lastCollection = collections[collections.length - 1];
  const productPromises = lastCollection.products
    .slice(0, 2)
    .map(getProductById);

  const firstTwoProducts = await Promise.all(productPromises);

  return (
    <article className="w-full pb-8">
      <div>
        <div>
          <p className="py-4 text-center text-[1rem] md:text-[2rem] font-weirdWords font-bold uppercase text-[#c3c3c3]  tracking-widest">
            {lastCollection.title}
          </p>
          <h1 className="mt-[-4rem] md:mt-[-5.5rem] pb-10 text-center text-[1.5rem] md:text-[2.5rem] font-figtree font-bold uppercase text-noir-1 tracking-widest">
            {lastCollection.title}
          </h1>
        </div>

        <div className="flex flex-wrap justify-center md:justify-center lg:px-[10rem] 2xl:px-[15rem] gap-10 lg:gap-20 mb-8">
          {firstTwoProducts.map((product: ProductType) => (
            <ProductCardForHome key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div className="pt-2 pb-4 md:pb-4 flex flex-col items-center gap-8 mx-4 px-4 lg:px-28">
        <p className="text-black font-figtree text-justify tracking-widest text-[0.8rem]">
          {lastCollection.description}
        </p>

        <Link
          href={`/shop?collectionId=${lastCollection._id}`}
          className="w-[90%] md:w-[40%] px-8 py-4 text-white font-figtree font-bold tracking-widest uppercase text-center bg-noir-1 hover:bg-grey-4 hover:text-noir-1 transition-all ease-in-out"
        >
          Voir la collection
        </Link>
      </div>
    </article>
  );
};

export default Collections;
