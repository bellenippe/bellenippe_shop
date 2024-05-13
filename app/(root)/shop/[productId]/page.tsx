import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import ProductInfos from "@/components/ProductInfos";
import { getProductById, getRelatedProducts } from "@/lib/actions/actions";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productDetail = await getProductById(params.productId);
  const relatedProducts = await getRelatedProducts(params.productId);
  return (
    <section className="pt-[7rem] px-[5rem] bg-slate-600">
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetail.media} />
        <ProductInfos productInfos={productDetail} />
      </div>
      <div className="flex flex-col item-center px-10 py-5 max-md:px-3">
        <p>Produit associés</p>
        <div className="flex flex-wrap gap-16 mx-auto mt-8">
          {relatedProducts?.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
