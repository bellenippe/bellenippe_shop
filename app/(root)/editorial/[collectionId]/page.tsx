import ProductCard from "@/components/ProductCard";
import { getCollectionDetails } from "@/lib/actions/actions";

export default async function CollectionPage({
  params,
}: {
  params: { collectionId: string };
}) {
  const collectionDetails = await getCollectionDetails(params.collectionId);
  console.log(collectionDetails);
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[3rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        {collectionDetails.title}
      </h1>
      <p className="px-4 py-12 md:px-[15rem] text-justify tracking-wider">
        {collectionDetails.description} Un style unique, une mode éthique et
        responsable. Belle Nippe est une maison de couture qui propose des
        vêtements et accessoires pour femmes et hommes. Nos collections sont
        conçues et fabriquées en France, dans notre atelier situé à Orléans.
        Nous utilisons des matières premières de qualité, respectueuses de
        l'environnement et des conditions de travail des ouvriers. Notre
        objectif est de proposer des vêtements et accessoires qui allient style,
        confort et durabilité. Découvrez nos collections et laissez-vous séduire
        par l'univers Belle Nippe.
      </p>
      <div className="flex gap-10 justify-evenly items-center">
        {collectionDetails.products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

export const dynamic = "force-dynamic";
