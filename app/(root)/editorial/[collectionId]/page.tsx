import ProductCardForEdit from "@/components/ProductCardForEdit";
import { getCollectionDetails } from "@/lib/actions/actions";
import Link from "next/link";
import Image from "next/image";
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

  return (
    <section className="mb-20">
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        {collectionDetails.title}
      </h1>
      <div className="px-4 lg:px-[15rem]">
        <Image
          className="object-cover h-[25rem] w-full mt-8"
          src={collectionDetails.image}
          width={1920}
          height={1080}
          alt="Image de la collection"
        />
      </div>
      <p className="px-4 py-8 lg:px-[15rem] text-justify tracking-wider text-[0.8rem] md:Text-[1rem]">
        {collectionDetails.description}
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
