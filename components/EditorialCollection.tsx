import { getCollections } from "@/lib/actions/actions";
import Link from "next/link";

const EditorialCollection = async () => {
  const collections = await getCollections();

  return (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {collections.map((collection: CollectionType) => (
          <Link
            className=" bg-slate-400 p-10 rounded-sm text-white text-center"
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
