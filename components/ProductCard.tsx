import Image from "next/image";
import Link from "next/link";
import HeartForFavorite from "./HeartForFavorite";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  return (
    <Link href={`/shop/${product._id}`} className="flex flex-col">
      <div className=" bg-orange-400">
        <div className="h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem]">
          <Image
            src={product.media[0]}
            alt={product.title}
            width={300}
            height={300}
            className=" object-cover w-full h-full rounded-sm"
          />
        </div>
        <div className="flex justify-between items-center mt-1 px-1">
          <div>
            <h3>{product.title}</h3>
            <p>{product.price} €</p>
          </div>
          <HeartForFavorite
            product={product}
            updateSignedInUser={updateSignedInUser}
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
