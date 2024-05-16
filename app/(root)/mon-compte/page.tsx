import Orders from "@/components/Orders";
import Wishlist from "@/components/Wishlist";

import { UserButton, useUser } from "@clerk/nextjs";

export default function MonComptePage() {
  return (
    <section>
      <h1 className="pt-[5rem] pb-4 text-center text-[3rem] text-white font-bold uppercase bg-noir-1 bg-grid-small-white/[0.3]">
        mon compte
      </h1>
      <div className="grid grid-cols-2">
        <article className=" bg-red-400">
          <h2>Wishlist</h2>
          <Wishlist />
        </article>
        <article>
          <h2>Mes commandes</h2>
          <Orders />
        </article>
      </div>

      <div className="flex justify-end">
        <div className="w-[21rem] rounded-sm flex items-center gap-2 bg-red-950 p-2">
          <UserButton afterSignOutUrl="/" />
          <p>Gérer mon compte / Se déconnecter</p>
        </div>
      </div>
    </section>
  );
}
