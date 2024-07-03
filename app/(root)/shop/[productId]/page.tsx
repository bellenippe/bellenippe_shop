import Gallery from "@/components/Gallery";
import ProductCardForRelated from "@/components/ProductCardForRelated";
import ProductInfos from "@/components/ProductInfos";
import { getProductById, getRelatedProducts } from "@/lib/actions/actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Belle Nippe",
  description: "Page de présentation d'un produit de la marque Belle Nippe.",
};

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productDetail = await getProductById(params.productId);

  const relatedProducts = await getRelatedProducts(params.productId);

  return (
    <section className="">
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]"></h1>
      <div className="flex justify-center items-start gap-8 lg:gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetail.media} />
        <ProductInfos productInfos={productDetail} />
      </div>
      <div className="flex flex-col item-center px-10 py-5 max-md:px-3">
        <h3 className="px-4 lg:px-28 font-figtree text-[1rem] md:text-[1.5rem]">
          Produits associés :
        </h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mx-auto mt-8">
          {relatedProducts?.map((product: ProductType) => (
            <ProductCardForRelated key={product._id} product={product} />
          ))}
        </div>
      </div>
      <div className="py-[3rem] flex justify-center"></div>
    </section>
  );
}

export const dynamic = "force-dynamic";
