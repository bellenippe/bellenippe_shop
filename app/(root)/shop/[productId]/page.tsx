import Gallery from "@/components/Gallery";
import ProductInfos from "@/components/ProductInfos";
import { getProductById } from "@/lib/actions/actions";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const productDetail = await getProductById(params.productId);
  return (
    <section className="pt-[7rem] px-[5rem] bg-slate-600">
      <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
        <Gallery productMedia={productDetail.media} />
        <ProductInfos productInfos={productDetail} />
      </div>
    </section>
  );
}
