import { getCollections } from "@/lib/actions/actions";
import Link from "next/link";

const EditorialCollection = async () => {
  const collections = await getCollections();

  return (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {collections.map((collection: CollectionType) => (
          <Link
            className="bg-grey-2 px-32 py-8 text-white text-center font-figtree uppercase tracking-widest font-bold text-[1.5rem] hover:bg-grey-3 hover:text-[#232323] transition-all duration-500 ease-in-out"
            key={collection._id}
            href={`/editorial/${collection._id}`}
          >
            {collection.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EditorialCollection;
