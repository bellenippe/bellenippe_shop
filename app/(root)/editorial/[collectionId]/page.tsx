import ProductCardForEdit from "@/components/ProductCardForEdit";
import { getCollectionDetails } from "@/lib/actions/actions";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collection | Belle Nippe",
  description: "Présentation de la collection de vêtements Belle Nippe.",
};

export default async function CollectionPage({
  params,
}: {
  params: { collectionId: string };
}) {
  const collectionDetails = await getCollectionDetails(params.collectionId);
  console.log(collectionDetails);
  return (
    <section className="mb-20">
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        {collectionDetails.title}
      </h1>
      <p className="px-4 py-12 lg:px-[15rem] text-justify tracking-wider text-[0.8rem] md:Text-[1rem]">
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
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {collectionDetails.products.map((product: ProductType) => (
            <ProductCardForEdit key={product._id} product={product} />
          ))}
        </div>
        <Link
          href="/editorial"
          className="w-[90%] mx-auto md:w-[40%] px-8 py-4 text-white font-figtree font-bold text-center tracking-widest uppercase bg-noir-1 hover:bg-grey-4 hover:text-noir-1 transition-all ease-in-out"
        >
          Retour
        </Link>
      </div>
    </section>
  );
}

export const dynamic = "force-dynamic";
