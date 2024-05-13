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
    <section className="pt-[7rem] px-[5rem] bg-slate-600">
      <article className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-center text-[3rem]">{collectionDetails.title}</h1>
        <p>{collectionDetails.description}</p>
        <div className="flex gap-10 justify-center items-center">
          {collectionDetails.products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </article>
    </section>
  );
}

export const dynamic = "force-dynamic";
