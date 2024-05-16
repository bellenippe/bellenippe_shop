import Image from "next/image";
import Link from "next/link";
import HeartForFavorite from "./HeartForFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCardForHome = ({
  product,
  updateSignedInUser,
}: ProductCardProps) => {
  return (
    <Link href={`/shop/${product._id}`} className="flex flex-col">
      <div className="">
        <div className="h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem] shadowSquare">
          <Image
            src={product.media[0]}
            alt={product.title}
            width={1000}
            height={1000}
            className=" object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-between items-center mt-8 py-4 px-4 p-1 bg-noir-1 shadowSquare">
          <h3 className="text-white font-figtree uppercase font-bold tracking-widest text-[1rem]">
            {product.title}
          </h3>
          <p className="text-white font-figtree uppercase font-bold tracking-widest text-[1rem]">
            {product.price} €
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCardForHome;
