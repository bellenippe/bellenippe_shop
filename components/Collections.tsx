import { getCollections, getProductById } from "@/lib/actions/actions";
import ProductCardForHome from "./ProductCardForHome";

const Collections = async () => {
  const collections = await getCollections();
  const lastCollection = collections[collections.length - 1];
  const productPromises = lastCollection.products
    .slice(0, 2)
    .map(getProductById);

  const firstTwoProducts = await Promise.all(productPromises);

  console.log(firstTwoProducts);
  // bg-grid-small-black/[0.4]
  return (
    <article className="w-full pb-8">
      <div>
        <div>
          <p className="p-10 text-center text-[1rem] md:text-[2rem] font-weirdWords font-bold uppercase text-[#c3c3c3]  tracking-widest">
            {lastCollection.title}
          </p>
          <h1 className="mt-[-4rem] md:mt-[-5.5rem] pb-10 text-center text-[1.5rem] md:text-[2.5rem] font-figtree font-bold uppercase text-noir-1 tracking-widest">
            {lastCollection.title}
          </h1>
        </div>

        <div className="flex flex-wrap justify-center md:justify-center lg:px-[10rem] 2xl:px-[20rem] gap-10 lg:gap-20 mb-8">
          {firstTwoProducts.map((product: ProductType) => (
            <ProductCardForHome key={product._id} product={product} />
          ))}
        </div>
      </div>

      <div className="pt-2 pb-4 md:pb-4 flex flex-col items-center gap-8 mx-4 lg:mx-[10rem] 2xl:mx-[20rem]">
        <p className="text-black font-figtree text-justify tracking-wide">
          {lastCollection.description} puis rajouter quand meme quelque truc
          histoire de décrire la collection et voir comment ca rend avec un
          paragraphe. Je rajouter quand même quelques ligne en plus ou quelques
          mot en plus car je ne pense pas qu'il va décrire sa nouvelles
          collections avec des mots clés. Je rajouter quand même quelques ligne
          en plus ou quelques mot en plus car je ne pense pas qu'il va décrire
          sa nouvelles collections avec des mots clés. Je rajouter quand même
          quelques ligne en plus ou quelques mot en plus car je ne pense pas
          qu'il va décrire sa nouvelles collections avec des mots clés.
        </p>

        <button className="w-[90%] md:w-[40%] px-8 py-4 text-white font-figtree font-bold tracking-widest uppercase bg-noir-1 hover:bg-grey-4 hover:text-noir-1 transition-all ease-in-out">
          Voir la collection
        </button>
      </div>
    </article>
  );
};

export default Collections;
