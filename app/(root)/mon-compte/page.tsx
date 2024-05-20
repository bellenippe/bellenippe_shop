import Orders from "@/components/Orders";
import Wishlist from "@/components/Wishlist";

import { UserButton, useUser } from "@clerk/nextjs";

export default function MonComptePage() {
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[2rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        mon compte
      </h1>
      <div className="">
        {/* <article className=" bg-red-400">
          <h2>Wishlist</h2>
          <Wishlist />
        </article> */}
        <article className="px-4 lg:px-28 pt-8">
          <h3 className=" font-figtree font-semibold text-[1.5rem]">
            Mes commandes :
          </h3>
          <Orders />
        </article>
      </div>
      <div className="py-[3rem] flex justify-center">
        <div className="w-[21rem] flex items-center gap-2 bg-noir-1 p-2">
          <UserButton afterSignOutUrl="/" />
          <p className="text-white font-figtree">
            Gérer mon compte / Se déconnecter
          </p>
        </div>
      </div>
    </section>
  );
}

export const dynamic = "force-dynamic";
