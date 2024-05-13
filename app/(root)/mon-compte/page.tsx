import Orders from "@/components/Orders";
import Wishlist from "@/components/Wishlist";

import { UserButton, useUser } from "@clerk/nextjs";

export default function MonComptePage() {
  return (
    <section className="pt-[7rem] px-[5rem] bg-slate-600">
      <h1 className="text-center text-[3rem]">Mon Compte</h1>
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
